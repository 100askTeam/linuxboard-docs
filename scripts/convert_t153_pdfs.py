#!/usr/bin/env python3
"""Convert the T153 PDF manuals to Docusaurus Markdown without rewriting text.

The converter deliberately uses the PDF's own text layer, outline, coordinates,
font sizes, and embedded images.  It does not summarize or paraphrase content.
"""

from __future__ import annotations

import argparse
import difflib
import hashlib
import json
import re
import shutil
import unicodedata
from collections import Counter, defaultdict
from dataclasses import dataclass
from pathlib import Path

import fitz


REPOSITORY_ROOT = Path(__file__).resolve().parents[1]
PDF_DIR_DEFAULT = REPOSITORY_ROOT.parent / "Docs-AIAgent" / "docs-pdf"


@dataclass(frozen=True)
class Manual:
    source: str
    slug: str
    title: str
    description: str
    position: int
    group: str
    version: str = ""
    date: str = ""


LINUX_MANUALS = [
    Manual(
        "M-Tina_Linux_系统软件_开发指南.pdf",
        "01-system-software-guide",
        "系统软件",
        "SDK、构建系统、内核、文件系统与应用开发",
        2,
        "linux",
        "2.1",
        "2025-08-25",
    ),
    Manual(
        "M-Tina_Linux_buildroot_使用指南.pdf",
        "02-buildroot-guide",
        "Buildroot",
        "目录结构、环境配置、构建、包管理与应用开发",
        3,
        "linux",
        "1.5",
        "2025-08-18",
    ),
    Manual(
        "M-Tina_Linux_配置_开发指南.pdf",
        "03-configuration-guide",
        "系统配置",
        "menuconfig、sysconfig、设备树、分区表与环境变量",
        4,
        "linux",
        "1.2",
        "2025-07-28",
    ),
    Manual(
        "M-Tina_Linux_USB_开发指南.pdf",
        "04-usb-guide",
        "USB",
        "设备树、内核配置、Gadget、Host、OTG 与调试",
        5,
        "linux",
        "2.5",
        "2025-07-29",
    ),
    Manual(
        "M-Tina_Linux_Qt_使用指南.pdf",
        "05-qt-guide",
        "Qt",
        "Qt 5 配置、编译、显示后端、示例运行与常见问题",
        6,
        "linux",
        "1.2",
        "2025-08-05",
    ),
    Manual(
        "M-Tina_Linux_OTA_开发指南.pdf",
        "06-ota-guide",
        "OTA",
        "SWUpdate、Recovery、A/B、差分升级、签名、压缩与调试",
        7,
        "linux",
        "1.2",
        "2025-08-19",
    ),
    Manual(
        "M-Tina_Linux_同构AMP多系统_开发指南.pdf",
        "07-homogeneous-amp-guide",
        "同构 AMP 多系统",
        "从系统构建、引导、内存规划、通信与调试",
        8,
        "linux",
        "1.0",
        "2025-06-12",
    ),
    Manual(
        "M-Tina_Linux_异构通信框架_开发指南 (3).pdf",
        "08-heterogeneous-communication-guide",
        "异构通信框架",
        "Remoteproc、RPMsg、共享内存与异构系统调试",
        9,
        "linux",
        "1.12",
        "2026-05-31",
    ),
]


HAL_SPECS = [
    ("M-HAL_V2_开发指南.pdf", "01-overall", "总览", "HAL V2 总体架构、环境与使用说明"),
    ("M-HAL_V2_GPIO_开发指南.pdf", "02-gpio", "GPIO", "GPIO 接口、配置与使用"),
    ("M-HAL_V2_中断控制器_开发指南.pdf", "03-interrupt-controller", "中断控制器", "中断控制器接口与使用"),
    ("M-HAL_V2_CCU_开发指南.pdf", "04-ccu", "CCU", "时钟控制单元接口与使用"),
    ("M-HAL_V2_DMA_开发指南.pdf", "05-dma", "DMA", "DMA 接口、传输与使用"),
    ("M-HAL_V2_TIMER_开发指南.pdf", "06-timer", "Timer", "定时器接口与使用"),
    ("M-HAL_V2_WATCHDOG_开发指南.pdf", "07-watchdog", "Watchdog", "看门狗接口与使用"),
    ("M-HAL_V2_RTC_开发指南.pdf", "08-rtc", "RTC", "实时时钟接口与使用"),
    ("M-HAL_V2_PWM_开发指南.pdf", "09-pwm", "PWM", "PWM 接口、配置与使用"),
    ("M-HAL_V2_PWMCS_开发指南.pdf", "10-pwmcs", "PWMCS", "PWM 捕获接口与使用"),
    ("M-HAL_V2_GPADC_开发指南.pdf", "11-gpadc", "GPADC", "通用 ADC 接口与使用"),
    ("M-HAL_V2_UART_开发指南.pdf", "12-uart", "UART", "串口接口、配置与使用"),
    ("M-HAL_V2_TWI_开发指南.pdf", "13-twi", "TWI", "TWI/I²C 接口与使用"),
    ("M-HAL_V2_SPI_开发指南.pdf", "14-spi", "SPI", "SPI 接口、配置与使用"),
    ("M-HAL_V2_CAN_开发指南.pdf", "15-can", "CAN", "CAN 接口、配置与使用"),
    ("M-HAL_V2_GMAC_开发指南.pdf", "16-gmac", "GMAC", "千兆以太网 MAC 接口与使用"),
    ("M-HAL_V2_LBC_开发指南.pdf", "17-lbc", "LBC", "本地总线控制器接口与使用"),
    ("M-HAL_V2_MSGBOX_开发指南.pdf", "18-msgbox", "MSGBOX", "消息邮箱接口与使用"),
    ("M-HAL_V2_HWSPINLOCK_开发指南.pdf", "19-hwspinlock", "HWSPINLOCK", "硬件自旋锁接口与使用"),
    ("M-HAL_V2_IRRX_开发指南.pdf", "20-irrx", "IRRX", "红外接收接口与使用"),
    ("M-HAL_V2_IRTX_开发指南.pdf", "21-irtx", "IRTX", "红外发送接口与使用"),
]

HAL_MANUALS = [
    Manual(source, slug, title, description, index + 2, "hal")
    for index, (source, slug, title, description) in enumerate(HAL_SPECS)
]

ALL_MANUALS = LINUX_MANUALS + HAL_MANUALS


HEADER_PATTERNS = (
    "文档密级",
    "版权所有",
    "文档问题反馈",
)

CODE_HINT = re.compile(
    r"(?:^|\n)\s*(?:\\?\$ |root@[^ ]*[#$] |\[[^\]]+@[^\]]+\][#$] )|"
    r"(?:^|\s)(?:#include|source |cd |make(?:\s|$)|sudo |git |repo |"
    r"echo |cat |mount |insmod |modprobe |swupdate|fw_setenv|"
    r"CONFIG_|[A-Za-z_][A-Za-z0-9_]*\s*=|/dev/|/sys/|"
    r"if\s*\[|for\s+\w+\s+in|case\s+|[{};])"
)


def normalize_text(text: str) -> str:
    text = unicodedata.normalize("NFC", text)
    text = text.replace("\u00ad", "")
    text = text.translate(
        str.maketrans(
            {
                "\u2010": "-",
                "\u2011": "-",
                "\u2212": "-",
            }
        )
    )
    text = text.replace("\u00a0", " ")
    return text.rstrip()


def compare_key(text: str) -> str:
    text = unicodedata.normalize("NFKC", normalize_text(text)).lower()
    text = re.sub(r"^\s*\d+(?:\.\d+)*\s*", "", text)
    return re.sub(r"[\s:：,，。()（）\-_/]+", "", text)


def escape_mdx(text: str) -> str:
    return (
        text.replace("\\", "\\\\")
        .replace("{", "&#123;")
        .replace("}", "&#125;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def line_text(line: dict) -> str:
    return normalize_text("".join(span["text"] for span in line["spans"]))


def block_lines(block: dict) -> list[dict]:
    result = []
    for line in block["lines"]:
        text = line_text(line)
        if text.strip():
            result.append(
                {
                    "text": text,
                    "bbox": fitz.Rect(line["bbox"]),
                    "size": max(span["size"] for span in line["spans"]),
                    "font": " ".join(span["font"] for span in line["spans"]),
                }
            )
    return result


def join_wrapped(lines: list[dict]) -> str:
    result = ""
    for item in lines:
        value = item["text"].strip()
        if not value:
            continue
        if not result:
            result = value
            continue
        if result.endswith("-"):
            result += value
        elif result[-1:].isascii() and result[-1:].isalnum() and value[:1].isascii() and value[:1].isalnum():
            result += " " + value
        else:
            result += value
    return result


def block_font_size(block: dict) -> float:
    sizes = [
        span["size"]
        for line in block["lines"]
        for span in line["spans"]
        if span["text"].strip()
    ]
    return max(sizes, default=0)


def is_body_block(block: dict) -> bool:
    rect = fitz.Rect(block["bbox"])
    if block.get("type") != 0 or rect.y1 < 60 or rect.y0 > 765:
        return False
    text = " ".join(item["text"] for item in block_lines(block))
    return bool(text.strip()) and not any(pattern in text for pattern in HEADER_PATTERNS)


def table_cells(block: dict) -> list[str] | None:
    lines = block_lines(block)
    if len(lines) < 2 or block_font_size(block) > 12:
        return None
    first_y = lines[0]["bbox"].y0
    first_row = [line for line in lines if abs(line["bbox"].y0 - first_y) <= 2.2]
    if len(first_row) < 2:
        return None
    anchors = [line["bbox"].x0 for line in first_row]
    cells = [line["text"].strip() for line in first_row]
    for line in lines[len(first_row) :]:
        index = min(range(len(anchors)), key=lambda i: abs(line["bbox"].x0 - anchors[i]))
        value = line["text"].strip()
        if cells[index].endswith("-"):
            cells[index] += value
        else:
            cells[index] += value
    return cells


def code_language(text: str) -> str:
    if "#include" in text or re.search(r"\b(?:int|void|struct)\s+\w+\s*\(", text):
        return "c"
    if "compatible =" in text or "status =" in text or re.search(r"^\s*&\w+\s*{", text, re.M):
        return "dts"
    if re.search(r"(^|\n)\s*(?:sudo|source|cd|make|git|repo|echo|cat|mount)\b", text):
        return "bash"
    return "text"


def is_code_block(block: dict) -> bool:
    lines = block_lines(block)
    if not lines or block_font_size(block) > 9:
        return False
    text = "\n".join(line["text"] for line in lines)
    return len(lines) > 1 or bool(CODE_HINT.search(text))


def render_paragraph(block: dict) -> str:
    return render_paragraph_lines(block_lines(block))


def render_paragraph_lines(lines: list[dict]) -> str:
    text = join_wrapped(lines).strip()
    if not text:
        return ""
    if text.startswith("•"):
        return "- " + escape_mdx(text[1:].strip())
    if re.match(r"^图\s*\d", text):
        return f"*{escape_mdx(text)}*"
    if text.startswith("#"):
        text = "\\" + text
    return escape_mdx(text)


def render_code(block: dict) -> str:
    return render_code_blocks([block])


def render_code_blocks(blocks: list[dict]) -> str:
    lines = [line for block in blocks for line in block_lines(block)]
    positive_starts = [line["bbox"].x0 for line in lines if 45 <= line["bbox"].x0 <= 120]
    base_x = min(positive_starts, default=min((line["bbox"].x0 for line in lines), default=0))
    rendered_lines = []
    for line in lines:
        indent = 0
        if line["bbox"].x0 >= base_x:
            indent = min(20, max(0, round((line["bbox"].x0 - base_x) / 4.8)))
        rendered_lines.append(" " * indent + line["text"].rstrip())
    text = "\n".join(rendered_lines).strip()
    text = text.replace("```", "``\\`")
    return f"```{code_language(text)}\n{text}\n```"


def assign_headings(
    blocks: list[dict], toc_for_page: list[tuple[int, str, float]]
) -> dict[int, tuple[int, str]]:
    # In several manuals the second- and third-level headings use the same
    # 10/12 pt fonts as surrounding callouts or body text.  The PDF outline is
    # therefore the authority for heading text and level; font size is only
    # used to locate the corresponding block on the page.  Some fourth-level
    # headings are 8.97 pt, so keep those too.  Callout labels remain in the
    # candidate pool because a clipped heading such as “API说明” may itself be
    # extracted as “说明”; outline-text similarity and page order disambiguate
    # them.
    candidates = [
        index
        for index, block in enumerate(blocks)
        if block_font_size(block) >= 8.9
        and len(join_wrapped(block_lines(block))) <= 160
    ]
    if not candidates or not toc_for_page:
        return {}
    result: dict[int, tuple[int, str]] = {}
    unused = candidates[:]
    last_index = -1
    for level, title, _ in toc_for_page:
        title_key = compare_key(title)
        title_number_match = re.match(r"^\s*(\d+(?:\.\d+)+)", title)
        title_number = title_number_match.group(1) if title_number_match else ""
        title_full_key = re.sub(
            r"[\s:：,，。()（）\-_/]+",
            "",
            unicodedata.normalize("NFKC", normalize_text(title)).lower(),
        )
        ranked = []
        for index in unused:
            if index < last_index:
                continue
            block_text = join_wrapped(block_lines(blocks[index]))
            block_key = compare_key(block_text)
            block_number_match = re.match(r"^\s*(\d+(?:\.\d+)+)", block_text)
            block_number = block_number_match.group(1) if block_number_match else ""
            if title_number and block_number and title_number != block_number:
                continue
            block_full_key = re.sub(
                r"[\s:：,，。()（）\-_/]+",
                "",
                unicodedata.normalize("NFKC", normalize_text(block_text)).lower(),
            )
            title_ratio = difflib.SequenceMatcher(None, title_key, block_key).ratio()
            full_ratio = difflib.SequenceMatcher(
                None, title_full_key, block_full_key
            ).ratio()
            # Full keys distinguish repeated headings such as “命令说明”.
            # The stripped-title score remains useful where the page template
            # clips a section number or the first few glyphs.
            ratio = max(full_ratio, title_ratio * 0.92)
            ranked.append(
                (ratio, -abs(len(title_full_key) - len(block_full_key)), -index)
            )
        if not ranked:
            continue
        ratio, _, negative_best = max(ranked)
        best = -negative_best
        if ratio < 0.28 and len(candidates) != len(toc_for_page):
            continue
        result[best] = (level, normalize_text(title))
        unused.remove(best)
        last_index = best
    if len(candidates) == len(toc_for_page) and len(result) != len(toc_for_page):
        return {
            index: toc_for_page[offset][:2]
            for offset, index in enumerate(candidates)
        }
    return result


def image_inventory(doc: fitz.Document) -> tuple[Counter, dict[int, list[dict]]]:
    counts: Counter = Counter()
    pages: dict[int, list[dict]] = {}
    for page_index, page in enumerate(doc):
        infos = page.get_image_info(hashes=True, xrefs=True)
        unique = {}
        for info in infos:
            digest = info.get("digest")
            if not digest:
                continue
            key = (digest, tuple(round(v, 2) for v in info["bbox"]))
            unique[key] = info
            counts[digest] += 1
        pages[page_index] = list(unique.values())
    return counts, pages


def overlap_area(first: fitz.Rect, second: fitz.Rect) -> float:
    intersection = first & second
    return max(0, intersection.width) * max(0, intersection.height)


def extract_page_images(
    doc: fitz.Document,
    page_index: int,
    image_infos: list[dict],
    image_counts: Counter,
    text_blocks: list[dict],
    output_dir: Path,
    slug: str,
) -> list[dict]:
    output = []
    seen = set()
    body_rects = [fitz.Rect(block["bbox"]) for block in text_blocks]
    for order, info in enumerate(sorted(image_infos, key=lambda item: (item["bbox"][1], item["bbox"][0]))):
        digest = info["digest"]
        rect = fitz.Rect(info["bbox"])
        if digest in seen:
            continue
        seen.add(digest)
        if rect.y1 < 60 or rect.y0 > 765 or rect.width * rect.height < 8000:
            continue
        if image_counts[digest] > 3:
            continue
        covered = sum(overlap_area(rect, text_rect) for text_rect in body_rects)
        if covered > rect.width * rect.height * 0.08:
            continue
        name_hash = hashlib.sha1(digest).hexdigest()[:10]
        base_name = f"{slug}-p{page_index + 1:03d}-{order + 1:02d}-{name_hash}"
        xref = info.get("xref", 0)
        if xref:
            extracted = doc.extract_image(xref)
            extension = extracted.get("ext", "png")
            target = output_dir / f"{base_name}.{extension}"
            target.write_bytes(extracted["image"])
        else:
            target = output_dir / f"{base_name}.png"
            pixmap = doc[page_index].get_pixmap(matrix=fitz.Matrix(2, 2), clip=rect, alpha=False)
            pixmap.save(target)
        output.append(
            {
                "bbox": rect,
                "markdown": (
                    f"![原文第 {page_index + 1} 页插图]"
                    f"(./images/{slug}/{target.name})"
                ),
            }
        )
    return output


def render_table(rows: list[list[str]]) -> str:
    width = max(len(row) for row in rows)
    normalized = [row + [""] * (width - len(row)) for row in rows]
    escaped = [
        [escape_mdx(cell).replace("|", "\\|").replace("\n", "<br />") for cell in row]
        for row in normalized
    ]
    header = escaped[0]
    body = escaped[1:]
    lines = [
        "| " + " | ".join(header) + " |",
        "| " + " | ".join("---" for _ in range(width)) + " |",
    ]
    lines.extend("| " + " | ".join(row) + " |" for row in body)
    return "\n".join(lines)


def render_page(
    doc: fitz.Document,
    page_index: int,
    toc_for_page: list[tuple[int, str, float]],
    image_infos: list[dict],
    image_counts: Counter,
    image_dir: Path,
    slug: str,
) -> str:
    page = doc[page_index]
    blocks = [
        block
        for block in page.get_text("dict", sort=True)["blocks"]
        if is_body_block(block)
    ]
    heading_map = assign_headings(blocks, toc_for_page)
    consumed = set()
    items: list[dict] = []

    index = 0
    while index < len(blocks):
        block = blocks[index]
        if index in heading_map:
            level, title = heading_map[index]
            items.append(
                {
                    "bbox": fitz.Rect(block["bbox"]),
                    "markdown": f"{'#' * min(level + 1, 6)} {title}",
                }
            )
            index += 1
            continue

        if is_code_block(block):
            code_blocks = [block]
            next_index = index + 1
            previous_rect = fitz.Rect(block["bbox"])
            while next_index < len(blocks) and next_index not in heading_map:
                next_block = blocks[next_index]
                next_rect = fitz.Rect(next_block["bbox"])
                if not is_code_block(next_block) or next_rect.y0 - previous_rect.y1 > 18:
                    break
                code_blocks.append(next_block)
                previous_rect = next_rect
                next_index += 1
            items.append(
                {
                    "bbox": fitz.Rect(
                        fitz.Rect(block["bbox"]).x0,
                        fitz.Rect(block["bbox"]).y0,
                        previous_rect.x1,
                        previous_rect.y1,
                    ),
                    "markdown": render_code_blocks(code_blocks),
                }
            )
            index = next_index
            continue

        cells = table_cells(block)
        if cells:
            rows = [cells]
            next_index = index + 1
            previous_rect = fitz.Rect(block["bbox"])
            while next_index < len(blocks) and next_index not in heading_map:
                next_cells = table_cells(blocks[next_index])
                next_rect = fitz.Rect(blocks[next_index]["bbox"])
                if not next_cells or next_rect.y0 - previous_rect.y1 > 35:
                    break
                rows.append(next_cells)
                previous_rect = next_rect
                next_index += 1
            if len(rows) >= 2:
                items.append(
                    {
                        "bbox": fitz.Rect(
                            fitz.Rect(block["bbox"]).x0,
                            fitz.Rect(block["bbox"]).y0,
                            previous_rect.x1,
                            previous_rect.y1,
                        ),
                        "markdown": render_table(rows),
                    }
                )
                consumed.update(range(index, next_index))
                index = next_index
                continue

        paragraph_blocks = [block]
        next_index = index + 1
        previous_rect = fitz.Rect(block["bbox"])
        first_text = join_wrapped(block_lines(block)).strip()
        while next_index < len(blocks) and next_index not in heading_map:
            next_block = blocks[next_index]
            next_rect = fitz.Rect(next_block["bbox"])
            next_text = join_wrapped(block_lines(next_block)).strip()
            if (
                is_code_block(next_block)
                or table_cells(next_block)
                or abs(block_font_size(next_block) - block_font_size(block)) > 0.6
                or next_rect.y0 - previous_rect.y1 > 8.5
                or abs(next_rect.x0 - fitz.Rect(block["bbox"]).x0) > 12
                or first_text.startswith(("•", "图"))
                or next_text.startswith(("•", "图"))
                or re.match(r"^\d+[.)、]\s*", first_text)
                or re.match(r"^\d+[.)、]\s*", next_text)
            ):
                break
            paragraph_blocks.append(next_block)
            previous_rect = next_rect
            next_index += 1
        markdown = render_paragraph_lines(
            [line for paragraph_block in paragraph_blocks for line in block_lines(paragraph_block)]
        )
        if markdown:
            items.append({"bbox": fitz.Rect(block["bbox"]), "markdown": markdown})
        index = next_index

    items.extend(
        extract_page_images(
            doc,
            page_index,
            image_infos,
            image_counts,
            blocks,
            image_dir,
            slug,
        )
    )
    assigned_headings = Counter(heading_map.values())
    for level, title, target_y in toc_for_page:
        key = (level, normalize_text(title))
        if assigned_headings[key]:
            assigned_headings[key] -= 1
            continue
        # A few PDF bookmarks point to a logical subsection whose heading
        # glyphs are absent from the text layer.  Preserve that outline entry
        # at its bookmark position instead of silently dropping the section.
        items.append(
            {
                "bbox": fitz.Rect(42.5, target_y, 42.5, target_y),
                "markdown": f"{'#' * min(level + 1, 6)} {normalize_text(title)}",
            }
        )
    items.sort(key=lambda item: (round(item["bbox"].y0, 1), round(item["bbox"].x0, 1)))
    rendered = "\n\n".join(item["markdown"] for item in items if item["markdown"].strip())
    if not rendered:
        return ""
    return f"<!-- PDF page {page_index + 1} -->\n\n{rendered}"


def frontmatter(manual: Manual) -> str:
    return (
        "---\n"
        f"sidebar_position: {manual.position}\n"
        f"sidebar_label: {manual.title}\n"
        f"description: {manual.description}。\n"
        "toc_max_heading_level: 3\n"
        "---"
    )


def conversion_note(manual: Manual, pages: int) -> str:
    details = [f"- **原始页数：** {pages} 页"]
    if manual.version:
        details.append(f"- **文档版本：** {manual.version}")
    if manual.date:
        details.append(f"- **发布日期：** {manual.date}")
    details.append(
        f"- **原始文件：** [查看或下载 PDF](/pdfs/T153MX/{manual.slug}.pdf)"
    )
    return (
        ":::info 文档说明\n\n"
        + "\n".join(details)
        + "\n\n正文按原始 PDF 的文本层、书签层级和页面顺序转换，"
        "仅移除重复页眉、页脚与水印，不改写技术内容。"
        "\n\n:::"
    )


def convert_manual(manual: Manual, pdf_dir: Path, category_dir: Path) -> dict:
    source = pdf_dir / manual.source
    if not source.exists():
        raise FileNotFoundError(source)
    target = category_dir / f"{manual.slug}.md"
    image_dir = category_dir / "images" / manual.slug
    if image_dir.exists():
        shutil.rmtree(image_dir)
    image_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(source)
    toc_by_page: dict[int, list[tuple[int, str, float]]] = defaultdict(list)
    for level, title, page_number, destination in doc.get_toc(simple=False):
        page_index = page_number - 1
        point = destination.get("to")
        target_y = (
            doc[page_index].rect.height - point.y + 15
            if point is not None
            else 60.0
        )
        toc_by_page[page_index].append((level, title, target_y))
    start_page = min(toc_by_page, default=0)
    image_counts, page_images = image_inventory(doc)

    parts = [
        frontmatter(manual),
        f"# {manual.title}",
        conversion_note(manual, doc.page_count),
    ]
    image_total = 0
    for page_index in range(start_page, doc.page_count):
        rendered = render_page(
            doc,
            page_index,
            toc_by_page.get(page_index, []),
            page_images.get(page_index, []),
            image_counts,
            image_dir,
            manual.slug,
        )
        if rendered:
            parts.append(rendered)
    image_total = len(list(image_dir.iterdir()))
    output_text = "\n\n".join(parts).rstrip() + "\n"
    target.write_text(output_text, encoding="utf-8")
    try:
        report_target = str(target.resolve().relative_to(REPOSITORY_ROOT))
    except ValueError:
        report_target = str(target)
    return {
        "source": manual.source,
        "target": report_target,
        "pages": doc.page_count,
        "headings": len(doc.get_toc(simple=True)),
        "generated_headings": len(re.findall(r"^#{2,6}\s", output_text, re.M)),
        "images": image_total,
        "characters": len(output_text),
    }


def write_category_files(root: Path) -> tuple[Path, Path]:
    linux_dir = root / "02-DevelopmentGuides"
    hal_dir = root / "03-HALV2"
    linux_dir.mkdir(parents=True, exist_ok=True)
    hal_dir.mkdir(parents=True, exist_ok=True)

    (linux_dir / "_category_.json").write_text(
        json.dumps(
            {
                "label": "开发指南",
                "position": 2,
                "link": {
                    "type": "generated-index",
                    "title": "开发指南",
                    "description": "T153MX 系统软件、构建配置、外设、升级与多系统开发资料。",
                },
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    (hal_dir / "_category_.json").write_text(
        json.dumps(
            {
                "label": "HAL V2",
                "position": 3,
                "link": {
                    "type": "generated-index",
                    "title": "HAL V2",
                    "description": "T153MX HAL V2 总览及各硬件模块开发资料。",
                },
            },
            ensure_ascii=False,
            indent=2,
        )
        + "\n",
        encoding="utf-8",
    )
    return linux_dir, hal_dir


def write_overview(directory: Path, title: str, manuals: list[Manual], position: int) -> None:
    title_separator = " " if re.search(r"[A-Za-z0-9]$", title) else ""
    if title == "开发指南":
        sections = [
            ("系统与构建", manuals[:3]),
            ("外设与应用", manuals[3:5]),
            ("升级与多系统", manuals[5:]),
        ]
    else:
        sections = [
            ("基础与系统控制", manuals[:5]),
            ("定时、捕获与模拟", manuals[5:11]),
            ("通信与互联", manuals[11:]),
        ]
    section_text = []
    for section_title, section_manuals in sections:
        rows = "\n".join(
            f"| [{manual.title}](./{manual.slug}.md) | {manual.description} |"
            for manual in section_manuals
        )
        section_text.append(
            f"## {section_title}\n\n"
            "| 主题 | 内容 |\n"
            "| --- | --- |\n"
            f"{rows}"
        )
    sections_markdown = "\n\n".join(section_text)
    text = f"""---
sidebar_position: {position}
sidebar_label: 概览
description: {title}{title_separator}内容索引。
---

# {title}

本分类中的正文均从原始 PDF 文本层转换，保留 PDF 目录层级、段落顺序、代码换行和插图。转换过程不对技术内容进行概括或改写。

{sections_markdown}
"""
    (directory / "00-Overview.md").write_text(text, encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--pdf-dir", type=Path, default=PDF_DIR_DEFAULT)
    parser.add_argument(
        "--output-root",
        type=Path,
        default=REPOSITORY_ROOT / "docs" / "T153MX",
    )
    parser.add_argument(
        "--only",
        action="append",
        help="Convert only a matching source filename, slug, or title; may be repeated.",
    )
    args = parser.parse_args()

    linux_dir, hal_dir = write_category_files(args.output_root)
    write_overview(linux_dir, "开发指南", LINUX_MANUALS, 1)
    write_overview(hal_dir, "HAL V2", HAL_MANUALS, 1)

    selected = ALL_MANUALS
    if args.only:
        needles = [value.lower() for value in args.only]
        selected = [
            manual
            for manual in ALL_MANUALS
            if any(
                needle in f"{manual.source} {manual.slug} {manual.title}".lower()
                for needle in needles
            )
        ]
    if not selected:
        raise SystemExit("No manuals matched --only")

    report = []
    actual_docs_root = REPOSITORY_ROOT / "docs" / "T153MX"
    copy_originals = args.output_root.resolve() == actual_docs_root.resolve()
    static_pdf_dir = REPOSITORY_ROOT / "static" / "pdfs" / "T153MX"
    if copy_originals:
        static_pdf_dir.mkdir(parents=True, exist_ok=True)
    for index, manual in enumerate(selected, start=1):
        category_dir = linux_dir if manual.group == "linux" else hal_dir
        print(f"[{index}/{len(selected)}] {manual.source}", flush=True)
        report.append(convert_manual(manual, args.pdf_dir, category_dir))
        if copy_originals:
            target_pdf = static_pdf_dir / f"{manual.slug}.pdf"
            shutil.copy2(args.pdf_dir / manual.source, target_pdf)
            target_pdf.chmod(0o644)
    report_path = args.output_root / "pdf-conversion-report.json"
    report_path.write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()

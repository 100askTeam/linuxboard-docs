import React, {useEffect, useMemo, useRef, useState} from 'react';
import styles from './styles.module.css';

const PIN_MUX = {
  PD0: ['LCD0-D2', 'SPI1-CS0', 'TWI1-SCK', 'UART3-TX', 'TWI0-SCK', 'RJTAG-MS', 'PD-EINT0'],
  PD1: ['LCD0-D3', 'SPI1-CLK', 'TWI1-SDA', 'UART3-RX', 'PWM0-0', 'RJTAG-DI', 'PD-EINT1'],
  PD2: ['LCD0-D4', 'SPI1-MOSI', 'UART2-TX', 'TWI0-SDA', 'UART1-TX', 'RJTAG-DO', 'PD-EINT2'],
  PD3: ['LCD0-D5', 'SPI1-MISO', 'UART2-RX', 'UART3-RTS', 'UART1-RX', 'RJTAG-CK', 'PD-EINT3'],
  PD4: ['LCD0-D6', 'SPI1-HOLD', 'UART2-RTS', 'UART3-CTS', 'TWI0-SCK', 'PD-EINT4'],
  PD5: ['LCD0-D7', 'SPI1-WP', 'UART2-CTS', 'IR-RX', 'TWI0-SDA', 'PD-EINT5'],
  PD6: ['LCD0-D10', 'SPI1-CS1', 'I2S0-MCLK', 'UART4-TX', 'PWM0-0', 'PD-EINT6'],
  PD7: ['LCD0-D11', 'IR-RX', 'I2S0-BCLK', 'UART4-RX', 'PWM0-1', 'PD-EINT7'],
  PD8: ['LCD0-D12', 'TWI1-SCK', 'I2S0-LRCK', 'UART4-RTS', 'PWM0-2', 'PD-EINT8'],
  PD9: ['LCD0-D13', 'TWI1-SDA', 'I2S0-DOUT0', 'UART4-CTS', 'PWM0-3', 'LCD0-VSYNC', 'PD-EINT9'],
  PD12: ['LCD0-D18', 'LVDS0-D0P', 'DSI-D0P', 'UART3-RX', 'TWI0-SDA', 'PD-EINT12'],
  PD13: ['LCD0-D19', 'LVDS0-D0N', 'DSI-D0N', 'UART2-TX', 'PD-EINT13'],
  PD14: ['LCD0-D20', 'LVDS0-D1P', 'DSI-D1P', 'UART2-RX', 'PD-EINT14'],
  PD15: ['LCD0-D21', 'LVDS0-D1N', 'DSI-D1N', 'UART2-RTS', 'PD-EINT15'],
  PD16: ['LCD0-D22', 'LVDS0-D2P', 'DSI-CKP', 'UART2-CTS', 'PD-EINT16'],
  PD17: ['LCD0-D23', 'LVDS0-D2N', 'DSI-CKN', 'UART5-TX', 'PD-EINT17'],
  PD18: ['LCD0-CLK', 'LVDS0-CKP', 'DSI-D2P', 'UART5-RX', 'PD-EINT18'],
  PD19: ['LCD0-HSYNC', 'LVDS0-CKN', 'DSI-D2N', 'UART5-RTS', 'UART4-TX', 'PD-EINT19'],
  PD20: ['LCD0-VSYNC', 'LVDS0-D3P', 'DSI-D3P', 'UART5-CTS', 'UART4-RX', 'PD-EINT20'],
  PD21: ['LCD0-DE', 'LVDS0-D3N', 'DSI-D3N', 'UART1-TX', 'UART4-RTS', 'PD-EINT21'],
  PD22: ['OWA-OUT', 'IR-RX', 'PWM0-2', 'UART1-RX', 'UART4-CTS', 'PD-EINT22'],
  PE0: ['NCSI0-MCLK', 'LCD0-D0', 'TWI1-SCK', 'I2S0-MCLK', 'UART0-TX', 'SPI1-CS0', 'SDC2-D1', 'CLK-FANOUT0', 'PE-EINT0'],
  PE1: ['NCSI0-D7', 'LCD0-D1', 'TWI1-SDA', 'I2S0-BCLK', 'UART0-RX', 'SPI1-CLK', 'SDC2-D0', 'PE-EINT1'],
  PE2: ['NCSI0-D6', 'LCD0-D8', 'TWI0-SCK', 'I2S0-LRCK', 'UART4-TX', 'SPI1-MOSI', 'SDC2-CLK', 'PWM0-0', 'PE-EINT2'],
  PE3: ['NCSI0-D5', 'LCD0-D9', 'TWI0-SDA', 'I2S0-DOUT0', 'UART4-RX', 'SPI1-MISO', 'SDC2-CMD', 'PWM0-1', 'PE-EINT3'],
  PE4: ['NCSI0-D4', 'LCD0-D16', 'TWI2-SCK', 'I2S0-DIN0', 'UART4-RTS', 'UART5-TX', 'SPI1-HOLD', 'SDC2-D3', 'PWM0-2', 'PE-EINT4'],
  PE5: ['NCSI0-D3', 'LCD0-D17', 'TWI2-SDA', 'IR-RX', 'UART4-CTS', 'UART5-RX', 'SPI1-WP', 'SDC2-D2', 'PWM0-3', 'PE-EINT5'],
  PE6: ['NCSI0-D2', 'UART2-TX', 'LCD0-D14', 'OWA-OUT', 'IR-RX', 'SPI1-CS1', 'PE-EINT6'],
  PE7: ['NCSI0-PCLK', 'UART2-RX', 'LCD0-D15', 'SPI1-CS0', 'CLK-FANOUT1', 'PE-EINT7'],
  PE8: ['NCSI0-D1', 'UART2-RTS', 'TWI0-SCK', 'UART3-TX', 'PWM0-0', 'SPI1-CLK', 'CLK-FANOUT2', 'PE-EINT8'],
  PE9: ['NCSI0-D0', 'UART2-CTS', 'TWI0-SDA', 'UART3-RX', 'PWM0-1', 'SPI1-MOSI', 'PE-EINT9'],
  PE10: ['NCSI0-HSYNC', 'UART2-TX', 'TWI1-SCK', 'I2S0-MCLK', 'UART1-TX', 'PWM0-2', 'SPI1-MISO', 'PE-EINT10'],
  PB0: ['BOOST1-PWM', 'TWI1-SCK', 'UART1-TX', 'UART2-RTS', 'PWM0-0', 'SPIF0-CS1', 'PB-EINT0'],
  PB1: ['BOOST1-FB', 'TWI1-SDA', 'UART1-RX', 'UART2-CTS', 'PWM0-1', 'IR-RX', 'PB-EINT1'],
  PB2: ['BOOST0-PWM', 'TWI2-SCK', 'UART1-RTS', 'UART2-TX', 'PWM0-2', 'SPI0-CS1', 'PB-EINT2'],
  PB3: ['BOOST0-FB', 'TWI2-SDA', 'UART1-CTS', 'UART2-RX', 'PWM0-3', 'IR-RX', 'PB-EINT3'],
  GPADC: ['GPADC'],
};

const LEFT_PINS = [
  ['H1', 1, 'VCC-3V3', 'power'], ['H1', 2, 'PD6'], ['H1', 3, 'PD7'], ['H1', 4, 'PD8'],
  ['H1', 5, 'PD9'], ['H1', 6, 'PD12'], ['H1', 7, 'PD13'], ['H1', 8, 'PD14'],
  ['H1', 9, 'PD15'], ['H1', 10, 'PD16'], ['H1', 11, 'PD17'], ['H1', 12, 'PD18'],
  ['H1', 13, 'PD19'], ['H1', 14, 'PD20'], ['H1', 15, 'PD21'], ['H1', 16, 'PE0'],
  ['H1', 17, 'PE1'], ['H1', 18, 'PE2'], ['H1', 19, 'PE3'], ['H1', 20, 'PE4'],
];

const RIGHT_PINS = [
  ['H2', 20, 'VBUS', 'power'], ['H2', 19, 'GND', 'ground'], ['H2', 18, 'PD5'], ['H2', 17, 'PD4'],
  ['H2', 16, 'PD3'], ['H2', 15, 'PD2'], ['H2', 14, 'PD1'], ['H2', 13, 'PD0'],
  ['H2', 12, 'PD22'], ['H2', 11, 'PB0'], ['H2', 10, 'PB1'], ['H2', 9, 'PB2'],
  ['H2', 8, 'PB3'], ['H2', 7, 'GPADC', 'adc'], ['H2', 6, 'PE5'], ['H2', 5, 'PE6'],
  ['H2', 4, 'PE7'], ['H2', 3, 'PE8'], ['H2', 2, 'PE9'], ['H2', 1, 'PE10'],
];

const GROUPS = [
  {id: 'display', label: '显示', test: /^(LCD|LVDS|DSI|NCSI)/},
  {id: 'spi', label: 'SPI', test: /^SPI/},
  {id: 'twi', label: 'TWI', test: /^TWI/},
  {id: 'uart', label: 'UART', test: /^UART/},
  {id: 'pwm', label: 'PWM', test: /^PWM/},
  {id: 'audio', label: '音频 / IR', test: /^(I2S|OWA|IR)/},
  {id: 'storage', label: 'SDC', test: /^SDC/},
  {id: 'system', label: '系统 / 调试', test: /(EINT|RJTAG|CLK-FANOUT|BOOST)/},
];

const DEFAULT_GROUPS = new Set(['spi', 'twi', 'uart', 'pwm']);

function groupOf(name) {
  return GROUPS.find(({test}) => test.test(name))?.id || 'system';
}

function pinRecord(tuple) {
  const [header, number, name, type = 'gpio'] = tuple;
  return {header, number, name, type, functions: PIN_MUX[name] || []};
}

function PinColumn({pins, side, activeGroups, query, selected, onSelect}) {
  return (
    <ol className={`${styles.pinColumn} ${styles[side]}`} aria-label={`${pins[0].header} 排针`}>
      {pins.map((tuple) => {
        const pin = pinRecord(tuple);
        const shown = pin.functions.filter((name) => query
          ? name.toLowerCase().includes(query)
          : activeGroups.has(groupOf(name)));
        const searchable = `${pin.header} ${pin.number} ${pin.name} ${pin.functions.join(' ')}`.toLowerCase();
        const matches = !query || searchable.includes(query);
        const key = `${pin.header}-${pin.number}`;
        return (
          <li key={key} className={`${styles.pinRow} ${!matches ? styles.dimmed : ''} ${selected === key ? styles.selected : ''}`}>
            <button type="button" className={styles.pinButton} onClick={() => onSelect(key)} aria-pressed={selected === key}>
              <span className={styles.functions}>
                {shown.map((name) => <span key={name} className={`${styles.functionChip} ${styles[groupOf(name)]}`}>{name}</span>)}
              </span>
              <span className={`${styles.pinName} ${styles[pin.type]}`}>{pin.name}</span>
              <span className={styles.pinNumber}>{pin.number}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function Board({flipped}) {
  return (
    <div className={`${styles.board} ${flipped ? styles.boardFlipped : ''}`} aria-label="YuzukiNeko F101 开发板示意图">
      <div className={styles.typeC}>USB Type-C</div>
      <div className={styles.boardTitle}>YuzukiNeko</div>
      <div className={styles.soc}><strong>F101</strong><span>C907 · RV32</span></div>
      <div className={styles.flash}>16MB<br />SPI NOR</div>
      <div className={styles.card}>TF<br />CARD</div>
      <div className={styles.fel}>FEL</div>
      <div className={styles.cat} aria-hidden="true">=＾● ⋏ ●＾=</div>
      <span className={styles.h1}>{flipped ? 'H2' : 'H1'}</span>
      <span className={styles.h2}>{flipped ? 'H1' : 'H2'}</span>
      {Array.from({length: 20}, (_, index) => (
        <React.Fragment key={index}>
          <span className={`${styles.pad} ${styles.padLeft}`} style={{top: `${3.7 + index * 4.82}%`}} />
          <span className={`${styles.pad} ${styles.padRight}`} style={{top: `${3.7 + index * 4.82}%`}} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default function F101Pinout() {
  const [activeGroups, setActiveGroups] = useState(DEFAULT_GROUPS);
  const [flipped, setFlipped] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState('H2-11');
  const scrollerRef = useRef(null);

  const allPins = useMemo(() => [...LEFT_PINS, ...RIGHT_PINS].map(pinRecord), []);
  const selectedPin = allPins.find((pin) => `${pin.header}-${pin.number}` === selected);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || window.innerWidth > 700) return;
    const centerBoard = () => {
      scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) / 2;
    };
    const frame = window.requestAnimationFrame(() => window.requestAnimationFrame(centerBoard));
    const timeout = window.setTimeout(centerBoard, 250);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, []);

  function toggleGroup(id) {
    setActiveGroups((current) => {
      const next = new Set(current);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const left = flipped ? RIGHT_PINS : LEFT_PINS;
  const right = flipped ? LEFT_PINS : RIGHT_PINS;

  return (
    <section className={styles.pinout} aria-labelledby="f101-pinout-title">
      <div className={styles.heading}>
        <div>
          <p className={styles.eyebrow}>F101 GPIO PINOUT</p>
          <h2 id="f101-pinout-title">交互式排针与引脚复用</h2>
          <p>筛选外设功能，点击任一引脚查看完整复用。数据来自 <code>yuzukineko-f101-sch.pdf</code> REV V1.5。</p>
        </div>
        <label className={styles.search}>
          <span>查找引脚或功能</span>
          <input value={query} onChange={(event) => setQuery(event.target.value.trim().toLowerCase())} placeholder="例如 PB0、UART1、SPI1" />
        </label>
      </div>

      <div className={styles.toolbar} aria-label="引脚图筛选">
        <button type="button" className={`${styles.flipButton} ${flipped ? styles.isActive : ''}`} onClick={() => setFlipped((value) => !value)} aria-pressed={flipped}>左右翻转</button>
        {GROUPS.map(({id, label}) => (
          <button key={id} type="button" className={`${styles.filterButton} ${styles[id]} ${activeGroups.has(id) ? styles.isActive : ''}`} onClick={() => toggleGroup(id)} aria-pressed={activeGroups.has(id)}>{label}</button>
        ))}
      </div>

      {selectedPin && (
        <div className={styles.detail} aria-live="polite">
          <div className={styles.detailIdentity}>
            <span>{selectedPin.header}-{selectedPin.number}</span>
            <strong>{selectedPin.name}</strong>
          </div>
          <div className={styles.detailFunctions}>
            {selectedPin.functions.length > 0
              ? selectedPin.functions.map((name) => <span key={name} className={`${styles.functionChip} ${styles[groupOf(name)]}`}>{name}</span>)
              : <span className={styles.detailNote}>{selectedPin.type === 'ground' ? '电源地' : '电源引脚，不作为 GPIO 使用'}</span>}
          </div>
        </div>
      )}

      <p className={styles.scrollHint}>左右拖动引脚图，可以查看两侧的全部复用功能。</p>

      <div ref={scrollerRef} className={styles.scroller} tabIndex="0" aria-label="可横向滚动的 F101 引脚图">
        <div className={styles.canvas}>
          <PinColumn pins={left} side="left" activeGroups={activeGroups} query={query} selected={selected} onSelect={setSelected} />
          <Board flipped={flipped} />
          <PinColumn pins={right} side="right" activeGroups={activeGroups} query={query} selected={selected} onSelect={setSelected} />
        </div>
      </div>

      <p className={styles.footnote}>复用功能来自芯片符号标注，不表示当前固件已经启用。实际使用前还要核对 `sys_config.fex`、Kconfig 和板上占用情况。</p>
    </section>
  );
}

import React from 'react';
import styles from './styles.module.css';

const SPECS = [
  ['CPU', 'C907 RV32'],
  ['RTOS', 'FreeRTOS'],
  ['FLASH', '16MB SPI NOR'],
];

export default function F101Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.kicker}>YUZUKINEKO · ALLWINNER F101</p>
        <h1><span>YuzukiNeko</span> F101</h1>
        <p className={styles.summary}>
          全志 F101（sun252iw2）<i aria-hidden="true" />玄铁 C907 RV32<i aria-hidden="true" />FreeRTOS
        </p>
        <p className={styles.detail}>16MB SPI NOR 启动，Type-C 烧录和 ADB 调试。</p>
      </div>

      <div className={styles.specs} aria-label="核心规格">
        {SPECS.map(([label, value]) => (
          <div className={styles.spec} key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </header>
  );
}

import React from 'react';
import styles from './ChartDialog.module.css';

const ChartDialog = ({ open, onClose, title, value, change, isPositive, chartSrc }) => {
  if (!open) return null;

  return (
    <div className={styles.dialogOverlay} onClick={onClose}>
      <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
        <header className={styles.dialogHeader}>
          <h2 className={styles.dialogTitle}>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>✖</button>
        </header>
        <div className={styles.dialogBody}>
          <div className={styles.metricInfo}>
            <p className={styles.metricValue}>{value}</p>
            <div className={styles.metricChange}>
              <span className={`${styles.changeIndicator} ${isPositive ? styles.positive : styles.negative}`}>
                <img src={isPositive ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/d87cf5d5743481d8db1c8705b858b0ca1b8dbb83700235304efd404b0789807a?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' : 'https://cdn.builder.io/api/v1/image/assets/TEMP/0350936b8baec8946f2089131a22ecd577dcf6217109389a2fc4150de192148e?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73'} alt="" className={styles.changeIcon} />
                {change}
              </span>
              <span className={styles.changeText}>vs last month</span>
            </div>
          </div>
          <img src={chartSrc} alt="Metric chart" className={styles.chartImage} />
        </div>
      </div>
    </div>
  );
};

export default ChartDialog;

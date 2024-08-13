// import React from 'react';
// import styles from './MetricCard.module.css';

// const MetricCard = ({ title, value, change, isPositive, chartSrc }) => {
//   return (
//     <article className={styles.metricCard}>
//       <header className={styles.cardHeader}>
//         <h2 className={styles.cardTitle}>{title}</h2>
//         <button className={styles.dropdownButton} aria-label="More options">
//           <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/24d855849a9aed06a344af9effd754547ca1575b3c4c967d51e084406a31efa9?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73" alt="" className={styles.dropdownIcon} />
//         </button>
//       </header>
//       <div className={styles.cardContent}>
//         <div className={styles.metricInfo}>
//           <p className={styles.metricValue}>{value}</p>
//           <div className={styles.metricChange}>
//             <span className={`${styles.changeIndicator} ${isPositive ? styles.positive : styles.negative}`}>
//               <img src={isPositive ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/d87cf5d5743481d8db1c8705b858b0ca1b8dbb83700235304efd404b0789807a?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' : 'https://cdn.builder.io/api/v1/image/assets/TEMP/0350936b8baec8946f2089131a22ecd577dcf6217109389a2fc4150de192148e?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73'} alt="" className={styles.changeIcon} />
//               {change}
//             </span>
//             <span className={styles.changeText}>vs last month</span>
//           </div>
//         </div>
//         <img src={chartSrc} alt="Metric chart" className={styles.chartImage} />
//       </div>
//     </article>
//   );
// };

// export default MetricCard;




















import React from 'react';
import styles from './MetricCard.module.css';

const MetricCard = ({ title, value, change, isPositive, chartSrc, onClick }) => {
  return (
    <article className={styles.metricCard} onClick={onClick}>
      <header className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <button className={styles.dropdownButton} aria-label="More options" onClick={(e) => e.stopPropagation()}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/24d855849a9aed06a344af9effd754547ca1575b3c4c967d51e084406a31efa9?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73" alt="" className={styles.dropdownIcon} />
        </button>
      </header>
      <div className={styles.cardContent}>
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
    </article>
  );
};

export default MetricCard;




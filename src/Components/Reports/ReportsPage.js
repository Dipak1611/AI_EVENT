// import React from 'react';
// import styles from './ReportsPage.module.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import MetricCard from './MetricCard';
// import EventList from './EventList';

// const ReportsPage = () => {
//   const metricData = [
//     { title: 'Active Devices', value: '23', change: '40%', isPositive: true, chartSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/479056a8543aaf971a46a80faaad76e8e9f124b613a7e4ebea32169749ab81c6?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' },
//     { title: 'Anomaly detection events', value: '1,210', change: '10%', isPositive: false, chartSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2055736f16b4897a1a300792bc2da2a54a63a5ab86552ea10f0ed8af72503b1c?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' },
//     { title: 'Cloud Storage', value: '2 TB', change: '20%', isPositive: true, chartSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/656bc9f6be279f9336159426cfe924a7d9b445ce70dcd75d0c411209d068700d?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' }
//   ];

//   return (
//     <main className={styles.reportsPage}>
//       {/* <Header /> */}
//       <div className={styles.contentWrapper}>
//         {/* <Sidebar /> */}
//         <section className={styles.mainContent}>
//           <div className={styles.reportHeader}>
//             <div>
//               <h1 className={styles.reportTitle}>Reports</h1>
//               <p className={styles.reportSubtitle}>AI powered analytical reports</p>
//             </div>
//             <div>
//             <nav className={styles.reportNav}>
//               <button className={styles.navButton}>Events</button>
//               <button className={styles.navButton}>Notifications</button>
//               <button className={`${styles.navButton} ${styles.active}`}>Reports</button>
//             </nav>
//             <div className={styles.filterSection}>
//             <div className={styles.filterGroup}>
//               <div className={styles.dropdown}>
//                 <select className={styles.select} aria-label="Select device">
//                   <option>All Device</option>
//                 </select>
//               </div>
//               <button className={styles.navLink}>previous week</button>
//             </div>
//             <button className={styles.navLink}>next week</button>
//           </div>
//           </div>
//           </div>
          
//           <div className={styles.metricGroup}>
//             {metricData.map((metric, index) => (
//               <MetricCard key={index} {...metric} />
//             ))}
//           </div>
//           <EventList />
//         </section>
//       </div>
//     </main>
//   );
// };

// export default ReportsPage;













// import React, { useState } from 'react';
// import styles from './ReportsPage.module.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import MetricCard from './MetricCard';
// import EventList from './EventList';
// import ChartDialog from './ChartDialog';

// const ReportsPage = () => {
//   const [selectedMetric, setSelectedMetric] = useState(null);

//   const metricData = [
//     { title: 'Active Devices', value: '23', change: '40%', isPositive: true, chartSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/479056a8543aaf971a46a80faaad76e8e9f124b613a7e4ebea32169749ab81c6?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' },
//     { title: 'Anomaly detection events', value: '1,210', change: '10%', isPositive: false, chartSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2055736f16b4897a1a300792bc2da2a54a63a5ab86552ea10f0ed8af72503b1c?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' },
//     { title: 'Cloud Storage', value: '2 TB', change: '20%', isPositive: true, chartSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/656bc9f6be279f9336159426cfe924a7d9b445ce70dcd75d0c411209d068700d?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' }
//   ];

//   const handleMetricClick = (metric) => {
//     setSelectedMetric(metric);
//   };

//   const closeDialog = () => {
//     setSelectedMetric(null);
//   };

//   return (
//     <main className={styles.reportsPage}>
//       <div className={styles.contentWrapper}>
//         <section className={styles.mainContent}>
//           <div className={styles.reportHeader}>
//             <div>
//               <h1 className={styles.reportTitle}>Reports</h1>
//               <p className={styles.reportSubtitle}>AI powered analytical reports</p>
//             </div>
//             <div>
//               <nav className={styles.reportNav}>
//                 <button className={styles.navButton}>Events</button>
//                 <button className={styles.navButton}>Notifications</button>
//                 <button className={`${styles.navButton} ${styles.active}`}>Reports</button>
//               </nav>
//               <div className={styles.filterSection}>
//                 <div className={styles.filterGroup}>
//                   <div className={styles.dropdown}>
//                     <select className={styles.select} aria-label="Select device">
//                       <option>All Device</option>
//                     </select>
//                   </div>
//                   <button className={styles.navLink}>previous week</button>
//                 </div>
//                 <button className={styles.navLink}>next week</button>
//               </div>
//             </div>
//           </div>
          
//           <div className={styles.metricGroup}>
//             {metricData.map((metric, index) => (
//               <MetricCard
//                 key={index}
//                 {...metric}
//                 onClick={() => handleMetricClick(metric)}
//               />
//             ))}
//           </div>
//           <EventList />
//         </section>
//       </div>

//       {selectedMetric && (
//         <ChartDialog
//           isOpen={Boolean(selectedMetric)}
//           chartSrc={selectedMetric.chartSrc}
//           title={selectedMetric.title}
//           onClose={closeDialog}
//         />
//       )}
//     </main>
//   );
// };

// export default ReportsPage;


























import React, { useState } from 'react';
import styles from './ReportsPage.module.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MetricCard from './MetricCard';
import EventList from './EventList';
import Dialog from './ChartDialog';

const ReportsPage = () => {
  const [selectedMetric, setSelectedMetric] = useState(null);

  const metricData = [
    { title: 'Active Devices', value: '23', change: '40%', isPositive: true, chartSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/479056a8543aaf971a46a80faaad76e8e9f124b613a7e4ebea32169749ab81c6?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' },
    { title: 'Anomaly detection events', value: '1,210', change: '10%', isPositive: false, chartSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2055736f16b4897a1a300792bc2da2a54a63a5ab86552ea10f0ed8af72503b1c?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' },
    { title: 'Cloud Storage', value: '2 TB', change: '20%', isPositive: true, chartSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/656bc9f6be279f9336159426cfe924a7d9b445ce70dcd75d0c411209d068700d?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' }
  ];

  const handleCardClick = (metric) => {
    setSelectedMetric(metric);
  };

  const closeDialog = () => {
    setSelectedMetric(null);
  };

  return (
    <main className={styles.reportsPage}>
      <div className={styles.contentWrapper}>
        <section className={styles.mainContent}>
          <div className={styles.reportHeader}>
            <div>
              <h1 className={styles.reportTitle}>Reports</h1>
              <p className={styles.reportSubtitle}>AI powered analytical reports</p>
            </div>
            <div>
              <nav className={styles.reportNav}>
                <button className={styles.navButton}>Events</button>
                <button className={styles.navButton}>Notifications</button>
                <button className={`${styles.navButton} ${styles.active}`}>Reports</button>
              </nav>
              <div className={styles.filterSection}>
                <div className={styles.filterGroup}>
                  <div className={styles.dropdown}>
                    <select className={styles.select} aria-label="Select device">
                      <option>All Device</option>
                    </select>
                  </div>
                  <button className={styles.navLink}>previous week</button>
                </div>
                <button className={styles.navLink}>next week</button>
              </div>
            </div>
          </div>
          
          <div className={styles.metricGroup}>
            {metricData.map((metric, index) => (
              <MetricCard
                key={index}
                {...metric}
                onClick={() => handleCardClick(metric)}
              />
            ))}
          </div>
          <EventList />
        </section>
      </div>

      {selectedMetric && (
        <Dialog
          open={!!selectedMetric}
          onClose={closeDialog}
          {...selectedMetric}
        />
      )}
    </main>
  );
};

export default ReportsPage;

import React from 'react';
import styles from './EventList.module.css';

const EventList = () => {
  const events = [
    { device: 'Device 2', type: 'Human Detection', time: '11:33 33 AM', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3334f32f3a790dd0126159508023ffad8be0e4f36551b38da5a21e40ad8849?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' },
    { device: 'Device 2', type: 'Human Detection', time: '11:02 30 AM', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb3334f32f3a790dd0126159508023ffad8be0e4f36551b38da5a21e40ad8849?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' },
    { device: 'Device 2', type: 'Face Detection', time: '11:02 30 AM', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/61443d1cbd8fc61949de247dd318c5dee8b1332eef9e06d48f5457e8245ed254?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73' }
  ];

  return (
    <section className={styles.eventListSection}>
      <div className={styles.eventListHeader}>
        <div className={styles.dateFilter}>
          <label htmlFor="dateRange" className={styles.visuallyHidden}>Date Range</label>
          <input type="text" id="dateRange" className={styles.dateInput} placeholder="pick a date range" />
          <button className={styles.clearButton}>clear</button>
        </div>
        <button className={styles.downloadButton}>
          Download report
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c111f041cdbb96efb6c26aa46c394cc7846854ab5e5b4940920a5e18f3727d3?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73" alt="" className={styles.downloadIcon} />
        </button>
      </div>
      
      <ul className={styles.eventList}>
        {events.map((event, index) => (
          <li key={index} className={styles.eventItem}>
            <span className={styles.deviceName}>{event.device}</span>
            <div className={styles.eventDetails}>
              <img src={event.icon} alt="" className={styles.eventIcon} />
              <span className={styles.eventType}>{event.type}</span>
            </div>
            <span className={styles.eventTime}>{event.time}</span>
          </li>
        ))}
      </ul>
      <button className={styles.loadMoreButton}>load more</button>
    </section>
  );
};

export default EventList;
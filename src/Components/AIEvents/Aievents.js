import React, { useState } from "react";
import styles from "./Aievents.module.css";

export default function Aievents() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDateIndex, setSelectedDateIndex] = useState();

  const previousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
    setSelectedDateIndex(null); // Reset selection when changing weeks
  };

  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
    setSelectedDateIndex(null); // Reset selection when changing weeks
  };

  const getDayName = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[date];
  };

  const getMonthName = (date) => {
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August", // Fixed "Aug" to "August"
      "September",
      "October",
      "November",
      "December",
    ];
    return monthsOfYear[date];
  };

  const handleDateClick = (index, date) => {
    setSelectedDateIndex(index);

    console.log(`Selected date: ${date.getDate()} ${getMonthName(date.getMonth())} ${getDayName(date.getDay())}`);
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(
        <div
          key={i}
          className={`${styles.div30} ${
            selectedDateIndex === i ? styles.selected : ""
          }`}
          onClick={() => handleDateClick(i, date)}
        >
          <div className={styles.div31}>
            <div className={styles.div32}>
              <div className={styles.jul}>
                {date.getDate()} {getMonthName(date.getMonth())}
              </div>
              <div className={styles.sun}>{getDayName(date.getDay())}</div>
            </div>
          </div>
        </div>
      );
    }
    return dates;
  };

  return (
    <>
      <div className={styles.eventsDesktop}>
        <div className={styles.div}>
          <div className={styles.div2}></div>
        </div>
        <div className={styles.div3}>
          <div className={styles.div4}>
            <div className={styles.column2}>
              <div className={styles.div15}>
                <div className={styles.aiEvents}>AI Events</div>
                <div className={styles.div16}>
                  <div className={styles.listOfEventsTriggeredByCameras}>
                    List of events triggered by cameras
                  </div>
                  <div className={styles.div17}>{renderDates()}</div>
                </div>
              </div>
            </div>
            <div className={styles.column3}>
              <div className={styles.div24}>
                <div className={styles.buttonGroup}>
                  <div className={styles.buttonGroupBase}>Events</div>
                  <div className={styles.buttonGroupBase}>Notifications</div>
                  <div className={styles.buttonGroupBase}>Reports</div>
                </div>
                <div className={styles.div25}>
                  <div className={styles.div26}>
                    <div className={styles.column4}>
                      <div className={styles.div27}>
                        <div className={styles.div28}>
                          <div className={styles.inputDropdownBase}>
                            <div className={styles.inputWithLabel}>
                              <div className={styles.input}>
                                <div className={styles.content}>All Device</div>
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f288935232c2b601ff5bd7f94908d897dfaab83742491521bc37030849a2b7c?placeholderIfAbsent=true&apiKey=56fd99c2cc99464c8d941c32919aba73"
                                  className={styles.img13}
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className={styles.previousWeek}
                            onClick={previousWeek}
                          >
                            previous week
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column5}>
                      <div className={styles.div42}>
                        <div className={styles.nextWeek} onClick={nextWeek}>
                          next week
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.div46}>
          <div className={styles.inputDropdown}>
            <select id="detection-models" name="detection-models">
              <option value="model1">All detection models</option>
              <option value="model2">Motion detection </option>
              <option value="model3">Detection detection </option>
              <option value="model4">Detection Model 4</option>
              <option value="model5">Detection Model 5</option>
            </select>
          </div>
          <div className={styles.clear}>clear</div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import styles from "../Aievents.module.css";

export default function Aievents() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const previousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
    console.log(currentDate);
  };

  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
    console.log(currentDate);
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
      "Aug",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthsOfYear[date];
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      dates.push(
        <div key={i} className={styles[22]}>
          <div className={styles.jul}>
            {date.getDate()} {getMonthName(date.getMonth())}
          </div>
          <div className={styles.sun}>{getDayName(date.getDay())}</div>
        </div>
      );
    }
    return dates;
  };

  return (
    <>
      <div className={styles.eventsDesktop}>
        <div className={styles.div}>
          <div className={styles.div2}>
            {/* <div className={styles.button}>
              <div className={styles.buttonBase}>+ device</div>
            </div> */}
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.div4}>
            {/* <div className={styles.column}>
              <div className={styles.div5}>
                <div className={styles.div6} />
                <div className={styles.div7}>

                  <div className={styles.cameras}>Cameras</div>
                </div>
                <div className={styles.div8}>

                  <div className={styles.multiScreen}>Multi Screen</div>
                </div>
                <div className={styles.div9}>

                  <div className={styles.events}>Events</div>
                </div>
                <div className={styles.div10}>

                  <div className={styles.profile}>Profile</div>
                </div>
                <div className={styles.div11}>

                  <div className={styles.subscription}>Subscription</div>
                </div>
                <div className={styles.div12}>

                  <div className={styles.settings}>Settings</div>
                </div>
                <div className={styles.div13}>

                  <div className={styles.openMap}>Open Map</div>
                </div>
                <div className={styles.div14}>

                  <div className={styles.logout}>Logout</div>
                </div>
              </div>
            </div> */}
            <div className={styles.column2}>
              <div className={styles.div15}>
                <div className={styles.aiEvents}>AI Events</div>
                <div className={styles.div16}>
                  <div className={styles.listOfEventsTriggeredByCameras}>
                    List of events triggered by cameras
                  </div>
                  <div className={styles.div17}>
                    <div className={styles.div18}>
                      <div className={styles.div19}>
                        <div className={styles.div20}>
                          <div className={styles.jul}>
                            {renderDates()[0]}
                            {/* {currentDate.getDate()}{" "}
                            {getMonthName(currentDate.getMonth())}
                          </div>
                          <div className={styles.sun}>
                            {getDayName(currentDate.getDay())} */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.div21}>
                      <div className={styles.div22}>
                        <div className={styles.div23}>
                          <div className={styles.jul}>
                            {renderDates()[1]}
                            {/* {currentDate.getDate() + 1}{" "}

                            {getMonthName(currentDate.getMonth())}
                          </div>
                          <div className={styles.sun}>
                            {getDayName(currentDate.getDay() + 1)} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                        <div className={styles.div29}>
                          <div className={styles.div30}>
                            <div className={styles.div31}>
                              <div className={styles.div32}>
                                <div className={styles.jul}>
                                  {renderDates()[2]}
                                  {/* {currentDate.getDate() + 2}{" "}
                                  {getMonthName(currentDate.getMonth())}
                                </div>
                                <div className={styles.sun}>
                                  {getDayName(currentDate.getDay() + 2)} */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.div33}>
                            <div className={styles.div34}>
                              <div className={styles.div35}>
                                <div className={styles.jul}>
                                  {renderDates()[3]}
                                  {/* {currentDate.getDate() + 3}{" "}
                                  {getMonthName(currentDate.getMonth())}
                                </div>
                                <div className={styles.sun}>
                                  {getDayName(currentDate.getDay() + 3)} */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.div36}>
                            <div className={styles.div37}>
                              <div className={styles.div38}>
                                <div className={styles.jul}>
                                  {renderDates()[4]}
                                  {/* {currentDate.getDate() + 4}{" "}
                                  {getMonthName(currentDate.getMonth())}
                                </div>
                                <div className={styles.sun}>
                                  {getDayName(currentDate.getDay() + 4)} */}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.div39}>
                            <div className={styles.div40}>
                              <div className={styles.div41}>
                                <div className={styles.jul}>
                                  {renderDates()[5]}
                                  {/* {currentDate.getDate() + 5}{" "}
                                  {getMonthName(currentDate.getMonth())}
                                </div>
                                <div className={styles.sun}>
                                  {getDayName(currentDate.getDay() + 5)} */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.column5}>
                      <div className={styles.div42}>
                        <div className={styles.nextWeek} onClick={nextWeek}>
                          next week
                        </div>
                        <div className={styles.div43}>
                          <div className={styles.div44}>
                            <div className={styles.div45}>
                              <div className={styles.jul}>
                                {renderDates()[6]}
                                {/* {currentDate.getDate() + 6}{" "}
                                {getMonthName(currentDate.getMonth())}
                              </div>
                              <div className={styles.sun}>
                                {getDayName(currentDate.getDay() + 6)} */}
                              </div>
                            </div>
                          </div>
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

import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Experience = () => {
  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "500px",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  };

  const skillStyle = {
    backgroundColor: "#19376d",
    borderRadius: "50%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    margin: "0.5rem",
    padding: "1rem", // Added padding to accommodate the icon and make the div round
    width: "130px", // Increased width for better spacing
    height: "100px", // Increased height for better spacing
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: "1 1 120px", // Adjusted for responsiveness
    maxWidth: "150px", // Maximum width for larger screens
  };

  const skillIconContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem", // Space between icon and text
  };

  const skillIconStyle = {
    fontSize: "45px", // Adjusted icon size
    color: "#576cbc", // Icon color
  };

  const skillTextStyle = {
    fontSize: "0.9rem",
    color: "#ffffff", // Text color
    display: "flex",
    alignItemsL: "center",
    justifyContent: "center",
  };

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul style={listStyle}>
          {skills.map((skill, id) => (
            <div
              style={{
                display: "flex",
                flexDirection:'column',
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li key={id} style={skillStyle}>
                <div style={skillIconContainerStyle}>
                  <i className={skill.iconClass} style={skillIconStyle}></i>
                </div>
              </li>
              <p style={skillTextStyle}>{skill.title}</p>
            </div>
          ))}
        </ul>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div style={{ display: "flex", height: "100%" }}>
                  <div style={{ height: "fit" }}>
                    <img
                      style={{
                        width: "60px",
                        height: "auto",
                        borderRadius: "50%",
                      }}
                      src={getImageUrl(historyItem.imageSrc)}
                      alt={`${historyItem.organisation} Logo`}
                    />
                  </div>
                </div>
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

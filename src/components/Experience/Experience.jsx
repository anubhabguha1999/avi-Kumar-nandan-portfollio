import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Experience = () => {
  // Define keyframes for the snake-like circular animation
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes snakeAnimation {
        0% { border-image-source: linear-gradient(90deg, red, transparent); border-image-slice: 1; border-image-width: 5px; box-shadow: 0 0 15px 5px rgba(70, 0, 0, 0.6); }
        25% { border-image-source: linear-gradient(180deg, red, transparent); border-image-slice: 1; border-image-width: 5px; box-shadow: 0 0 15px 5px rgba(0, 0, 70, 0.6); }
        50% { border-image-source: linear-gradient(270deg, red, transparent); border-image-slice: 1; border-image-width: 5px; box-shadow: 0 0 15px 5px rgba(0, 0, 70, 0.1); }
        75% { border-image-source: linear-gradient(360deg, red, transparent); border-image-slice: 1; border-image-width: 5px; box-shadow: 0 0 15px 5px rgba(70, 0, 0, 0.6); }
        100% { border-image-source: linear-gradient(90deg, red, transparent); border-image-slice: 1; border-image-width: 5px; box-shadow: 0 0 15px 5px rgba(0, 0, 70, 0.6); }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  // Define inline styles
  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "500px",
    gap: "20px",
  };

  const skillStyle = {
    border: "5px solid transparent", // Create space for the border effect
    margin: "0.5rem",
    padding: "1rem",
    width: "130px", // Ensure width and height are equal
    height: "130px", // Ensure width and height are equal
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: "1 1 120px",
    maxWidth: "150px",
    position: "relative",
    overflow: "hidden",
    borderImageSource: "linear-gradient(90deg, red, blue, green)",
    borderImageSlice: 1,
    borderImageWidth: "5px",
    animation: "snakeAnimation 7s infinite linear",
    boxShadow: "0 0 15px rgba(70, 0, 0, 0.6)", // Default to red glow
  };

  const skillIconContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
  };

  const skillIconStyle = {
    fontSize: "45px",
    color: "white",
  };

  const skillTextStyle = {
    fontSize: "0.9rem",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Helper function to get box-shadow color based on the animation phase
  const getBoxShadowColor = (animationProgress) => {
    if (animationProgress >= 0 && animationProgress < 0.25)
      return "rgba(70, 0, 0, 0.6)"; // Red
    if (animationProgress >= 0.25 && animationProgress < 0.5)
      return "rgba(11, 36, 71, 0.6)"; // #0b2447
    if (animationProgress >= 0.5 && animationProgress < 0.75)
      return "rgba(11, 36, 71, 0.6)"; // #0b2447
    return "rgba(70, 0, 0, 0.6)"; // Default to Red
  };

  // State for hover effect
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul style={listStyle}>
          {skills.map((skill, id) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative", // Ensure the animation stays within the div
              }}
              key={id}
            >
              <li
                style={{
                  ...skillStyle,
                  boxShadow: `0 0 15px ${
                    hoveredIndex === id
                      ? "rgba(0, 0, 0, 0.8)"
                      : getBoxShadowColor(id / skills.length)
                  }`,
                }}
                onMouseEnter={() => setHoveredIndex(id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
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
                        marginTop: "1rem",
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

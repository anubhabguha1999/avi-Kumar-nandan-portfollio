import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("history/vivo.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Area Sales Manager at Vivo</h3>
              <p>
                I have extensive experience as an Area Sales Manager at Vivo, where I
                was responsible for overseeing sales strategies, managing client relationships, and driving revenue growth across multiple regions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Team Leadership</h3>
              <p>
                Successfully led a team of sales representatives, providing guidance and
                training to improve performance and achieve sales targets. My role involved
                coaching, mentoring, and performance monitoring to ensure team success.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Market Strategy</h3>
              <p>
                Developed and executed market strategies to expand market presence
                and enhance brand visibility. Focused on customer needs and trends to
                effectively position products and drive growth.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Achievement icon" />
            <div className={styles.aboutItemText}>
              <h3>Achievements</h3>
              <p>
                Consistently met and exceeded sales targets, contributing to the overall
                success of the company. Recognized for outstanding sales performance
                and innovative sales approaches.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

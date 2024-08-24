import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 style={{background: '#002244', margin: 'auto', display: 'flex', justifyContent: 'center', paddingLeft: '1rem',paddingRight: '1rem', borderRadius: '20%'}}>Contact</h2>
        <p style={{fontSize: '2rem'}}>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:anubhabguha1999@gmail.com">Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/anubhab-guha-478967201/">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/anubhabguha1999">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

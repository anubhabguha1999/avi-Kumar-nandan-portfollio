import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:navi6354@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
          style={{height:'2.5rem', width: '2.5rem'}}
            src={getImageUrl("contact/facebook.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.facebook.com/bloker.avijit">Facebook</a>
        </li>
        <li className={styles.link}>
          <img  style={{height:'2.5rem', width: '2.5rem'}} src={getImageUrl("contact/insta.png")} alt="Github icon" />
          <a href="https://www.instagram.com/abhi_kumar_nandan007/">Instagram</a>
        </li>
      </ul>
    </footer>
  );
};

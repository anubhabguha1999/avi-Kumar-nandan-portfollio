import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm <span className={styles.animateText}>Avi Kumar Nandan</span></h1>
        <p className={styles.description}>
        I have experience working as an Area Sales Manager at Vivo. Feel free to reach out if you'd like to learn more!
        </p>
        <a href="mailto:navi6354@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroIcon.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

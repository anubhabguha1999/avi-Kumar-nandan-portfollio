import React, { useEffect, useRef, useState } from 'react';
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  const appRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (appRef.current) {
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the middle and bottom of the page
  const middleOfPage = (document.documentElement.scrollHeight - window.innerHeight) / 2;
  const bottomOfPage = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate color based on scroll position
  let backgroundColor = '';
  if (scrollY > middleOfPage) {
    const progress = Math.min(1, (scrollY - middleOfPage) / (bottomOfPage - middleOfPage));
    // Transition to black #000000 (rgb(0, 0, 0))
    const redComponent = Math.round(0 * progress); // Increase red component towards 0
    const greenComponent = Math.round(0 * progress); // Increase green component towards 0
    const blueComponent = Math.round(0 * progress); // Increase blue component towards 0
    backgroundColor = `rgb(${redComponent}, ${greenComponent}, ${blueComponent})`;
  }

  return (
    <div
      className={styles.App}
      ref={appRef}
      style={{
        backgroundColor: backgroundColor,
        transition: 'background-color 1s ease-out', // Smooth easing-out transition
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;

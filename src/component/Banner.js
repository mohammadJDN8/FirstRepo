import React from 'react';
import styles from './Banner.module.css';
import banner from '../images/mountain.jpg'
const Banner = () => {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src={banner} alt="banner" />
      <div className={styles.textContainer}>
        <h1>Jimi Start</h1>
        <p>we're learning <span>React.js</span></p>
      </div>
    </div>
  );
};

export default Banner;
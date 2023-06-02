import React from 'react';
import styles from './MainPage.module.css';
import Slider from '../Slider/Slider';

const MainPage = () => {
  return (
    <main className={styles.hero}>
      <h1 className={styles.hero_title}>
        <span className={styles.visually_hidden}>Babershop Chik-Chik</span>
        <span>Мы создаём искусство, которое не стыдно показать</span>
      </h1>
      <Slider />
    </main>
  );
};
export default MainPage;

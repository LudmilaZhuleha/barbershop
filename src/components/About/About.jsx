import React from 'react';
import styles from '../About/About.module.css';

const About = () => {
  return (
    <div className={styles.about_container}>
      <h2 className={styles.about_title}>Мы помогаем всем мужчинам выглядеть уверенно</h2>
      <p className={styles.about_tagline}>
        Сhik chik — это намного больше, чем просто барберная. Это место, где вам помогут найти свой
        собственный, неповторимый стиль. Стоит довериться нашим мастерам один раз, и, поверьте,
        новый образ не оставит Вас равнодушным. Мужские стрижки и опасное бритье — это наш профиль,
        и мы уверены, что наши барберы делают это лучше всех.
      </p>
      <ul className={styles.about_list}>
        <li className={styles.about_item_top}>
          <h3 className={styles.about_title}>топ специалисты</h3>
          <p className={styles.about_desc}>Мы подстрижем вас на высшем уровне</p>
        </li>
        <li className={styles.about_item_master}>
          <h3 className={styles.about_title}>мастера бород и усов</h3>
          <p className={styles.about_desc}>Мы заботливо уложим вашу бороду и усы</p>
        </li>
        <li className={styles.about_item_guarantee}>
          <h3 className={styles.about_title}>гарантия качества</h3>
          <p className={styles.about_desc}>Мы используем только профессиональные средства</p>
        </li>
      </ul>
    </div>
  );
};
export default About;

import React from 'react';
import styles from '../AboutList/AboutList.module.css';

// eslint-disable-next-line react/prop-types
const AboutList = ({ list }) => {
  // eslint-disable-next-line react/prop-types
  const listitems = list.map((item, i) => (
    <li className={styles.about_item} key={i}>
      <span className={styles.about_title}>{item.name}</span>
      <span className={styles.about_desc}>{item.description}</span>
    </li>
  ));
  return <ul className={styles.about_list}>{listitems}</ul>;
};
export default AboutList;

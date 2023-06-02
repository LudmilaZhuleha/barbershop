import React from 'react';
import styles from '../PriceList/PriceList.module.css';

// eslint-disable-next-line react/prop-types
const PriceList = ({ list }) => {
  // eslint-disable-next-line react/prop-types
  const listitems = list.map((item) => (
    <li className={styles.pricelist_item} key={item.id}>
      <span className={styles.pricelist_title}>{item.name}</span>
      <span className={styles.pricelist_count}>{item.price} руб.</span>
    </li>
  ));
  return <ul className={styles.pricelist_list}>{listitems}</ul>;
};
export default PriceList;

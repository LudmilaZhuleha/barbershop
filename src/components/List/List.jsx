import React from 'react';
import styles from './List.module.css';
// eslint-disable-next-line react/prop-types
const List = ({ list }) => {
  // eslint-disable-next-line react/prop-types
  const listitems = list.map((item, i) => (
    <li key={i}>
      <span>{item.name}</span>
      <span>{item.description}</span>
    </li>
  ));
  return <ul className={styles.price_list}>{listitems}</ul>;
};
export default List;

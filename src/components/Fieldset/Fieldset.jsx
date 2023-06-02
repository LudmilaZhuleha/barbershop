import React from 'react';
import styles from './Fieldset.module.css';
// eslint-disable-next-line react/prop-types
const Fieldset = ({ style, title, children }) => {
  return (
    <fieldset className={styles[style]}>
      <legend className={styles.title}>{title}</legend>
      {children}
    </fieldset>
  );
};
export default Fieldset;

import React from 'react';
import styles from './RadioLabel.module.css';
// eslint-disable-next-line react/prop-types
const RadioLabel = ({ style, group, name, value, onchange }) => {
  return (
    <label className={styles[style]}>
      <input
        className={styles.radio_input}
        type="radio"
        name={name}
        value={value}
        onChange={onchange}
      />
      <span>{group}</span>
    </label>
  );
};
export default RadioLabel;

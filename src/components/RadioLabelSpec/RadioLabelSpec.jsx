import React from 'react';
import styles from '../RadioLabel/RadioLabel.module.css';

// eslint-disable-next-line react/prop-types
const RadioLabelSpec = ({ style, spec, group, name, value, onchange }) => {
  return (
    <label className={styles[style]}>
      <input
        className={styles.radio_input}
        type="radio"
        name={name}
        onChange={onchange}
        value={value}
      />
      <span className={styles[spec]}>
        {/*<img src={img} alt="spec-foto"/>*/}
        {group}
      </span>
    </label>
  );
};
export default RadioLabelSpec;

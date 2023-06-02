import React from 'react';
import styles from './Icon.module.css';
// eslint-disable-next-line react/prop-types
const Icon = ({ id, style, ...props }) => {
  return (
    <svg className={styles[style]} {...props}>
      <use xlinkHref={`../../../public/images/svg-sprite.svg#${id}`} />
    </svg>
  );
};
export default Icon;

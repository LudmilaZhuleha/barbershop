import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../fotos/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_bar}>
        <Link to="/">
          <img src={logo} alt="logo-picture" />
        </Link>
        <nav>
          <Link className={styles.footer_bar_item} to="/about">
            О нас
          </Link>
          <Link className={styles.footer_bar_item} to="/price">
            Стоимость
          </Link>
          <Link className={styles.footer_bar_item} to="/book">
            Записаться
          </Link>
        </nav>
        <div className={styles.footer_text}>
          <p className={styles.footer_text_item}>Designer: Anastasia Ilina</p>
          <p>Developer: Ludmila Zhuleha</p>
        </div>
      </div>
      <p className={styles.footer_copyright}>© chik chik, 2023</p>
    </footer>
  );
};
export default Footer;

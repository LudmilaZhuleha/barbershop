import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './Header.module.css';
import logo from '../../fotos/logo.png';
// eslint-disable-next-line react/prop-types
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.header_logo} src={logo} alt="logo-picture" />
      </Link>
      <nav>
        <Link className={styles.header_item} to="/about">
          О нас
        </Link>
        <Link className={styles.header_item} to="/book">
          Записаться
        </Link>
        <Link className={styles.header_item} to="/price">
          Стоимость
        </Link>
      </nav>
      <Button style="button" onClick={() => navigate('/book')}>
        Записаться
      </Button>
    </header>
  );
};
export default Header;

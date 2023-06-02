import React, { useEffect, useState } from 'react';
import picture from '../../fotos/barber-price-picture.png';
import PriceList from '../PriceList/PriceList';
import { API_URL } from '../../constants';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import styles from './Price.module.css';

const Price = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setServices(data);
      console.log(data);
    };
    fetchServices(API_URL);
  }, []);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Стоимость наших услуг</h2>
      <p className={styles.title_tagline}>...бесценна, но всё же</p>
      <div className={styles.price_wrapper}>
        <img className={styles.price_img} src={picture} alt="price-img" />
        <div className={styles.price_content}>
          <PriceList style="price_list" list={services} />
          <Link to="/book">
            <Button style="button" type="button">
              Записаться
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Price;

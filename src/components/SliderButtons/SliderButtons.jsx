import React from 'react';
import styles from './SliderButtons.module.css';
import arrowPrev from '../../fotos/arrow-prev.png';
import arrowNext from '../../fotos/arrow-next.png';
import { useSwiper } from 'swiper/react';
import Button from '../Button/Button';

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.slider_arrows}>
      <Button style="button_arrow_prev" onClick={() => swiper.slidePrev()}>
        <img src={arrowPrev} alt="arrow-prev" />
      </Button>
      <Button style="button_arrow_next" onClick={() => swiper.slideNext()}>
        <img src={arrowNext} alt="arrow-next" />
      </Button>
    </div>
  );
};
export default SliderButtons;

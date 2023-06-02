import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import styles from './Slider.module.css';
import foto1 from '../../fotos/foto1.png';
import foto2 from '../../fotos/foto2.png';
import foto3 from '../../fotos/foto3.png';
import foto4 from '../../fotos/foto4.png';
import foto5 from '../../fotos/foto5.png';
import foto6 from '../../fotos/foto6.png';
import foto7 from '../../fotos/foto7.png';
import foto8 from '../../fotos/foto8.png';
import SliderButtons from '../SliderButtons/SliderButtons';
import { EffectCoverflow } from 'swiper/core';
const sliderFotos = [
  {
    image: foto1,
    id: '001'
  },
  {
    image: foto2,
    id: '002'
  },
  {
    image: foto3,
    id: '003'
  },
  {
    image: foto4,
    id: '004'
  },
  {
    image: foto5,
    id: '005'
  },
  {
    image: foto6,
    id: '006'
  },
  {
    image: foto7,
    id: '007'
  },
  {
    image: foto8,
    id: '008'
  }
];
// eslint-disable-next-line react/prop-types
const Slider = () => {
  // eslint-disable-next-line no-unused-vars
  const [slides, setSlides] = useState(sliderFotos);

  return (
    <div className={styles.container}>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        effect={'coverflow'}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.id} />
            </SwiperSlide>
          );
        })}
        <SliderButtons />
      </Swiper>
    </div>
  );
};
export default Slider;

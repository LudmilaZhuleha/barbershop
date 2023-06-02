import React from 'react';
import styles from './Modal.module.css';
import Button from '../Button/Button';
import closeBtn from '../../fotos/close.png';

// eslint-disable-next-line react/prop-types
const Modal = ({ onclick, service, specialist, day, month, time, id }) => {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <Button style="button_close" type="button" onClick={onclick}>
          <img src={closeBtn} alt="close-button" />
        </Button>
        <h3 className={styles.modal_title}>Ваше бронирование подтверждено!</h3>
        <p className={styles.modal_text_bold}>
          <b>Ваша запись:</b>
        </p>
        <p className={styles.modal_text}>Услуга: {service}</p>
        <p className={styles.modal_text}>Ваш барбер: {specialist}</p>
        <p className={styles.modal_text}>Дата: {day} {month}</p>
        <p className={styles.modal_text}>Время: {time}</p>
        <p className={styles.modal_text}>Номер вашего заказа: {id}</p>
      </div>
    </div>
  );
};
export default Modal;

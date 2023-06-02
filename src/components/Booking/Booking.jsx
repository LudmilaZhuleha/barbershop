import React from 'react';
import styles from './Booking.module.css';
import Fieldset from '../Fieldset/Fieldset';
import RadioLabel from '../RadioLabel/RadioLabel';
import Button from '../Button/Button';
import RadioLabelSpec from '../RadioLabelSpec/RadioLabelSpec';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants';
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [services, setServices] = useState([]);
  const [isServiceActive, setIsServiceActive] = useState('1');
  const [specs, setSpecs] = useState([]);
  const [isSpecActive, setIsSpecActive] = useState('1');
  const [months, setMonths] = useState([]);
  const [isMonthActive, setIsMonthActive] = useState('3');
  const [days, setDays] = useState([]);
  const [isDayActive, setIsDayActive] = useState('1');
  const [times, setTimes] = useState([]);
  const [isTimeActive, setIsTimeActive] = useState('');
  const [reserve, setReserve] = useState(null);

  const changeService = async (e) => {
    setIsServiceActive(+e.target.value);
    const target = e.target;
    if (target.name === 'service') {
      const response = await fetch(`${API_URL}/?service=${target.value}`);
      const data = await response.json();
      setSpecs(data);
      console.log(data);
    }
  };
  const changeSpec = async (e) => {
    setIsSpecActive(+e.target.value);
    const target = e.target;
    if (target.name === 'specialist') {
      const response = await fetch(`${API_URL}/?spec=${target.value}`);
      const data = await response.json();
      console.log(data);
      setMonths(data);
    }
  };
  const changeMonth = async (e) => {
    setIsMonthActive(e.target.value);
    const target = e.target;
    if (target.name === 'month') {
      const response = await fetch(`${API_URL}/?spec=${isSpecActive}&month=${target.value}`);
      const data = await response.json();
      console.log(data);
      setDays(data);
    }
  };
  const changeDay = async (e) => {
    setIsDayActive(e.target.value);
    const target = e.target;
    if (target.name === 'day') {
      const response = await fetch(
        `${API_URL}/?spec=${isSpecActive}&month=${isMonthActive}&day=${target.value}`
      );
      const data = await response.json();
      console.log(data);
      setTimes(data);
    }
  };
  const changeTime = (e) => {
    setIsTimeActive(e.target.value);
  };

  useEffect(() => {
    const fetchServices = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setServices(data);
      console.log(data);
    };
    fetchServices(API_URL);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const json = JSON.stringify(Object.fromEntries(formData));
    const response = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: json
    });
    const data = await response.json();
    console.log(data);
    setReserve(data);
  };
  const navigate = useNavigate();
  const closeModal = () => {
    setReserve(null);
    navigate('/');
  };
  return (
    <div>
      <h3 className={styles.booking_title}>Как записаться к нам</h3>
      <ol className={styles.booking_list}>
        <li className={styles.booking_item}>Выберите услугу, можно выбрать сразу несколько</li>
        <li className={styles.booking_item}>Выберите специалиста</li>
        <li className={styles.booking_item}>Выберите удобный день и время</li>
      </ol>
      <form onSubmit={submitHandler}>
        <Fieldset style="container" title="Услуга">
          {services.length > 0 ? (
            services.map((service) => (
              <RadioLabel
                style={`${isServiceActive === service.id ? 'radio_label_active' : 'radio_label'}`}
                group={service.name}
                name="service"
                key={service.id}
                value={`${service.id}`}
                onchange={changeService}
              />
            ))
          ) : (
            <p>Checking for services available...</p>
          )}
        </Fieldset>
        <Fieldset style="container" title="Специалист">
          {specs.length > 0
            ? specs.map((spec) => (
                <RadioLabelSpec
                  style={`${isSpecActive === spec.id ? 'radio_label_active' : 'radio_label'}`}
                  spec={`radio_label_spec${spec.id}`}
                  group={spec.name}
                  name="specialist"
                  key={spec.id}
                  value={`${spec.id}`}
                  onchange={changeSpec}
                />
              ))
            : null}
        </Fieldset>
        <Fieldset title="Дата и время">
          <Fieldset style="container_inner">
            {months.length > 0
              ? months.map((month, i) => (
                  <RadioLabel
                    style={`${isMonthActive === month ? 'radio_label_active' : 'radio_label'}`}
                    group={`${new Intl.DateTimeFormat('Ru-ru', { month: 'long' }).format(
                      new Date(month)
                    )}`}
                    name="month"
                    key={i}
                    value={`${month}`}
                    onchange={changeMonth}
                  />
                ))
              : null}
          </Fieldset>
          <Fieldset style="container_inner">
            {days.length > 0
              ? days.map((day, i) => (
                  <RadioLabel
                    style={`${isDayActive === day ? 'radio_label_active' : 'radio_label'}`}
                    // group={`${new Intl.DateTimeFormat('Ru-ru', {day: 'numeric'}).format(new Date(day))}`}
                    group={day}
                    name="day"
                    key={i}
                    value={`${day}`}
                    onchange={changeDay}
                  />
                ))
              : null}
          </Fieldset>
          <Fieldset style="container_inner">
            {times.length > 0
              ? times.map((time, i) => (
                  <RadioLabel
                    style={`${isTimeActive === time ? 'radio_label_active' : 'radio_label'}`}
                    group={time}
                    name="time"
                    key={i}
                    value={`${time}`}
                    onchange={changeTime}
                  />
                ))
              : null}
          </Fieldset>
        </Fieldset>
        <Button type="submit" style="button_booking">
          Записаться
        </Button>
      </form>
      {reserve ? (
        <Modal
          onclick={closeModal}
          service={services[isServiceActive - 1].name}
          specialist={specs[isSpecActive - 1].name}
          id={reserve.id}
          day={reserve.day}
          month={`${new Intl.DateTimeFormat('Ru-ru', { month: 'long' }).format(
            new Date(reserve.month)
          )} 2023`}
          time={reserve.time}
        />
      ) : null}
    </div>
  );
};
export default Booking;

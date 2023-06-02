export const API_URL = 'https://gelatinous-notch-money.glitch.me/api';
/*
GET /api - получить список услуг
GET /api?service={n} - получить список барберов
GET /api?spec={n} - получить список месяца работы барбера
GET /api?spec={n}&month={n} - получить список дней работы барбера
GET /api?spec={n}&month={n}&day={n} - получить список свободных часов барбера
POST /api/order - оформить заказ
*/
export const SERVICES = [
  {
    id: 1,
    name: 'Стрижка ножницами',
    price: '2500 руб'
  },
  {
    id: 2,
    name: 'Стрижка машинкой',
    price: '2000 руб'
  },
  {
    id: 3,
    name: 'Стрижка + стрижка бороды',
    price: '3000 руб'
  },
  {
    id: 4,
    name: 'Стрижка + моделирование бороды',
    price: '4000 руб'
  },
  {
    id: 5,
    name: 'Бритье головы',
    price: '1500 руб'
  },
  {
    id: 6,
    name: 'Укладка',
    price: '1500 руб'
  },
  {
    id: 7,
    name: 'Оформление бровей',
    price: '1000 руб'
  }
]

export const ABOUT = [
  {
    name: 'топ специалисты',
    description: 'Мы подстрижем вас на высшем уровне'
  },
  {
    name: 'мастера бород и усов',
    description: 'Мы заботливо уложим вашу бороду и усы'
  },
  {
    name: 'гарантия качества',
    description: 'Мы используем только профессиональные средства'
  }
]


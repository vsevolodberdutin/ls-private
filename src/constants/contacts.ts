// Public contact information - safe to commit
// This data is displayed on the public website
export const CONTACTS = {
  phone: '+79103811250',
  phoneFormatted: '+7 910 381 12 50',
  viber: {
    url: 'viber://chat?number=%2B79103811250',
    label: 'Viber',
  },
  whatsapp: {
    url: 'whatsapp://send?phone=79103811250&text=',
    label: 'WhatsApp',
  },
  telegram: {
    url: 'tg://resolve?domain=eleanor_live',
    label: 'Telegram',
    username: 'eleanor_live',
  },
} as const

export const PRICING = {
  online: {
    price: 10000,
    formatted: '10 000 ₽',
    label: 'Online',
  },
  inPerson: {
    price: 15000,
    formatted: '15 000 ₽',
    label: 'Личная встреча',
    locations: 'Москва/Ниж.Новгород',
  },
  otherCities: {
    priceFrom: 50000,
    formatted: 'от 50 000 ₽',
    label: 'Личная встреча',
    locations: 'другие города',
  },
} as const

// Public contact information - safe to commit
// This data is displayed on the public website
export const CONTACTS = {
  phone: '+79103811250',
  phoneFormatted: '+7 910 381 12 50',
  max: {
    url: 'https://max.ru/u/f9LHodD0cOIJoLU5SKENjsmyWNU3DgWX3SyAtSucFRVBzon9hS4reIglDpk',
    label: 'Max',
  },
  whatsapp: {
    url: 'whatsapp://send?phone=79103811250&text=',
    label: 'WhatsApp',
  },
  telegram: {
    url: 'https://t.me/eleanor_live',
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
    descriptions: ['Москва/Ниж.Новгород'],
  },
  otherCities: {
    priceFrom: 50000,
    formatted: 'от 50 000 ₽',
    label: 'Личная встреча',
    descriptions: ['другие города'],
  },
} as const

export const INTERNATIONAL_PRICING_FOOTNOTE = [
  'Для зарубежных клиентов — повышающий коэффициент',
  'Оплата: PayPal / WU',
] as const

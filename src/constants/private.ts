/**
 * Typed constants for private section content
 * This is the SINGLE SOURCE OF TRUTH for all private section texts
 */

/**
 * Personal Session content
 */
export const PRIVATE_PERSONAL_SESSION = {
  header: {
    title: 'Личная сессия',
    description:
      'На ней пройдет диагностика психотипа с применением комплекса методик, после чего мы разберем сильные и слабые стороны вашего психотипа, профориентирование, понимание мотивации и развитие потенциала личности',
  },
  duration: {
    text: ' Продолжительность 2 часа',
  },
  report: {
    headerText:
      ' После консультации вы получаете отчет / лист профориентации с рекомендациями:',
    items: [
      {
        icon: 'Briefcase',
        text: 'Как развить потенциал и построить карьеру',
      },
      {
        icon: 'Heart',
        text: 'Какие отношения подходят для гармоничной жизни',
      },
      {
        icon: 'Waves',
        text: 'Как восстанавливать энергию и ресурс',
      },
    ],
  },
  pricingOptions: [
    {
      // Will use PRICING.online from contacts.ts
      type: 'online',
      message: 'Здравствуйте, я хочу записаться на личную сессию Online',
    },
    {
      // Will use PRICING.inPerson from contacts.ts
      type: 'inPerson',
      message:
        'Здравствуйте, я хочу записаться на личную сессию-встречу в городе ...',
    },
    {
      // Will use PRICING.otherCities from contacts.ts
      type: 'otherCities',
      message:
        'Здравствуйте, я хочу записаться на личную сессию-встречу в городе ...',
    },
  ],
} as const

/**
 * Strategic Session for Managers content
 */
export const PRIVATE_STRATEGIC_SESSION = {
  header: {
    title: 'Стратегическая сессия для управленцев',
  },
  pricing: {
    label: 'Модуль "Стратегия"',
    price: '50 000 ₽',
    message:
      'Здравствуйте, Элеонора! Интересует Модуль "Стратегия" для управленцев. Расскажите подробнее...',
  },
  targetClient: {
    text: 'Руководители, топ-менеджеры, владельцы бизнеса, HR-директора',
  },
  duration: {
    text: '4 занятия еженедельно (7-8 академ.часов)',
    note: 'онлайн/оффлайн, онлайн-сопровождение в течение всего периода',
  },
  program: {
    headerText: 'Цель сессии:',
    items: [
      {
        icon: 'Target',
        text: 'Проработка осознанности путей развития лидерских качеств',
      },
      {
        icon: 'Brain',
        text: 'Развитие с опорой на психотип',
      },
      {
        icon: 'ShipWheel',
        text: 'Помощь в решении управленческих кейсов',
      },
      {
        icon: 'Headset',
        text: 'Персональное онлайн-сопровождение',
      },
    ],
  },
  contactMessage:
    'Здравствуйте, Элеонора! Интересует стратегическая сессия для управленцев. Есть вопрос о...',
} as const

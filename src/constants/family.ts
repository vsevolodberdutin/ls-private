/**
 * Typed constants for family section content
 * This is the SINGLE SOURCE OF TRUTH for all family section texts
 */

/**
 * Harmony Consultation content
 */
export const FAMILY_HARMONY = {
  header: {
    title: 'Гармония отношений',
  },
  pricingOptions: [
    {
      // Will use FAMILY_SERVICES.personalSession.types[0]
      type: 0,
      message:
        'Здравствуйте, Элеонора! Интересует консультация "Гармония отношений в паре, родитель/ребенок". Расскажите подробнее...',
    },
    {
      // Will use FAMILY_SERVICES.personalSession.types[1]
      type: 1,
      message:
        'Здравствуйте, Элеонора! Интересует консультация "Разрешение конфликтов в паре". Расскажите подробнее...',
    },
  ],
  duration: {
    text: '4 часа',
    note: '2 личных сессии + разбор отношений на второй встрече',
  },
  program: {
    headerText: 'Что включает:',
    items: [
      {
        icon: 'Users',
        text: 'Индивидуальные консультации',
      },
      {
        icon: 'Heart',
        text: 'Разбор интертипных отношений',
      },
      {
        icon: 'UserCheck',
        text: 'Улучшение взаимопонимания',
      },
      {
        icon: 'Handshake',
        text: 'Гармонизация отношений',
      },
    ],
  },
  contactMessage:
    'Здравствуйте, Элеонора! Интересует семейная консультация по гармонии отношений с ребенком. Расскажите подробнее о...',
} as const

/**
 * Conflict Resolution Consultation content
 */
export const FAMILY_CONFLICT = {
  header: {
    title: 'Разрешение конфликтов в паре',
  },
  pricing: {
    // Will use FAMILY_SERVICES.personalSession.types[2]
    type: 2,
    message:
      'Здравствуйте, Элеонора! Интересует консультация "Разрешение конфликтов в паре". Расскажите подробнее...',
  },
  duration: {
    text: '6-8 часов',
    note: '2 личных сессии участников конфликта + 1-2 сессии по примирению',
  },
  program: {
    headerText: 'Что включает:',
    items: [
      {
        icon: 'Users',
        text: 'Личные сессии каждого участника конфликта',
      },
      {
        icon: 'Handshake',
        text: 'Сессии по примирению сторон',
      },
      {
        icon: 'Heart',
        text: 'Выработка осознанной позиции',
      },
      {
        icon: 'UserCheck',
        text: 'Формирование мирной стратегии',
      },
    ],
  },
  contactMessage:
    'Здравствуйте, Элеонора! Интересует семейная консультаци по разрешению конфликтов. Расскажите подробнее о...',
} as const

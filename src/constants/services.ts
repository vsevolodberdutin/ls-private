// Service offerings - safe to commit
// This data is displayed on the public website

export const TEACHING_SERVICES = {
  groupTraining: {
    title: 'Групповые тренинги по соционике',
    format: '6 тренингов на уровень, по 3 часа каждый',
    levels: ['Базовый', 'Средний', 'Продвинутый'],
    description: 'Практическая типология для менеджеров, педагогов, психологов и всех, кто стремится к саморазвитию',
    priceFormatted: 'от 3 000 ₽',
    price: 3000,
  },
  strategicCoaching: {
    title: 'Стратегический коучинг для менеджеров',
    duration: '1 месяц, 4 еженедельные сессии по 1-1.5 часа',
    description: 'Развитие лидерства, осознание ресурсов, поддержание самооценки',
    target: 'Руководители всех уровней',
    priceFormatted: '40 000 ₽',
    price: 40000,
    bonus: 'Бесплатное определение психотипа для новых клиентов',
  },
} as const

export const FAMILY_SERVICES = {
  personalSession: {
    title: 'Личная консультация',
    duration: '2 часа',
    types: [
      {
        name: 'Карьера и мотивация',
        priceFormatted: '10 000 ₽',
        price: 10000,
        participants: 1,
      },
      {
        name: 'Гармония в отношениях',
        description: 'Пары или родитель-ребенок',
        priceFormatted: '20 000 ₽',
        price: 20000,
        participants: 2,
      },
      {
        name: 'Разрешение конфликтов',
        priceFormatted: '25 000 ₽',
        price: 25000,
        participants: 2,
      },
    ],
    areas: [
      'Семейная динамика',
      'Партнерские отношения',
      'Общение родитель-ребенок',
      'Анализ сильных и слабых сторон',
    ],
  },
} as const

export const SCHOOL_SERVICES = {
  onlineCourse: {
    title: 'Онлайн-курс для родителей',
    format: 'Самостоятельное обучение',
    modules: [
      {
        name: 'Понимание вашего ребенка',
        lessons: 8,
        priceFormatted: '5 500 ₽',
        price: 5500,
      },
      {
        name: 'Развитие талантов ребенка',
        lessons: 8,
        priceFormatted: '5 500 ₽',
        price: 5500,
      },
    ],
    fullPackage: {
      priceFormatted: '10 000 ₽',
      price: 10000,
      totalLessons: 16,
    },
  },
  psychotypeAssessment: {
    title: 'Дистанционное определение психотипа',
    format: 'Отправка видео/текста, результаты по email',
    deliverables: ['Отчет о личности', 'Лист профориентации'],
    priceFormatted: '5 000 ₽',
    price: 5000,
  },
} as const

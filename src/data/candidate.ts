export type CandidateLink = {
  label: string
  href: string | null
}

export type CandidateContacts = {
  email: string | null
  telegram: string | null
}

export const candidate = {
  firstName: 'Ярослав',
  lastName: 'Кукар',
  latinName: 'Yaroslav Kukar',
  initials: 'YK',
  role: 'Future IT Manager',
  roleRu: 'Будущий IT-менеджер',
  profile: 'Technical & Leadership',
  programme: 'ASTON · Программа развития менеджмента',
  positioning: 'От технического мышления — к управлению IT-проектами',
  tagline: 'From Technical Thinking to Project Leadership',

  education: {
    institution: 'БГУИР',
    institutionFull: 'Белорусский государственный университет информатики и радиоэлектроники',
    programme: 'Информационные системы и технологии в игровой индустрии',
    level: 'Магистратура',
    course: '4-й курс',
    form: 'Дневная форма обучения',
  },

  focus: ['Project Management', 'IT Operations', 'Business Analysis', 'Process Optimization', 'AI Tools', 'Team Coordination'],

  summary: [
    'Я учусь в БГУИР по специальности «Информационные системы и технологии в игровой индустрии». В ходе обучения получил техническую базу в программировании, разработке программного обеспечения, работе с базами данных и проектировании информационных систем.',
    'Мне интересна не только техническая реализация, но и организация самого процесса: понимание задач, формулирование требований, декомпозиция работы, взаимодействие участников и достижение общего результата.',
    'Хочу развиваться на стыке технологий, аналитики и управления, постепенно переходя от самостоятельной работы над проектами к управлению командами и IT-процессами.',
  ],

  goal: 'Научиться превращать сложные задачи в понятные процессы, объединять людей вокруг общей цели и доводить проекты до результата.',

  links: {
    github: 'https://github.com/Kerarty',
    runner: 'https://kerarty.github.io/runner/',
    portfolio: 'https://github.com/Kerarty',
  } satisfies Record<string, string>,

  contacts: {
    email: null,
    telegram: null,
  } satisfies CandidateContacts,

  cvUrl: null as string | null,
  englishLevel: null as string | null,
  availability: null as string | null,

  disclaimer:
    'Личное портфолио кандидата, созданное для отклика на программу развития менеджмента ASTON. Не является официальным продуктом компании ASTON.',
} as const

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
  programmeEn: 'ASTON · Management Development Programme',
  positioning: 'От технического мышления — к управлению IT-проектами',
  positioningEn: 'From technical thinking to IT project management',
  tagline: 'From Technical Thinking to Project Leadership',

  education: {
    institution: 'БГУИР',
    institutionFull: 'Белорусский государственный университет информатики и радиоэлектроники',
    programme: 'Информационные системы и технологии в игровой индустрии',
    level: 'Бакалавриат',
    course: '4-й курс',
    form: 'Дневная форма обучения',
    years: '2023 – 2027',
  },

  educationEn: {
    institution: 'BSUIR',
    institutionFull: 'Belarusian State University of Informatics and Radioelectronics',
    programme: 'Information Systems and Technologies in the Game Industry',
    level: "Bachelor's degree",
    course: '4th year',
    form: 'Full-time studies',
    years: '2023 – 2027',
  },

  focus: ['Project Management', 'IT Operations', 'Business Analysis', 'Process Optimization', 'AI Tools', 'Team Coordination'],

  summary: [
    'Я учусь в БГУИР по специальности «Информационные системы и технологии в игровой индустрии». В ходе обучения получил техническую базу в программировании, разработке программного обеспечения, работе с базами данных и проектировании информационных систем.',
    'Мне интересна не только техническая реализация, но и организация самого процесса: понимание задач, формулирование требований, декомпозиция работы, взаимодействие участников и достижение общего результата.',
    'Хочу развиваться на стыке технологий, аналитики и управления, постепенно переходя от самостоятельной работы над проектами к управлению командами и IT-процессами.',
  ],

  summaryEn: [
    'I study at BSUIR, majoring in Information Systems and Technologies in the Game Industry. My studies gave me a technical foundation in programming, software development, databases and information systems design.',
    'What interests me is not only the technical implementation but the organization of the process itself: understanding tasks, formulating requirements, decomposing the work, coordinating participants and reaching a shared result.',
    'I want to grow at the intersection of technology, analytics and management — moving gradually from working on projects on my own to leading teams and IT processes.',
  ],

  goal: 'Научиться превращать сложные задачи в понятные процессы, объединять людей вокруг общей цели и доводить проекты до результата.',
  goalEn: 'Learn to turn complex tasks into clear processes, bring people together around a shared goal and deliver projects to a result.',

  links: {
    github: 'https://github.com/Kerarty',
    runner: 'https://kerarty.github.io/runner/',
    portfolio: 'https://github.com/Kerarty',
  } satisfies Record<string, string>,

  contacts: {
    email: 'kukar.yar@gmail.com',
    telegram: 'https://t.me/Kerarty',
  } satisfies CandidateContacts,

  cvUrl: 'cv/Yaroslav-Kukar-CV.pdf',
  englishLevel: null as string | null,
  availability: null as string | null,
} as const

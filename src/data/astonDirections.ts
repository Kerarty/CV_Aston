import type { Lang } from '@/i18n/language'

export type AstonDirectionId = 'delivery' | 'operations' | 'sales' | 'people'

export type AstonDirection = {
  id: AstonDirectionId
  index: string
  name: string
  ru: string
  description: string
  interestsLabel: string
  interests: string[]
  growth: string[]
  status: 'primary' | 'open'
  statusLabel: string
}

export const astonDirections: AstonDirection[] = [
  {
    id: 'delivery',
    index: '01',
    name: 'Delivery',
    ru: 'Реализация IT-проектов',
    description:
      'Управление реализацией IT-проектов, координация команд, контроль сроков, бюджета и качества.',
    interestsLabel: 'Связанные интересы',
    interests: [
      'организация работы',
      'техническое понимание разработки',
      'декомпозиция задач',
      'контроль выполнения',
      'взаимодействие с командой',
    ],
    growth: [
      'управление сроками и бюджетом',
      'работа с требованиями и критериями приёмки',
      'координация команды',
      'контроль качества результата',
    ],
    status: 'primary',
    statusLabel: 'Основной интерес',
  },
  {
    id: 'operations',
    index: '02',
    name: 'Operations',
    ru: 'Процессы и операционная эффективность',
    description:
      'Организация и совершенствование внутренних процессов компании, работа с ресурсами, аналитикой и автоматизацией.',
    interestsLabel: 'Связанные интересы',
    interests: [
      'системное мышление',
      'аналитика',
      'структурирование информации',
      'AI-инструменты',
      'оптимизация процессов',
    ],
    growth: [
      'анализ и описание процессов',
      'автоматизация рутинных операций',
      'внутренние сервисы и регламенты',
      'работа с показателями эффективности',
    ],
    status: 'primary',
    statusLabel: 'Основной интерес',
  },
  {
    id: 'sales',
    index: '03',
    name: 'Sales & Marketing',
    ru: 'Клиенты и продвижение экспертизы',
    description:
      'Развитие отношений с клиентами, поиск новых возможностей и продвижение экспертизы компании.',
    interestsLabel: 'Связанные качества',
    interests: [
      'коммуникация',
      'презентация идей',
      'понимание технических продуктов',
      'интерес к бизнес-процессам',
    ],
    growth: [
      'клиентская коммуникация',
      'презентация технических решений',
      'понимание бизнес-моделей',
      'работа с обратной связью',
    ],
    status: 'open',
    statusLabel: 'Открыт к знакомству',
  },
  {
    id: 'people',
    index: '04',
    name: 'People',
    ru: 'Люди и развитие команд',
    description:
      'Работа с людьми, адаптация, обучение, развитие и корпоративная культура.',
    interestsLabel: 'Связанные качества',
    interests: [
      'организаторский опыт',
      'коммуникация',
      'координация участников',
      'заинтересованность в развитии команд',
    ],
    growth: [
      'адаптация и наставничество',
      'развитие командных практик',
      'корпоративные инициативы',
      'обратная связь и поддержка',
    ],
    status: 'open',
    statusLabel: 'Открыт к знакомству',
  },
]

export const astonNote =
  'Наиболее интересными для первоначального профессионального развития мне представляются Delivery и Operations. При этом я открыт к знакомству с остальными направлениями программы и готов определять наиболее подходящую специализацию исходя из результатов обучения и собственных сильных сторон.'

const astonDirectionsEn: AstonDirection[] = [
  {
    id: 'delivery',
    index: '01',
    name: 'Delivery',
    ru: 'Реализация IT-проектов',
    description:
      'Managing IT project delivery, coordinating teams, controlling deadlines, budget and quality.',
    interestsLabel: 'Related interests',
    interests: [
      'organizing work',
      'understanding development',
      'task decomposition',
      'progress control',
      'team interaction',
    ],
    growth: [
      'managing deadlines and budgets',
      'working with requirements and acceptance criteria',
      'team coordination',
      'quality control of the result',
    ],
    status: 'primary',
    statusLabel: 'Primary interest',
  },
  {
    id: 'operations',
    index: '02',
    name: 'Operations',
    ru: 'Процессы и операционная эффективность',
    description:
      'Improving internal company processes, working with resources, analytics and automation.',
    interestsLabel: 'Related interests',
    interests: [
      'systems thinking',
      'analytics',
      'structuring information',
      'AI tooling',
      'process optimization',
    ],
    growth: [
      'analysing and documenting processes',
      'automating routine operations',
      'internal services and workflows',
      'working with efficiency metrics',
    ],
    status: 'primary',
    statusLabel: 'Primary interest',
  },
  {
    id: 'sales',
    index: '03',
    name: 'Sales & Marketing',
    ru: 'Клиенты и продвижение экспертизы',
    description:
      'Developing client relationships, finding new opportunities and promoting the company expertise.',
    interestsLabel: 'Related qualities',
    interests: [
      'communication',
      'presenting ideas',
      'understanding technical products',
      'interest in business processes',
    ],
    growth: [
      'client communication',
      'presenting technical solutions',
      'understanding business models',
      'working with feedback',
    ],
    status: 'open',
    statusLabel: 'Open to explore',
  },
  {
    id: 'people',
    index: '04',
    name: 'People',
    ru: 'Люди и развитие команд',
    description:
      'Working with people: onboarding, mentoring, development and company culture.',
    interestsLabel: 'Related qualities',
    interests: [
      'organizational experience',
      'communication',
      'coordinating participants',
      'genuine interest in team growth',
    ],
    growth: [
      'onboarding and mentoring',
      'growing team practices',
      'company initiatives',
      'feedback and support',
    ],
    status: 'open',
    statusLabel: 'Open to explore',
  },
]

export const astonNoteEn =
  'Delivery and Operations look most interesting to me for the initial professional development. At the same time I am open to exploring the other programme directions and ready to settle on the best specialization based on the results of the programme and my own strengths.'

export function getAstonDirections(lang: Lang): AstonDirection[] {
  return lang === 'en' ? astonDirectionsEn : astonDirections
}

export function getAstonNote(lang: Lang): string {
  return lang === 'en' ? astonNoteEn : astonNote
}

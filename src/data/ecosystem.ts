import type { Lang } from '@/i18n/language'

export type EcosystemNodeId = 'core' | 'delivery' | 'operations' | 'sales' | 'people' | 'island'

export type EcosystemNode = {
  id: EcosystemNodeId
  index: string
  label: string
  ru: string
  kind: 'core' | 'module' | 'portfolio'
  eyebrow: string
  summary: string
  description: string
  tags: string[]
  link: {
    label: string
    to: string
  }
  model?: string
  position?: [number, number, number]
  scale?: number
}

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'core',
    index: '00',
    label: 'PROJECT ZERO',
    ru: 'Ядро системы',
    kind: 'core',
    eyebrow: 'Core / candidate',
    summary: 'Точка сборки: техническая база, интересы и управленческий вектор.',
    description:
      'Ядро экосистемы — сам кандидат и его профессиональный вектор. Вокруг него расположены четыре направления программы ASTON, а ниже — портфолио проектов, на которых проверялись технические и организационные гипотезы.',
    tags: ['Technical & Leadership', 'ASTON / 2026', 'Management direction'],
    link: {
      label: 'Candidate Profile',
      to: '/profile',
    },
  },
  {
    id: 'delivery',
    index: '01',
    label: 'DELIVERY',
    ru: 'Реализация IT-проектов',
    kind: 'module',
    eyebrow: 'ASTON direction / 01',
    summary: 'Организация работы, декомпозиция и движение проекта к результату.',
    description:
      'Сильнейший интерес внутри программы. Delivery близок по логике к тому, что уже делаю в учебных и личных проектах: понять задачу, разложить её на шаги, договориться о результате и удерживать движение к нему.',
    tags: ['декомпозиция', 'координация', 'контроль выполнения', 'техническое понимание'],
    link: {
      label: 'Открыть ASTON Integration',
      to: '/aston',
    },
    model: 'delivery.glb',
    position: [-6.8, 0, 3.8],
    scale: 1.4,
  },
  {
    id: 'operations',
    index: '02',
    label: 'OPERATIONS',
    ru: 'Процессы и эффективность',
    kind: 'module',
    eyebrow: 'ASTON direction / 02',
    summary: 'Системное мышление, аналитика и оптимизация внутренних процессов.',
    description:
      'Второе приоритетное направление. Operations привлекает возможностью разбирать процессы, структурировать информацию и применять технические инструменты там, где это упрощает работу команды.',
    tags: ['аналитика', 'процессы', 'AI-инструменты', 'структурирование'],
    link: {
      label: 'Открыть ASTON Integration',
      to: '/aston',
    },
    model: 'operations.glb',
    position: [6.8, 0, 3.8],
    scale: 1.3,
  },
  {
    id: 'sales',
    index: '03',
    label: 'SALES & MARKETING',
    ru: 'Клиенты и экспертиза',
    kind: 'module',
    eyebrow: 'ASTON direction / 03',
    summary: 'Коммуникация, презентация технических решений и обратная связь.',
    description:
      'Направление, открытое к знакомству. Интерес связан с умением объяснять техническую ценность продукта и понимать бизнес-контекст, в котором работает решение.',
    tags: ['коммуникация', 'презентация', 'бизнес-процессы'],
    link: {
      label: 'Открыть ASTON Integration',
      to: '/aston',
    },
    model: 'sales.glb',
    position: [6.8, 0, -3.8],
    scale: 1.4,
  },
  {
    id: 'people',
    index: '04',
    label: 'PEOPLE',
    ru: 'Люди и развитие команд',
    kind: 'module',
    eyebrow: 'ASTON direction / 04',
    summary: 'Организаторский опыт, координация и развитие взаимодействия.',
    description:
      'Направление, открытое к знакомству. Опирается на опыт организации работы факультетского студенческого совета и интерес к тому, как выстраивать коммуникацию внутри команды.',
    tags: ['организация', 'координация', 'коммуникация'],
    link: {
      label: 'Открыть ASTON Integration',
      to: '/aston',
    },
    model: 'people.glb',
    position: [-6.8, 0, -3.8],
    scale: 1.9,
  },
  {
    id: 'island',
    index: '05',
    label: 'PORTFOLIO ISLAND',
    ru: 'Портфолио проектов',
    kind: 'portfolio',
    eyebrow: 'Projects / archive',
    summary: 'Проекты, на которых проверялись идеи, инструменты и подходы.',
    description:
      'Портфолио — не набор витрин, а рабочий полигон: дипломная симуляция, SDK и играбельная реклама, серия интерактивных резюме, сайты для реальных заказчиков, бот автоматизации. Каждое досье разбирает, что именно в проекте было организационным, а не только техническим.',
    tags: ['Factory Management', 'Playable Ads', 'CV Series', 'Client Sites', 'Exam Prep Bot'],
    link: {
      label: 'Открыть Project Archive',
      to: '/archive',
    },
  },
]

export type EcosystemModuleNode = EcosystemNode & {
  position: [number, number, number]
  model: string
  scale: number
}

export const moduleNodes = ecosystemNodes.filter((node): node is EcosystemModuleNode => node.kind === 'module')

const ecosystemNodesEn: EcosystemNode[] = [
  {
    id: 'core',
    index: '00',
    label: 'PROJECT ZERO',
    ru: 'Ядро системы',
    kind: 'core',
    eyebrow: 'Core / candidate',
    summary: 'The assembly point: technical foundation, interests and management vector.',
    description:
      'The core of the ecosystem is the candidate and his professional vector. Around it are the four ASTON programme directions, and below is the project portfolio where technical and organizational hypotheses were tested.',
    tags: ['Technical & Leadership', 'ASTON / 2026', 'Management direction'],
    link: {
      label: 'Candidate Profile',
      to: '/profile',
    },
  },
  {
    id: 'delivery',
    index: '01',
    label: 'DELIVERY',
    ru: 'Реализация IT-проектов',
    kind: 'module',
    eyebrow: 'ASTON direction / 01',
    summary: 'Organizing work, decomposition and moving a project to the result.',
    description:
      'The strongest interest inside the programme. Delivery matches the logic I already apply in academic and personal projects: understand the task, break it into steps, agree on the result and keep the momentum towards it.',
    tags: ['decomposition', 'coordination', 'progress control', 'technical understanding'],
    link: {
      label: 'Open ASTON Integration',
      to: '/aston',
    },
    model: 'delivery.glb',
    position: [-6.8, 0, 3.8],
    scale: 1.4,
  },
  {
    id: 'operations',
    index: '02',
    label: 'OPERATIONS',
    ru: 'Процессы и эффективность',
    kind: 'module',
    eyebrow: 'ASTON direction / 02',
    summary: 'Systems thinking, analytics and optimization of internal processes.',
    description:
      'The second priority direction. Operations appeals to me with the chance to dissect processes, structure information and apply technical tools where they make the team’s work simpler.',
    tags: ['analytics', 'processes', 'AI tooling', 'structuring'],
    link: {
      label: 'Open ASTON Integration',
      to: '/aston',
    },
    model: 'operations.glb',
    position: [6.8, 0, 3.8],
    scale: 1.3,
  },
  {
    id: 'sales',
    index: '03',
    label: 'SALES & MARKETING',
    ru: 'Клиенты и экспертиза',
    kind: 'module',
    eyebrow: 'ASTON direction / 03',
    summary: 'Communication, presenting technical solutions and feedback.',
    description:
      'A direction I am open to exploring. The interest comes from an ability to explain the technical value of a product and understand the business context the solution operates in.',
    tags: ['communication', 'presentation', 'business processes'],
    link: {
      label: 'Open ASTON Integration',
      to: '/aston',
    },
    model: 'sales.glb',
    position: [6.8, 0, -3.8],
    scale: 1.4,
  },
  {
    id: 'people',
    index: '04',
    label: 'PEOPLE',
    ru: 'Люди и развитие команд',
    kind: 'module',
    eyebrow: 'ASTON direction / 04',
    summary: 'Organizational experience, coordination and growing collaboration.',
    description:
      'A direction I am open to exploring. It builds on my experience leading the faculty student council and my interest in how communication inside a team is built.',
    tags: ['organization', 'coordination', 'communication'],
    link: {
      label: 'Open ASTON Integration',
      to: '/aston',
    },
    model: 'people.glb',
    position: [-6.8, 0, -3.8],
    scale: 1.9,
  },
  {
    id: 'island',
    index: '05',
    label: 'PORTFOLIO ISLAND',
    ru: 'Портфолио проектов',
    kind: 'portfolio',
    eyebrow: 'Projects / archive',
    summary: 'The projects where ideas, tools and approaches were tested.',
    description:
      'The portfolio is not a showcase but a working ground: a diploma simulation, an SDK and playable ads, a series of interactive CVs, websites for real clients, an automation bot. Each dossier breaks down what in the project was organizational, not only technical.',
    tags: ['Factory Management', 'Playable Ads', 'CV Series', 'Client Sites', 'Exam Prep Bot'],
    link: {
      label: 'Open Project Archive',
      to: '/archive',
    },
  },
]

export function getEcosystemNodes(lang: Lang): EcosystemNode[] {
  return lang === 'en' ? ecosystemNodesEn : ecosystemNodes
}

export function getModuleNodes(lang: Lang): EcosystemModuleNode[] {
  return getEcosystemNodes(lang).filter((node): node is EcosystemModuleNode => node.kind === 'module')
}

export function getEcosystemNode(id: EcosystemNodeId, lang: Lang = 'ru') {
  return getEcosystemNodes(lang).find((node) => node.id === id) ?? getEcosystemNodes(lang)[0]
}

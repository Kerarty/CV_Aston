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
    summary: 'Три проекта, на которых проверялись идеи, инструменты и подходы.',
    description:
      'Портфолио — не набор витрин, а рабочий полигон. Дипломная симуляция показала ценность декомпозиции, Runner — скорость пути от идеи до публикации, учебные работы сформировали техническую базу.',
    tags: ['Factory Management', 'Runner', 'Technical Projects'],
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

export function getEcosystemNode(id: EcosystemNodeId) {
  return ecosystemNodes.find((node) => node.id === id) ?? ecosystemNodes[0]
}

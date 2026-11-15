import type { Lang } from '@/i18n/language'

export type ProjectGlyph = 'factory' | 'runner' | 'systems'

export type ProjectDetails = {
  overview: string
  objective: string
  contribution: string[]
  tools: string[]
  workflow: string[]
  outcome: string
  lessons: string[]
}

export type Project = {
  id: string
  index: string
  name: string
  subtitle: string
  type: string
  typeRu: string
  description: string
  technologies: string[]
  glyph: ProjectGlyph
  links: {
    play?: string
    source?: string
  }
  mediaNote?: string
  details: ProjectDetails
}

export const projects: Project[] = [
  {
    id: 'factory-management',
    index: '01',
    name: 'Factory Management',
    subtitle: 'Игровая симуляция управления производством',
    type: 'Diploma Project',
    typeRu: 'Дипломный проект',
    description:
      'Дипломный проект представляет собой игровую симуляцию управления производственным предприятием. В рамках проекта прорабатываются игровые механики, система заказов, производственные процессы, прогрессия, экономика и логика взаимодействия игровых систем.',
    technologies: ['Unity', 'C#', 'Game Design', 'AI-assisted Development'],
    glyph: 'factory',
    links: {},
    mediaNote: 'Скриншоты и демонстрационные материалы предоставляются по запросу.',
    details: {
      overview:
        'Симуляция, в которой игрок управляет производственным предприятием: принимает заказы, организует производственные цепочки и следит за экономикой игрового процесса.',
      objective:
        'Спроектировать целостную игровую систему, в которой механики производства, заказов, прогрессии и экономики работают как связанная логика, а не как набор отдельных функций.',
      contribution: [
        'Разработка игровой концепции и рамок проекта.',
        'Проектирование игровых механик и пользовательских сценариев.',
        'Декомпозиция проекта на функциональные системы и подсистемы.',
        'Проработка логики производственных процессов и экономики.',
        'Использование AI-инструментов для помощи в реализации и проверке решений.',
        'Разграничение собственного геймдизайна и проектирования логики от AI-assisted реализации кода.',
      ],
      tools: ['Unity', 'C#', 'Game design', 'AI-инструменты для разработки и проверки решений'],
      workflow: [
        'Исследование референсов и формулирование игровой идеи.',
        'Описание ключевых систем: заказы, производство, прогрессия, экономика.',
        'Декомпозиция на реализуемые модули и пользовательские сценарии.',
        'Прототипирование и последовательная реализация систем.',
        'Проверка логики, исправление ошибок и доработка взаимодействий.',
      ],
      outcome:
        'Собранный дипломный проект с реализованными игровыми системами и проработанной логикой производственного процесса.',
      lessons: [
        'Сложную игру проще собирать через декомпозицию на независимые системы.',
        'AI ускоряет реализацию, но требует проверки и понимания результата.',
        'Чёткие игровые правила важнее количества механик.',
      ],
    },
  },
  {
    id: 'runner',
    index: '02',
    name: 'Runner',
    subtitle: 'Небольшой самостоятельный игровой прототип',
    type: 'Personal Project',
    typeRu: 'Личный проект',
    description:
      'Небольшой самостоятельный игровой прототип, созданный за несколько дней в процессе самостоятельного изучения инструментов разработки.',
    technologies: ['Game Development', 'Prototyping', 'Web Build'],
    glyph: 'runner',
    links: {
      play: 'https://kerarty.github.io/runner/',
      source: 'https://github.com/Kerarty',
    },
    details: {
      overview:
        'Компактный браузерный прототип, который позволил пройти полный путь от идеи до опубликованного результата за ограниченное время.',
      objective:
        'Проверить, как быстро можно освоить необходимый инструмент и довести небольшую игровую идею до рабочей демонстрационной версии.',
      contribution: [
        'Самостоятельная организация работы над прототипом.',
        'Освоение инструментов, необходимых для реализации.',
        'Прототипирование основной игровой механики.',
        'Проверка работоспособности и исправление найденных проблем.',
        'Публикация проекта как демонстрационного результата.',
      ],
      tools: ['Game development', 'Prototyping', 'Работа с браузерной сборкой', 'GitHub'],
      workflow: [
        'Определение минимального объёма прототипа.',
        'Выбор инструментов и быстрый старт разработки.',
        'Реализация основной механики и проверка гипотезы.',
        'Тестирование, исправления и подготовка публикации.',
      ],
      outcome:
        'Опубликованный игровой прототип, доступный по ссылке, и исходные материалы в GitHub-профиле.',
      lessons: [
        'Ограниченный объём помогает довести идею до результата.',
        'Быстрый прототип показывает ценность итераций.',
        'Публикация — часть проверки, а не финальная формальность.',
      ],
    },
  },
  {
    id: 'technical-projects',
    index: '03',
    name: 'Technical Projects',
    subtitle: 'Учебные работы по программированию и данным',
    type: 'Academic & Technical Projects',
    typeRu: 'Учебные и технические проекты',
    description:
      'Учебные проекты, в рамках которых я работал с программированием, базами данных, тестированием и технической реализацией различных задач.',
    technologies: ['Python', 'C#', 'C/C++', 'JavaScript', 'SQL', 'Git', 'Postman'],
    glyph: 'systems',
    links: {},
    mediaNote: 'Материалы отдельных учебных работ предоставляются по запросу.',
    details: {
      overview:
        'Набор учебных проектов, сформировавших техническую базу: от программирования и работы с данными до тестирования и использования инструментов разработки.',
      objective:
        'Закрепить технические основы и научиться применять их в задачах разного масштаба — от отдельных алгоритмов до работы с базами данных и проверки API.',
      contribution: [
        'Выполнение учебных заданий по программированию на Python, C#, C/C++ и JavaScript.',
        'Работа с реляционными базами данных и SQL-запросами.',
        'Тестирование сценариев и проверка поведения систем.',
        'Использование Git, GitHub и Postman в учебных задачах.',
      ],
      tools: ['Python', 'C#', 'C/C++', 'JavaScript', 'SQL', 'Git', 'GitHub', 'Postman'],
      workflow: [
        'Изучение постановки задачи и требований.',
        'Разбор задачи на отдельные шаги.',
        'Реализация и локальная проверка решения.',
        'Тестирование граничных случаев и исправление ошибок.',
      ],
      outcome:
        'Сформированная техническая база, которую можно применять при разборе и координации IT-задач. Конкретные материалы доступны по запросу.',
      lessons: [
        'Понимание технических ограничений помогает точнее формулировать задачи.',
        'Проверка результата — обязательная часть работы.',
        'Разные языки и инструменты дают более широкий взгляд на решение.',
      ],
    },
  },
]

const projectsEn: Project[] = [
  {
    id: 'factory-management',
    index: '01',
    name: 'Factory Management',
    subtitle: 'Game simulation of production management',
    type: 'Diploma Project',
    typeRu: 'Дипломный проект',
    description:
      'A diploma project: a game simulation of managing a production facility. It covers game mechanics, an order system, production processes, progression, economy and the logic that connects the game systems together.',
    technologies: ['Unity', 'C#', 'Game Design', 'AI-assisted Development'],
    glyph: 'factory',
    links: {},
    mediaNote: 'Screenshots and demo materials are available on request.',
    details: {
      overview:
        'A simulation where the player runs a production facility: accepts orders, organizes production chains and keeps the in-game economy healthy.',
      objective:
        'Design a coherent game system where production, orders, progression and economy work as connected logic rather than a set of separate features.',
      contribution: [
        'Developed the game concept and the project framework.',
        'Designed the game mechanics and player scenarios.',
        'Decomposed the project into functional systems and subsystems.',
        'Designed the logic of production processes and the economy.',
        'Used AI tools to support implementation and verify decisions.',
        'Separated my own game design and systems work from AI-assisted code implementation.',
      ],
      tools: ['Unity', 'C#', 'Game design', 'AI tools for development and verification'],
      workflow: [
        'Studied references and shaped the game idea.',
        'Described the key systems: orders, production, progression, economy.',
        'Decomposed the work into implementable modules and player scenarios.',
        'Prototyped and implemented the systems step by step.',
        'Verified the logic, fixed defects and refined the interactions.',
      ],
      outcome:
        'A completed diploma project with working game systems and a well-developed production logic.',
      lessons: [
        'A complex game is easier to build by decomposing it into independent systems.',
        'AI speeds up implementation but requires verification and understanding of the result.',
        'Clear game rules matter more than the number of mechanics.',
      ],
    },
  },
  {
    id: 'runner',
    index: '02',
    name: 'Runner',
    subtitle: 'A small self-driven game prototype',
    type: 'Personal Project',
    typeRu: 'Личный проект',
    description:
      'A small self-driven game prototype built over a few days while learning the development tooling on my own.',
    technologies: ['Game Development', 'Prototyping', 'Web Build'],
    glyph: 'runner',
    links: {
      play: 'https://kerarty.github.io/runner/',
      source: 'https://github.com/Kerarty',
    },
    details: {
      overview:
        'A compact browser prototype that let me cover the full path from idea to a published result within a limited time.',
      objective:
        'Check how quickly I could learn the required tool and bring a small game idea to a working demo version.',
      contribution: [
        'Organized the work on the prototype on my own.',
        'Learned the tools required for the implementation.',
        'Prototyped the core game mechanic.',
        'Tested the build and fixed the issues found.',
        'Published the prototype as a demo result.',
      ],
      tools: ['Game development', 'Prototyping', 'Browser builds', 'GitHub'],
      workflow: [
        'Defined the minimum scope of the prototype.',
        'Picked the tools and started building quickly.',
        'Implemented the core mechanic and tested the hypothesis.',
        'Tested, fixed issues and prepared the release.',
      ],
      outcome:
        'A published game prototype available by link, with source materials in the GitHub profile.',
      lessons: [
        'A limited scope helps carry an idea to the finish line.',
        'A quick prototype shows the value of iteration.',
        'Publishing is part of the verification, not a formality.',
      ],
    },
  },
  {
    id: 'technical-projects',
    index: '03',
    name: 'Technical Projects',
    subtitle: 'Course work in programming and data',
    type: 'Academic & Technical Projects',
    typeRu: 'Учебные и технические проекты',
    description:
      'Academic projects where I worked with programming, databases, testing and the technical implementation of various tasks.',
    technologies: ['Python', 'C#', 'C/C++', 'JavaScript', 'SQL', 'Git', 'Postman'],
    glyph: 'systems',
    links: {},
    mediaNote: 'Materials of individual course projects are available on request.',
    details: {
      overview:
        'A set of academic projects that built my technical foundation: from programming and data work to testing and development tooling.',
      objective:
        'Solidify the technical basics and learn to apply them to tasks of different scale — from individual algorithms to databases and API verification.',
      contribution: [
        'Completed course assignments in Python, C#, C/C++ and JavaScript.',
        'Worked with relational databases and SQL queries.',
        'Tested scenarios and verified system behaviour.',
        'Used Git, GitHub and Postman in academic tasks.',
      ],
      tools: ['Python', 'C#', 'C/C++', 'JavaScript', 'SQL', 'Git', 'GitHub', 'Postman'],
      workflow: [
        'Studied the task statement and requirements.',
        'Broke the task down into separate steps.',
        'Implemented and locally verified the solution.',
        'Tested edge cases and fixed the defects.',
      ],
      outcome:
        'A technical foundation I can now apply when analysing and coordinating IT tasks. Specific materials are available on request.',
      lessons: [
        'Understanding technical constraints makes task statements more precise.',
        'Verifying the result is a mandatory part of the work.',
        'Different languages and tools give a broader view of any solution.',
      ],
    },
  },
]

/** Возвращает досье проектов на выбранном языке. */
export function getProjects(lang: Lang): Project[] {
  return lang === 'en' ? projectsEn : projects
}

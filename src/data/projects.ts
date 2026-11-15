import type { Lang } from '@/i18n/language'

export type ProjectGlyph = 'factory' | 'runner' | 'systems' | 'ads' | 'pipeline' | 'sites' | 'bot'

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
    links: { source: 'https://github.com/Kerarty/Diplom' },
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
  {
    id: 'playable-ads',
    index: '04',
    name: 'Playable Ads',
    subtitle: 'SDK для играбельной рекламы и два прототипа',
    type: 'Engineering Projects',
    typeRu: 'Инженерные проекты',
    description:
      'Движко-независимый SDK для HTML5 playable-рекламы с адаптерами под рекламные сети и две играбельные рекламы: логическая головоломка и crowd runner. Каждый проект уложен в один HTML-файл без сетевых запросов.',
    technologies: ['TypeScript', 'PixiJS 8', 'matter.js', 'SDK Architecture'],
    glyph: 'ads',
    links: {
      play: 'https://kerarty.github.io/splash-kitty-playable-ad/',
      source: 'https://github.com/Kerarty/playable-ads',
    },
    details: {
      overview:
        'Играбельная реклама — формат, где игра загружается внутри рекламной площадки за секунды. Проект включает общий SDK с адаптерами под требования разных рекламных сетей и две полностью самостоятельные рекламы в одном HTML-файле.',
      objective:
        'Спроектировать переиспользуемую основу для играбельной рекламы и научиться удерживать качество игры в жёстких технических ограничениях: размер файла, отсутствие сетевых запросов, совместимость с площадками.',
      contribution: [
        'Спроектировал архитектуру SDK и адаптеры под требования рекламных сетей.',
        'Разработал две играбельные рекламы: Splash Kitty! (физика, PixiJS 8 + matter.js) и crowd runner.',
        'Уложил каждую рекламу в один HTML-файл с процедурными графикой и звуком — без внешних ассетов.',
        'Проанализировал технические требования площадок и встроил их в архитектуру решения.',
      ],
      tools: ['TypeScript', 'PixiJS 8', 'matter.js', 'Анализ требований рекламных платформ'],
      workflow: [
        'Изучил требования рекламных сетей к формату и весу креатива.',
        'Спроектировал слой SDK, отделяющий игровую логику от интеграции с площадкой.',
        'Реализовал прототипы игр в рамках ограничений размера и производительности.',
        'Проверил работу в браузере и подготовил публикации на GitHub Pages.',
      ],
      outcome:
        'Работающий SDK и две опубликованные играбельные рекламы, доступные по ссылкам и укладывающиеся в ограничения формата.',
      lessons: [
        'Жёсткие ограничения дисциплинируют архитектуру, а не только реализацию.',
        'Требования платформы — это часть задачи, а не помеха ей.',
        'Переиспользуемая основа окупается со второго проекта.',
      ],
    },
  },
  {
    id: 'cv-series',
    index: '05',
    name: 'Interactive CV Series',
    subtitle: '18 интерактивных резюме: один формат, разные концепты',
    type: 'Applied Projects',
    typeRu: 'Прикладные проекты',
    description:
      'Серия интерактивных резюме для откликов на вакансии: 18 проектов, от резюме-платформера и баланс-лаборатории до тактической игры и резюме-смартфона. Каждый проект — отдельная концепция под конкретную компанию и требования.',
    technologies: ['HTML/CSS/JS', 'TypeScript', 'Three.js', 'PixiJS 8'],
    glyph: 'pipeline',
    links: {
      source: 'https://github.com/Kerarty?tab=repositories',
    },
    details: {
      overview:
        'Серия проектов, в которой отрабатывался полный цикл: от анализа требований вакансии до опубликованного интерактивного результата. PROJECT ZERO — часть этой серии.',
      objective:
        'Проверить, как быстро и предсказуемо можно проходить путь «требования → концепт → прототип → публикация» многократно и на разных входных данных.',
      contribution: [
        'Разбирал требования каждой вакансии и превращал их в отдельную концепцию, а не шаблон.',
        'Отработал повторяемый процесс производства: концепт, декомпозиция, прототип, публикация.',
        'Довёл 18 проектов до опубликованного состояния.',
        'Сократил время от идеи до публикации за счёт переиспользования наработок серии.',
      ],
      tools: ['Анализ вакансий и требований', 'HTML/CSS/JS', 'TypeScript', 'Three.js', 'PixiJS 8'],
      workflow: [
        'Анализ вакансии: компания, продукт, ожидания от роли.',
        'Формулирование концепта, который отвечает на эти требования.',
        'Декомпозиция и реализация прототипа в ограниченное время.',
        'Публикация и фиксация результата в портфолио.',
      ],
      outcome:
        '18 опубликованных интерактивных резюме и отработанный повторяемый процесс их производства.',
      lessons: [
        'Повторяемый процесс важнее отдельного яркого результата.',
        'Требования заказчика определяют концепт, а не наоборот.',
        'Ограниченное время заставляет приоритизировать, а не улучшать бесконечно.',
      ],
    },
  },
  {
    id: 'client-sites',
    index: '06',
    name: 'Client Websites',
    subtitle: 'Сайты для реальных заказчиков из Светлогорска',
    type: 'Client Projects',
    typeRu: 'Проекты для заказчиков',
    description:
      'Прототипы сайтов для внешних заказчиков: магазин автохимии «Проблеск» и барбершоп «Атаман». Первый опыт коммуникации не с платформой или вакансией, а с заказчиком, у которого свои задачи, бюджет и язык.',
    technologies: ['HTML/CSS/JS', 'JavaScript', 'Prototyping', 'Project Planning'],
    glyph: 'sites',
    links: {
      play: 'https://kerarty.github.io/problesk-site/',
      source: 'https://github.com/Kerarty/Ataman_Sait',
    },
    details: {
      overview:
        'Два проекта с реальными заказчиками: сайт магазина автохимии и детейлинга и сайт барбершопа. Для обоих подготовлены прототипы и планы дальнейшей работы.',
      objective:
        'Пройти цикл работы с внешним заказчиком: понять бизнес-задачу, согласовать ожидания, собрать требования и предложить понятный план реализации.',
      contribution: [
        'Обсуждал задачи с заказчиками и переводил их в требования к сайту.',
        'Подготовил прототип дизайна и структуру страниц.',
        'Составил план проекта с этапами и ожидаемыми результатами.',
        'Опубликовал прототипы для обсуждения вместо описаний «на словах».',
      ],
      tools: ['Коммуникация с заказчиком', 'Сбор требований', 'HTML/CSS/JS', 'Прототипирование'],
      workflow: [
        'Разговор с заказчиком: бизнес, клиенты, что должен делать сайт.',
        'Формулирование требований и границ первого этапа.',
        'Прототип дизайна и ключевая функциональность.',
        'Публикация прототипа и сбор обратной связи.',
      ],
      outcome:
        'Опубликованные прототипы и согласованные планы следующих этапов. Проекты остаются в начальной стадии — это честно зафиксировано.',
      lessons: [
        'Заказчик говорит о бизнесе, а не о требованиях — переводить в требования приходится самому.',
        'Показать прототип эффективнее, чем описывать идею текстом.',
        'Фиксировать границы этапа важно и в маленьких проектах.',
      ],
    },
  },
  {
    id: 'exam-prep-bot',
    index: '07',
    name: 'Exam Prep Bot',
    subtitle: 'Telegram-бот для подготовки к ЦЭ/ЦТ по биологии',
    type: 'Automation Project',
    typeRu: 'Проект автоматизации',
    description:
      'Telegram-бот для подготовки школьников к централизованному экзамену и тестированию по биологии: структурированный учебный контент и проверка знаний в привычном для учеников интерфейсе.',
    technologies: ['Python', 'Telegram Bot API', 'Data Structuring'],
    glyph: 'bot',
    links: {
      source: 'https://github.com/Kerarty/TG_Bot_Znanie',
    },
    details: {
      overview:
        'Бот, который превращает подготовку к экзамену в диалог: вопросы, проверка ответов и материал в структуре, понятной школьнику.',
      objective:
        'Автоматизировать рутинную часть подготовки к экзамену и проверить, как продукт с простым сценарием помогает в реальном учебном процессе.',
      contribution: [
        'Спроектировал пользовательский сценарий подготовки: от выбора темы до проверки ответа.',
        'Структурировал учебный контент в формат, пригодный для бота.',
        'Реализовал бота на Python и Telegram Bot API.',
        'Проверил сценарий на реальном использовании.',
      ],
      tools: ['Python', 'Telegram Bot API', 'Структурирование контента'],
      workflow: [
        'Определил, какую часть подготовки имеет смысл автоматизировать.',
        'Спроектировал сценарий диалога и структуру вопросов.',
        'Реализовал бота и подключил контент.',
        'Проверил сценарий и скорректировал по результатам использования.',
      ],
      outcome:
        'Работающий бот с проверенным пользовательским сценарием и исходным кодом в открытом репозитории.',
      lessons: [
        'Автоматизация имеет смысл там, где есть понятный повторяющийся процесс.',
        'Простой сценарий, доведённый до конца, ценнее большого нереализованного плана.',
        'Реальное использование быстро находит слабые места продукта.',
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
    links: { source: 'https://github.com/Kerarty/Diplom' },
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
  {
    id: 'playable-ads',
    index: '04',
    name: 'Playable Ads',
    subtitle: 'An SDK for playable ads and two prototypes',
    type: 'Engineering Projects',
    typeRu: 'Инженерные проекты',
    description:
      'An engine-independent SDK for HTML5 playable ads with adapters for ad networks, plus two playable ads: a logic puzzle and a crowd runner. Each ad fits into a single HTML file with zero network requests.',
    technologies: ['TypeScript', 'PixiJS 8', 'matter.js', 'SDK Architecture'],
    glyph: 'ads',
    links: {
      play: 'https://kerarty.github.io/splash-kitty-playable-ad/',
      source: 'https://github.com/Kerarty/playable-ads',
    },
    details: {
      overview:
        'Playable ads are a format where a game loads inside an ad placement within seconds. The project includes a shared SDK with adapters for different ad network requirements and two fully self-contained ads in a single HTML file.',
      objective:
        'Design a reusable foundation for playable ads and learn to keep game quality within hard technical constraints: file size, no network requests, compatibility with placements.',
      contribution: [
        'Designed the SDK architecture and adapters for ad network requirements.',
        'Built two playable ads: Splash Kitty! (physics, PixiJS 8 + matter.js) and a crowd runner.',
        'Fit each ad into one HTML file with procedural graphics and sound — no external assets.',
        'Analysed placement technical requirements and built them into the architecture.',
      ],
      tools: ['TypeScript', 'PixiJS 8', 'matter.js', 'Ad platform requirement analysis'],
      workflow: [
        'Studied the ad network requirements for creative format and size.',
        'Designed the SDK layer separating game logic from placement integration.',
        'Built the game prototypes within size and performance constraints.',
        'Verified them in the browser and prepared GitHub Pages releases.',
      ],
      outcome:
        'A working SDK and two published playable ads, available by link and fitting the format constraints.',
      lessons: [
        'Hard constraints discipline the architecture, not only the implementation.',
        'Platform requirements are part of the task, not an obstacle to it.',
        'A reusable foundation pays off from the second project onward.',
      ],
    },
  },
  {
    id: 'cv-series',
    index: '05',
    name: 'Interactive CV Series',
    subtitle: '18 interactive CVs: one format, different concepts',
    type: 'Applied Projects',
    typeRu: 'Прикладные проекты',
    description:
      'A series of interactive CVs built for job applications: 18 projects, from a CV-platformer and a balance lab to a tactics game and a CV-as-smartphone. Every project is a separate concept tailored to a specific company and its requirements.',
    technologies: ['HTML/CSS/JS', 'TypeScript', 'Three.js', 'PixiJS 8'],
    glyph: 'pipeline',
    links: {
      source: 'https://github.com/Kerarty?tab=repositories',
    },
    details: {
      overview:
        'A series of projects that exercised the full cycle: from analysing a vacancy to a published interactive result. PROJECT ZERO — the site you are viewing — is part of this series.',
      objective:
        'Check how quickly and predictably I could repeat the path "requirements → concept → prototype → publication" many times, on different inputs.',
      contribution: [
        'Analysed each vacancy and turned its requirements into a separate concept instead of a template.',
        'Built a repeatable production process: concept, decomposition, prototype, publication.',
        'Carried 18 projects to a published state.',
        'Reduced the idea-to-publication time by reusing the assets of the series.',
      ],
      tools: ['Vacancy and requirement analysis', 'HTML/CSS/JS', 'TypeScript', 'Three.js', 'PixiJS 8'],
      workflow: [
        'Vacancy analysis: the company, the product, the role expectations.',
        'Formulating a concept that answers those requirements.',
        'Decomposition and prototyping within a limited time.',
        'Publication and recording the result in the portfolio.',
      ],
      outcome:
        '18 published interactive CVs and a proven, repeatable production process behind them.',
      lessons: [
        'A repeatable process matters more than a single bright result.',
        'Customer requirements shape the concept, not the other way around.',
        'Limited time forces prioritization instead of endless improvement.',
      ],
    },
  },
  {
    id: 'client-sites',
    index: '06',
    name: 'Client Websites',
    subtitle: 'Websites for real clients from Svetlogorsk',
    type: 'Client Projects',
    typeRu: 'Проекты для заказчиков',
    description:
      'Website prototypes for external clients: an auto-chemistry store (Problesk) and a barbershop (Ataman). My first experience communicating not with a platform or a vacancy, but with a client who has their own goals, budget and language.',
    technologies: ['HTML/CSS/JS', 'JavaScript', 'Prototyping', 'Project Planning'],
    glyph: 'sites',
    links: {
      play: 'https://kerarty.github.io/problesk-site/',
      source: 'https://github.com/Kerarty/Ataman_Sait',
    },
    details: {
      overview:
        'Two projects with real clients: a website for an auto-chemistry and detailing store and a website for a barbershop. For both, prototypes and plans for further work were prepared.',
      objective:
        'Go through the cycle of working with an external client: understand the business goal, align expectations, gather requirements and propose a clear implementation plan.',
      contribution: [
        'Discussed the goals with the clients and translated them into website requirements.',
        'Prepared design prototypes and the page structure.',
        'Wrote a project plan with stages and expected results.',
        'Published prototypes for discussion instead of describing ideas in words.',
      ],
      tools: ['Client communication', 'Requirements gathering', 'HTML/CSS/JS', 'Prototyping'],
      workflow: [
        'A conversation with the client: the business, the customers, what the site must do.',
        'Formulating requirements and the boundaries of the first stage.',
        'Design prototype and the key functionality.',
        'Publishing the prototype and collecting feedback.',
      ],
      outcome:
        'Published prototypes and agreed plans for the next stages. The projects remain at an early stage — this is honestly recorded.',
      lessons: [
        'A client speaks about their business, not about requirements — translating is your job.',
        'Showing a prototype is more effective than describing an idea in text.',
        'Recording stage boundaries matters in small projects too.',
      ],
    },
  },
  {
    id: 'exam-prep-bot',
    index: '07',
    name: 'Exam Prep Bot',
    subtitle: 'A Telegram bot for biology exam preparation',
    type: 'Automation Project',
    typeRu: 'Проект автоматизации',
    description:
      'A Telegram bot that helps students prepare for the centralized biology exam: structured learning content and answer verification in the interface students already use every day.',
    technologies: ['Python', 'Telegram Bot API', 'Data Structuring'],
    glyph: 'bot',
    links: {
      source: 'https://github.com/Kerarty/TG_Bot_Znanie',
    },
    details: {
      overview:
        'A bot that turns exam preparation into a dialogue: questions, answer verification and learning material in a structure a student can follow.',
      objective:
        'Automate the routine part of exam preparation and check how a product with a simple scenario helps in a real learning process.',
      contribution: [
        'Designed the preparation user scenario: from picking a topic to verifying an answer.',
        'Structured the learning content into a bot-friendly format.',
        'Implemented the bot in Python on the Telegram Bot API.',
        'Tested the scenario against real usage.',
      ],
      tools: ['Python', 'Telegram Bot API', 'Content structuring'],
      workflow: [
        'Defined which part of the preparation is worth automating.',
        'Designed the dialogue scenario and the question structure.',
        'Implemented the bot and connected the content.',
        'Tested the scenario and adjusted it based on real usage.',
      ],
      outcome:
        'A working bot with a verified user scenario and open-source code in a public repository.',
      lessons: [
        'Automation makes sense where there is a clear repeating process.',
        'A simple scenario carried to the end beats a large unfinished plan.',
        'Real usage quickly finds the weak spots of a product.',
      ],
    },
  },
]

/** Возвращает досье проектов на выбранном языке. */
export function getProjects(lang: Lang): Project[] {
  return lang === 'en' ? projectsEn : projects
}

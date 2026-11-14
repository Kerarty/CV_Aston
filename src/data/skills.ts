export type SkillTool = {
  name: string
  mark: string
  description: string
  context: string
}

export type SkillGroup = {
  id: string
  title: string
  caption: string
  tools: SkillTool[]
}

export const planningSteps = [
  { index: '01', name: 'Idea', text: 'Сформулировать задачу и ожидаемый результат.' },
  { index: '02', name: 'Tasks', text: 'Разложить работу на понятные шаги.' },
  { index: '03', name: 'Priorities', text: 'Определить порядок и зависимости.' },
  { index: '04', name: 'Execution', text: 'Выполнять и проверять промежуточный результат.' },
  { index: '05', name: 'Review', text: 'Разобрать итог и скорректировать подход.' },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    caption: 'Языки, с которыми работал в учебных и личных задачах',
    tools: [
      {
        name: 'Python',
        mark: 'PY',
        description: 'Учебные задания, обработка данных и небольшие скрипты.',
        context: 'Использовал для учебных работ и проверки логики задач.',
      },
      {
        name: 'C#',
        mark: 'C#',
        description: 'Разработка игровых систем и логики в Unity.',
        context: 'Основной язык дипломного проекта Factory Management.',
      },
      {
        name: 'C / C++',
        mark: 'C++',
        description: 'Базовые учебные задачи, алгоритмы и структуры данных.',
        context: 'Техническая база в рамках университетской программы.',
      },
      {
        name: 'JavaScript',
        mark: 'JS',
        description: 'Основы веб-разработки и интерактивной логики.',
        context: 'Учебные задания и работа с интерфейсной логикой.',
      },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    caption: 'Работа с данными и запросами',
    tools: [
      {
        name: 'SQL',
        mark: 'SQL',
        description: 'Реляционные базы данных, выборки и структура таблиц.',
        context: 'Учебные задания по проектированию и работе с базами данных.',
      },
    ],
  },
  {
    id: 'game',
    title: 'Game Development',
    caption: 'Среда разработки игровых проектов',
    tools: [
      {
        name: 'Unity',
        mark: 'UN',
        description: 'Игровые механики, сцены, UI и логика взаимодействия систем.',
        context: 'Дипломный проект Factory Management и самостоятельные прототипы.',
      },
    ],
  },
  {
    id: 'devtools',
    title: 'Development Tools',
    caption: 'Инструменты ежедневной технической работы',
    tools: [
      {
        name: 'Visual Studio Code',
        mark: 'VS',
        description: 'Редактор кода и работы с проектами.',
        context: 'Настройка рабочего окружения, расширения, отладка.',
      },
      {
        name: 'Android Studio',
        mark: 'AS',
        description: 'Среда разработки для Android-проектов.',
        context: 'Учебные задачи, связанные с мобильной разработкой.',
      },
      {
        name: 'Git',
        mark: 'GIT',
        description: 'Контроль версий и работа с историей изменений.',
        context: 'Локальные репозитории и фиксация этапов работы.',
      },
      {
        name: 'GitHub',
        mark: 'GH',
        description: 'Хранение кода, публикация проектов и портфолио.',
        context: 'Публикация Runner и исходных материалов.',
      },
      {
        name: 'Postman',
        mark: 'PM',
        description: 'Проверка API-запросов и ответов.',
        context: 'Учебные сценарии тестирования и работа с эндпоинтами.',
      },
    ],
  },
]

export const documentationTools: SkillTool[] = [
  {
    name: 'Google Docs',
    mark: 'GD',
    description: 'Документы, структура текста и совместная работа.',
    context: 'Учебные и проектные документы.',
  },
  {
    name: 'Notion',
    mark: 'NO',
    description: 'Заметки, базы знаний и структурирование информации.',
    context: 'Личная организация задач и материалов.',
  },
  {
    name: 'Confluence',
    mark: 'CF',
    description: 'Корпоративная база знаний и документация.',
    context: 'Знакомство с инструментом и логикой пространств.',
  },
  {
    name: 'Excel',
    mark: 'XL',
    description: 'Таблицы, формулы и базовая аналитика.',
    context: 'Базовый уровень для учебных задач.',
  },
  {
    name: 'Google Sheets',
    mark: 'GS',
    description: 'Совместные таблицы и простая обработка данных.',
    context: 'Базовый уровень для организации информации.',
  },
]

export const aiTools = [
  {
    name: 'ChatGPT',
    mark: 'GPT',
    description: 'Анализ информации, формулирование вопросов и проверка гипотез.',
  },
  {
    name: 'Claude',
    mark: 'CL',
    description: 'Работа с текстом, структурой и разбором сложных описаний.',
  },
  {
    name: 'Codex',
    mark: 'CX',
    description: 'Помощь в реализации и проверке фрагментов кода.',
  },
]

export const aiWorkflow = [
  { index: '01', name: 'Формулирование задачи' },
  { index: '02', name: 'Анализ и декомпозиция' },
  { index: '03', name: 'Подготовка запроса' },
  { index: '04', name: 'Решение или прототип' },
  { index: '05', name: 'Проверка результата' },
  { index: '06', name: 'Доработка' },
]

export const aiMessages = [
  {
    role: 'you',
    label: 'YOU / TASK',
    text: 'Помоги разложить задачу на подзадачи и предложи критерии готовности. Контекст: учебный проект, нужен рабочий прототип.',
  },
  {
    role: 'ai',
    label: 'AI / DRAFT',
    text: 'Черновой вариант: 1) определить минимальный сценарий; 2) разбить на 3–4 проверяемых шага; 3) зафиксировать, что считается готовым результатом.',
  },
  {
    role: 'you',
    label: 'YOU / CHECK',
    text: 'Какие риски есть в этом плане и что можно упростить, не потеряв результат?',
  },
  {
    role: 'ai',
    label: 'AI / REVIEW',
    text: 'Риск: слишком широкий первый шаг. Упрощение: начать с одного пользовательского сценария и проверить его до расширения.',
  },
]

import type { Lang } from '@/i18n/language'

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

const planningStepsEn = [
  { index: '01', name: 'Idea', text: 'Formulate the task and the expected result.' },
  { index: '02', name: 'Tasks', text: 'Break the work into clear steps.' },
  { index: '03', name: 'Priorities', text: 'Define the order and the dependencies.' },
  { index: '04', name: 'Execution', text: 'Execute and verify intermediate results.' },
  { index: '05', name: 'Review', text: 'Analyze the outcome and adjust the approach.' },
]

const skillGroupsEn: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    caption: 'Languages I have used in academic and personal tasks',
    tools: [
      {
        name: 'Python',
        mark: 'PY',
        description: 'Course assignments, data processing and small scripts.',
        context: 'Used for academic work and verifying task logic.',
      },
      {
        name: 'C#',
        mark: 'C#',
        description: 'Game systems and logic development in Unity.',
        context: 'The main language of the Factory Management diploma project.',
      },
      {
        name: 'C / C++',
        mark: 'C++',
        description: 'Basic course tasks, algorithms and data structures.',
        context: 'Technical foundation within the university programme.',
      },
      {
        name: 'JavaScript',
        mark: 'JS',
        description: 'Web development basics and interactive logic.',
        context: 'Course assignments and interface logic work.',
      },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    caption: 'Working with data and queries',
    tools: [
      {
        name: 'SQL',
        mark: 'SQL',
        description: 'Relational databases, queries and table structure.',
        context: 'Academic assignments on database design and queries.',
      },
    ],
  },
  {
    id: 'game',
    title: 'Game Development',
    caption: 'Environment for game projects',
    tools: [
      {
        name: 'Unity',
        mark: 'UN',
        description: 'Game mechanics, scenes, UI and system interaction logic.',
        context: 'The Factory Management diploma project and self-driven prototypes.',
      },
    ],
  },
  {
    id: 'devtools',
    title: 'Development Tools',
    caption: 'Tools of daily technical work',
    tools: [
      {
        name: 'Visual Studio Code',
        mark: 'VS',
        description: 'Code editor and project work.',
        context: 'Workspace setup, extensions, debugging.',
      },
      {
        name: 'Android Studio',
        mark: 'AS',
        description: 'IDE for Android projects.',
        context: 'Academic tasks related to mobile development.',
      },
      {
        name: 'Git',
        mark: 'GIT',
        description: 'Version control and working with change history.',
        context: 'Local repositories and fixing milestones of the work.',
      },
      {
        name: 'GitHub',
        mark: 'GH',
        description: 'Storing code, publishing projects and the portfolio.',
        context: 'Publishing Runner and the source materials.',
      },
      {
        name: 'Postman',
        mark: 'PM',
        description: 'Verifying API requests and responses.',
        context: 'Academic testing scenarios and endpoint work.',
      },
    ],
  },
]

const documentationToolsEn: SkillTool[] = [
  {
    name: 'Google Docs',
    mark: 'GD',
    description: 'Documents, text structure and collaboration.',
    context: 'Academic and project documents.',
  },
  {
    name: 'Notion',
    mark: 'NO',
    description: 'Notes, knowledge bases and structuring information.',
    context: 'Personal organization of tasks and materials.',
  },
  {
    name: 'Confluence',
    mark: 'CF',
    description: 'Corporate knowledge base and documentation.',
    context: 'Getting to know the tool and its space logic.',
  },
  {
    name: 'Excel',
    mark: 'XL',
    description: 'Spreadsheets, formulas and basic analytics.',
    context: 'Basic level for academic tasks.',
  },
  {
    name: 'Google Sheets',
    mark: 'GS',
    description: 'Shared spreadsheets and simple data processing.',
    context: 'Basic level for organizing information.',
  },
]

const aiToolsEn = [
  {
    name: 'ChatGPT',
    mark: 'GPT',
    description: 'Analysing information, framing questions and testing hypotheses.',
  },
  {
    name: 'Claude',
    mark: 'CL',
    description: 'Working with text, structure and breaking down complex descriptions.',
  },
  {
    name: 'Codex',
    mark: 'CX',
    description: 'Support with implementation and verifying code fragments.',
  },
]

const aiWorkflowEn = [
  { index: '01', name: 'Formulating the task' },
  { index: '02', name: 'Analysis and decomposition' },
  { index: '03', name: 'Preparing the request' },
  { index: '04', name: 'Solution or prototype' },
  { index: '05', name: 'Verifying the result' },
  { index: '06', name: 'Refinement' },
]

const aiMessagesEn = [
  {
    role: 'you',
    label: 'YOU / TASK',
    text: 'Help me break the task into subtasks and propose readiness criteria. Context: academic project, we need a working prototype.',
  },
  {
    role: 'ai',
    label: 'AI / DRAFT',
    text: 'Draft: 1) define the minimal scenario; 2) split it into 3–4 verifiable steps; 3) fix what counts as the finished result.',
  },
  {
    role: 'you',
    label: 'YOU / CHECK',
    text: 'What risks does this plan carry, and what can be simplified without losing the result?',
  },
  {
    role: 'ai',
    label: 'AI / REVIEW',
    text: 'Risk: the first step is too broad. Simplification: start with one user scenario and verify it before expanding.',
  },
]

export function getPlanningSteps(lang: Lang) {
  return lang === 'en' ? planningStepsEn : planningSteps
}

export function getSkillGroups(lang: Lang): SkillGroup[] {
  return lang === 'en' ? skillGroupsEn : skillGroups
}

export function getDocumentationTools(lang: Lang): SkillTool[] {
  return lang === 'en' ? documentationToolsEn : documentationTools
}

export function getAiTools(lang: Lang) {
  return lang === 'en' ? aiToolsEn : aiTools
}

export function getAiWorkflow(lang: Lang) {
  return lang === 'en' ? aiWorkflowEn : aiWorkflow
}

export function getAiMessages(lang: Lang) {
  return lang === 'en' ? aiMessagesEn : aiMessages
}

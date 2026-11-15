import type { Lang } from '@/i18n/language'

export type LeadershipArea = {
  id: string
  title: string
  short: string
  details: string
}

export const leadershipIntro = {
  title: 'Faculty Student Council',
  role: 'Руководитель факультетского студенческого совета',
  text: 'Опыт руководства факультетским студенческим советом позволил мне получить практическое представление об организации совместной работы, коммуникации между участниками, координации деятельности и решении организационных вопросов. Этот опыт стал одной из причин моего интереса к управлению командами и проектами.',
}

export const leadershipAreas: LeadershipArea[] = [
  {
    id: 'coordination',
    title: 'Coordination',
    short: 'Координация участников, согласование действий и организация совместной работы.',
    details:
      'Согласование действий между участниками, удержание общего фокуса и организация совместной работы. Важно понимать, кто за что отвечает, где пересекаются задачи и какие решения требуют общего обсуждения.',
  },
  {
    id: 'communication',
    title: 'Communication',
    short: 'Взаимодействие со студентами, представителями факультета и другими участниками организационной деятельности.',
    details:
      'Коммуникация со студентами, представителями факультета и другими участниками организационной деятельности. Открытый обмен информацией помогает раньше обнаруживать недопонимание и договариваться о следующих шагах.',
  },
  {
    id: 'organization',
    title: 'Organization',
    short: 'Участие в организации факультетских мероприятий и инициатив.',
    details:
      'Участие в подготовке и организации факультетских мероприятий и инициатив: определение последовательности действий, распределение внимания между задачами и контроль того, что согласованные шаги выполняются.',
  },
  {
    id: 'responsibility',
    title: 'Responsibility',
    short: 'Работа с текущими организационными вопросами и ответственность за согласованные действия.',
    details:
      'Работа с текущими организационными вопросами и ответственность за согласованные действия. Этот опыт показывает, что управление — это не только планирование, но и готовность разбираться с последствиями решений.',
  },
]

export type ManagementStage = {
  id: string
  number: string
  title: string
  description: string
}

export const managementCycle: ManagementStage[] = [
  {
    id: 'plan',
    number: '01',
    title: 'Plan',
    description:
      'Определить цель, объём работы и критерии результата. Понять, какие ограничения есть по времени, людям и ресурсам.',
  },
  {
    id: 'organize',
    number: '02',
    title: 'Organize',
    description:
      'Разложить работу на задачи, определить роли и последовательность шагов. Сделать план понятным для всех участников.',
  },
  {
    id: 'coordinate',
    number: '03',
    title: 'Coordinate',
    description:
      'Синхронизировать участников, согласовывать действия и вовремя замечать расхождения между планом и реальностью.',
  },
  {
    id: 'control',
    number: '04',
    title: 'Control',
    description:
      'Сверять фактический прогресс с планом, проверять качество результата и фиксировать отклонения.',
  },
  {
    id: 'review',
    number: '05',
    title: 'Review',
    description:
      'Разобрать итог: что сработало, что нет и что стоит изменить в следующем цикле. Затем цикл начинается заново.',
  },
]

const leadershipIntroEn = {
  title: 'Faculty Student Council',
  role: 'Head of the Faculty Student Council',
  text: 'Leading the faculty student council gave me hands-on insight into organizing joint work, communication between participants, coordination and resolving organizational issues. This experience became one of the reasons behind my interest in leading teams and projects.',
}

const leadershipAreasEn: LeadershipArea[] = [
  {
    id: 'coordination',
    title: 'Coordination',
    short: 'Coordinating participants, aligning actions and organizing joint work.',
    details:
      'Aligning actions between participants, keeping the shared focus and organizing joint work. It matters to understand who is responsible for what, where tasks overlap and which decisions require a joint discussion.',
  },
  {
    id: 'communication',
    title: 'Communication',
    short: 'Interaction with students, faculty representatives and other participants of the organizational work.',
    details:
      'Communication with students, faculty representatives and other participants of organizational activity. Open information exchange helps surface misunderstandings earlier and agree on the next steps.',
  },
  {
    id: 'organization',
    title: 'Organization',
    short: 'Taking part in organizing faculty events and initiatives.',
    details:
      'Participating in the preparation and organization of faculty events and initiatives: defining the sequence of actions, distributing attention across tasks and checking that the agreed steps actually happen.',
  },
  {
    id: 'responsibility',
    title: 'Responsibility',
    short: 'Handling day-to-day organizational issues and being accountable for the agreed actions.',
    details:
      'Handling day-to-day organizational issues and being accountable for the agreed actions. This experience shows that management is not only planning — it is also the readiness to deal with the consequences of decisions.',
  },
]

const managementCycleEn: ManagementStage[] = [
  {
    id: 'plan',
    number: '01',
    title: 'Plan',
    description:
      'Define the goal, the scope and the result criteria. Understand the constraints on time, people and resources.',
  },
  {
    id: 'organize',
    number: '02',
    title: 'Organize',
    description:
      'Break the work into tasks, define roles and the sequence of steps. Make the plan clear to every participant.',
  },
  {
    id: 'coordinate',
    number: '03',
    title: 'Coordinate',
    description:
      'Synchronize participants, align actions and notice in time where the plan diverges from reality.',
  },
  {
    id: 'control',
    number: '04',
    title: 'Control',
    description:
      'Compare actual progress with the plan, verify the quality of the result and record the deviations.',
  },
  {
    id: 'review',
    number: '05',
    title: 'Review',
    description:
      'Analyze the outcome: what worked, what did not and what to change in the next cycle. Then the cycle starts again.',
  },
]

export function getLeadershipIntro(lang: Lang) {
  return lang === 'en' ? leadershipIntroEn : leadershipIntro
}

export function getLeadershipAreas(lang: Lang): LeadershipArea[] {
  return lang === 'en' ? leadershipAreasEn : leadershipAreas
}

export function getManagementCycle(lang: Lang): ManagementStage[] {
  return lang === 'en' ? managementCycleEn : managementCycle
}

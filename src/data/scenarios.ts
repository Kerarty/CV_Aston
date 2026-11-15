import type { Lang } from '@/i18n/language'

export type ScenarioOption = {
  id: 'A' | 'B' | 'C'
  title: string
  summary: string
  advantages: string
  risks: string
  nextStep: string
}

export type Scenario = {
  id: string
  index: string
  title: string
  ru: string
  situation: string
  context: string
  options: ScenarioOption[]
}

export const scenarios: Scenario[] = [
  {
    id: 'unclear-requirements',
    index: '01',
    title: 'Unclear Requirements',
    ru: 'Неполные требования',
    situation:
      'Заказчик хочет получить новый функционал, но описание задачи неполное. Команда уже готова приступить к разработке.',
    context:
      'Функционал затрагивает существующие сценарии, а критерии готовности не зафиксированы. Команда ждёт решения.',
    options: [
      {
        id: 'A',
        title: 'Уточнить требования',
        summary: 'Сначала закрыть пробелы в описании, затем начинать реализацию.',
        advantages:
          'Уточнение требований снижает вероятность разночтений и лишних переделок. Команда получает общую картину результата.',
        risks:
          'Уточнение занимает время и может выявить дополнительные вопросы, которые потребуют отдельного решения.',
        nextStep:
          'Определить критерии приёмки, зафиксировать границы задачи и декомпозировать её на проверяемые части.',
      },
      {
        id: 'B',
        title: 'Начать разработку прототипа',
        summary: 'Быстро проверить гипотезу на минимальной версии функционала.',
        advantages:
          'Прототипирование позволяет быстрее проверить гипотезу и получить обратную связь по направлению решения.',
        risks:
          'При недостаточном понимании задачи повышается риск переделок, а прототип могут ошибочно принять за финальную договорённость.',
        nextStep:
          'Согласовать, что именно проверяет прототип, и какие решения по нему не являются окончательными.',
      },
      {
        id: 'C',
        title: 'Собрать команду для обсуждения',
        summary: 'Обсудить задачу вместе с участниками реализации.',
        advantages:
          'Совместное обсуждение помогает собрать точки зрения участников и заранее обнаружить технические ограничения.',
        risks:
          'Без подготовленных вопросов встреча может превратиться в обмен мнениями и не дать конкретного решения.',
        nextStep:
          'Заранее сформулировать вопросы, которые необходимо решить, и зафиксировать итог встречи.',
      },
    ],
  },
  {
    id: 'project-delay',
    index: '02',
    title: 'Project Delay',
    ru: 'Задержка задачи',
    situation:
      'Один из участников команды не успевает выполнить задачу, от которой зависит следующий этап проекта.',
    context:
      'Следующий этап уже запланирован. Причина задержки пока неясна, а затронутые зависимости не зафиксированы полностью.',
    options: [
      {
        id: 'A',
        title: 'Перераспределить задачи',
        summary: 'Передать часть работы другим участникам команды.',
        advantages:
          'Перераспределение может быстро снять часть нагрузки и сохранить движение по зависимым задачам.',
        risks:
          'Без понимания причин задержки можно создать новое узкое место, потерять контекст и снизить качество.',
        nextStep:
          'Проверить зависимости, компетенции участников и понять, кто действительно может принять задачу без потери контекста.',
      },
      {
        id: 'B',
        title: 'Выяснить причины задержки',
        summary: 'Обсудить ситуацию с исполнителем и найти решение вместе.',
        advantages:
          'Разговор помогает понять реальную причину: объём задачи, неясность требований, техническая блокировка или нехватка ресурсов.',
        risks:
          'Требует времени на разговор; если проблема системная, одного обсуждения недостаточно.',
        nextStep:
          'Согласовать план восстановления, контрольные точки и понять, нужна ли дополнительная поддержка.',
      },
      {
        id: 'C',
        title: 'Пересмотреть сроки и приоритеты',
        summary: 'Изменить план с учётом реальной доступности команды.',
        advantages:
          'Более реалистичный срок снижает риск накопления ошибок и авральной работы на последнем этапе.',
        risks:
          'Изменение сроков может повлиять на ожидания заказчика и другие задачи, зависящие от результата.',
        nextStep:
          'Оценить влияние на зависимые работы и согласовать изменение плана с заказчиком до его фиксации.',
      },
    ],
  },
  {
    id: 'priority-change',
    index: '03',
    title: 'Priority Change',
    ru: 'Смена приоритетов',
    situation:
      'Заказчик изменил приоритеты, хотя команда уже начала реализацию согласованного плана.',
    context:
      'Часть работы уже выполнена. Новые приоритеты могут потребовать изменения объёма, сроков или состава команды.',
    options: [
      {
        id: 'A',
        title: 'Пересмотреть план после уточнения требований',
        summary: 'Сначала понять новые приоритеты, затем обновить план.',
        advantages:
          'Новый план будет опираться на актуальные ожидания заказчика, а не на устаревшие договорённости.',
        risks:
          'Без фиксации изменений есть риск незаметно расширить объём работ и потерять контроль над сроками.',
        nextStep:
          'Зафиксировать изменения, обновить критерии приёмки и показать команде, что именно меняется.',
      },
      {
        id: 'B',
        title: 'Продолжить первоначальный план',
        summary: 'Сохранить стабильность и завершить уже согласованную работу.',
        advantages:
          'Команда сохраняет фокус, а уже начатая работа не останавливается.',
        risks:
          'Первоначальный план может перестать соответствовать ожиданиям заказчика; часть результата окажется невостребованной.',
        nextStep:
          'Подтвердить с заказчиком, что приоритеты действительно не изменились, и зафиксировать это решение.',
      },
      {
        id: 'C',
        title: 'Оценить влияние и согласовать решение',
        summary: 'Сравнить варианты по срокам, ресурсам и качеству.',
        advantages:
          'Решение принимается с пониманием цены изменений, а не как немедленная реакция на новое требование.',
        risks:
          'Оценка влияния требует времени и координации между участниками.',
        nextStep:
          'Подготовить варианты с последствиями, обсудить их с заказчиком и зафиксировать выбранный путь.',
      },
    ],
  },
]

export const decisionPrinciples = [
  {
    index: '01',
    title: 'Сначала понять задачу',
    text: 'Уточнить цель, границы и критерии готовности. Не начинать реализацию на догадках.',
  },
  {
    index: '02',
    title: 'Искать причину, а не следствие',
    text: 'Задержка или ошибка — сигнал. Важно понять, что именно привело к ситуации.',
  },
  {
    index: '03',
    title: 'Оценивать влияние изменений',
    text: 'Любое изменение приоритетов имеет цену в сроках, ресурсах или качестве.',
  },
  {
    index: '04',
    title: 'Фиксировать договорённости',
    text: 'Решения должны быть понятны участникам и проверяемы по критериям приёмки.',
  },
  {
    index: '05',
    title: 'Согласовывать решение',
    text: 'Хорошее управленческое решение учитывает позиции заказчика, команды и ограничения проекта.',
  },
]

const decisionPrinciplesEn = [
  {
    index: '01',
    title: 'Understand the task first',
    text: 'Clarify the goal, the boundaries and the readiness criteria. Never start implementation on guesses.',
  },
  {
    index: '02',
    title: 'Look for the cause, not the symptom',
    text: 'A delay or a defect is a signal. What matters is understanding what actually led to the situation.',
  },
  {
    index: '03',
    title: 'Assess the impact of changes',
    text: 'Every change of priorities has a price in deadlines, resources or quality.',
  },
  {
    index: '04',
    title: 'Write agreements down',
    text: 'Decisions must be clear to every participant and verifiable against acceptance criteria.',
  },
  {
    index: '05',
    title: 'Align the decision',
    text: 'A good management decision accounts for the customer, the team and the project constraints.',
  },
]

const scenariosEn: Scenario[] = [
  {
    id: 'unclear-requirements',
    index: '01',
    title: 'Unclear Requirements',
    ru: 'Неполные требования',
    situation:
      'The customer wants a new feature, but the task description is incomplete. The team is ready to start development.',
    context:
      'The feature affects existing scenarios and the readiness criteria are not fixed. The team is waiting for a decision.',
    options: [
      {
        id: 'A',
        title: 'Clarify the requirements',
        summary: 'Close the gaps in the description first, then start the implementation.',
        advantages:
          'Clarifying requirements reduces the risk of misunderstandings and rework. The team gets a shared picture of the result.',
        risks:
          'Clarification takes time and may surface additional questions that need separate decisions.',
        nextStep:
          'Define acceptance criteria, fix the task boundaries and decompose it into verifiable parts.',
      },
      {
        id: 'B',
        title: 'Start building a prototype',
        summary: 'Test the hypothesis quickly on a minimal version of the feature.',
        advantages:
          'Prototyping verifies the hypothesis faster and provides early feedback on the direction of the solution.',
        risks:
          'With a poorly understood task, rework risk grows, and the prototype can be mistaken for a final agreement.',
        nextStep:
          'Agree on what exactly the prototype verifies and which decisions about it are not final.',
      },
      {
        id: 'C',
        title: 'Bring the team together to discuss',
        summary: 'Discuss the task together with the people who will implement it.',
        advantages:
          'A joint discussion collects different perspectives and surfaces technical constraints early.',
        risks:
          'Without prepared questions the meeting can turn into an exchange of opinions without a concrete outcome.',
        nextStep:
          'Prepare the questions that must be resolved in advance and record the outcome of the meeting.',
      },
    ],
  },
  {
    id: 'project-delay',
    index: '02',
    title: 'Project Delay',
    ru: 'Задержка задачи',
    situation:
      'One team member is behind on a task that the next project stage depends on.',
    context:
      'The next stage is already scheduled. The cause of the delay is unclear and the affected dependencies are not fully mapped.',
    options: [
      {
        id: 'A',
        title: 'Redistribute the tasks',
        summary: 'Move part of the work to other team members.',
        advantages:
          'Redistribution can quickly relieve the load and keep the dependent work moving.',
        risks:
          'Without understanding the cause of the delay you can create a new bottleneck, lose context and reduce quality.',
        nextStep:
          'Check the dependencies and competencies and find who can actually take the task without losing context.',
      },
      {
        id: 'B',
        title: 'Find out the cause of the delay',
        summary: 'Talk to the performer and find a solution together.',
        advantages:
          'A conversation reveals the real cause: task size, unclear requirements, a technical blocker or lack of resources.',
        risks:
          'It takes time; if the problem is systemic, one conversation is not enough.',
        nextStep:
          'Agree on a recovery plan and checkpoints, and decide whether extra support is needed.',
      },
      {
        id: 'C',
        title: 'Revise the schedule and priorities',
        summary: 'Adjust the plan to the actual availability of the team.',
        advantages:
          'A realistic deadline reduces the risk of accumulated defects and crunch at the final stage.',
        risks:
          'Changing the schedule affects customer expectations and other tasks that depend on the result.',
        nextStep:
          'Assess the impact on dependent work and agree the plan change with the customer before fixing it.',
      },
    ],
  },
  {
    id: 'priority-change',
    index: '03',
    title: 'Priority Change',
    ru: 'Смена приоритетов',
    situation:
      'The customer changed the priorities while the team has already started implementing the agreed plan.',
    context:
      'Part of the work is done. The new priorities may require changes to scope, deadlines or the team.',
    options: [
      {
        id: 'A',
        title: 'Revise the plan after clarifying requirements',
        summary: 'Understand the new priorities first, then update the plan.',
        advantages:
          'The new plan rests on the current expectations of the customer instead of outdated agreements.',
        risks:
          'Without recording the changes there is a risk of silently expanding the scope and losing control of the deadlines.',
        nextStep:
          'Record the changes, update the acceptance criteria and show the team exactly what changes.',
      },
      {
        id: 'B',
        title: 'Continue with the original plan',
        summary: 'Keep the stability and finish the already agreed work.',
        advantages:
          'The team keeps its focus and the work in progress does not stop.',
        risks:
          'The original plan may no longer match customer expectations; part of the result may turn out unneeded.',
        nextStep:
          'Confirm with the customer that the priorities indeed have not changed and record that decision.',
      },
      {
        id: 'C',
        title: 'Assess the impact and align the decision',
        summary: 'Compare the options across deadlines, resources and quality.',
        advantages:
          'The decision is made with a clear view of the cost of change, not as an immediate reaction.',
        risks:
          'Impact assessment takes time and coordination between participants.',
        nextStep:
          'Prepare options with their consequences, discuss them with the customer and record the chosen path.',
      },
    ],
  },
]

/** Возвращает сценарии на выбранном языке. */
export function getScenarios(lang: Lang): Scenario[] {
  return lang === 'en' ? scenariosEn : scenarios
}

/** Принципы, показываемые в итоговом экране симуляции. */
export function getDecisionPrinciples(lang: Lang) {
  return lang === 'en' ? decisionPrinciplesEn : decisionPrinciples
}

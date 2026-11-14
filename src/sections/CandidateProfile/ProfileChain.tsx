import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/utils/cn'

const stages = [
  {
    id: 'technology',
    name: 'Technology',
    index: '01',
    description:
      'Понимание технической стороны IT: как устроена разработка, какие ограничения есть у технологий и что стоит за задачей.',
  },
  {
    id: 'analysis',
    name: 'Analysis',
    index: '02',
    description:
      'Разбор задач и структурирование информации: выделить главное, сформулировать вопросы и разложить работу на части.',
  },
  {
    id: 'organization',
    name: 'Organization',
    index: '03',
    description:
      'Организация работы и взаимодействия: договориться о ролях, последовательности шагов и точке результата.',
  },
  {
    id: 'execution',
    name: 'Execution',
    index: '04',
    description:
      'Переход от идеи к реализации: удерживать фокус, проверять промежуточные результаты и доводить до рабочей версии.',
  },
  {
    id: 'result',
    name: 'Result',
    index: '05',
    description:
      'Проверка результата и анализ работы: что получилось, что стоит изменить и что перенести в следующий цикл.',
  },
]

export function ProfileChain() {
  const [activeId, setActiveId] = useState(stages[0].id)
  const active = stages.find((stage) => stage.id === activeId) ?? stages[0]

  return (
    <section className="panel mt-5 overflow-hidden lg:mt-6" aria-labelledby="pipeline-heading">
      <div className="flex flex-col gap-3 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="mono-label">Thinking pipeline</p>
          <h2 id="pipeline-heading" className="mt-1 font-display text-lg font-semibold tracking-[-0.02em]">
            От технологии к результату
          </h2>
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#68809f]">
          Interactive / 05 stages
        </p>
      </div>

      <div className="px-5 py-6 sm:px-6">
        <div className="hidden items-center md:flex" role="tablist" aria-label="Этапы мышления">
          {stages.map((stage, index) => {
            const isActive = stage.id === activeId
            return (
              <div key={stage.id} className="flex min-w-0 flex-1 items-center">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="pipeline-detail"
                  onClick={() => setActiveId(stage.id)}
                  className={cn(
                    'group flex min-h-[54px] min-w-0 flex-1 flex-col justify-center border px-3 py-2 text-left transition-all',
                    isActive
                      ? 'border-accent/60 bg-accent/10'
                      : 'border-line bg-base/25 hover:border-[#3c5574] hover:bg-panel-2/45',
                  )}
                >
                  <span className={cn('font-mono text-[9px] tracking-[0.12em]', isActive ? 'text-accent' : 'text-[#5c7392]')}>
                    {stage.index}
                  </span>
                  <span className={cn('mt-0.5 truncate text-[12px] font-medium', isActive ? 'text-ink' : 'text-[#a8b6c8]')}>
                    {stage.name}
                  </span>
                </button>
                {index < stages.length - 1 ? (
                  <ArrowRight size={13} className="mx-1.5 flex-none text-[#3d5573]" aria-hidden="true" />
                ) : null}
              </div>
            )
          })}
        </div>

        <div className="grid gap-2 md:hidden" role="tablist" aria-label="Этапы мышления">
          {stages.map((stage) => {
            const isActive = stage.id === activeId
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(stage.id)}
                className={cn(
                  'flex min-h-[46px] items-center gap-3 border px-3 text-left transition-colors',
                  isActive ? 'border-accent/60 bg-accent/10' : 'border-line bg-base/25',
                )}
              >
                <span className={cn('font-mono text-[9px]', isActive ? 'text-accent' : 'text-[#5c7392]')}>{stage.index}</span>
                <span className="text-[12px] font-medium text-[#c7d1df]">{stage.name}</span>
                <ArrowRight size={12} className="ml-auto text-[#506986]" aria-hidden="true" />
              </button>
            )
          })}
        </div>

        <div
          id="pipeline-detail"
          role="tabpanel"
          className="mt-5 grid gap-4 border border-line bg-base/30 p-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start sm:gap-6 sm:p-5"
        >
          <div className="flex items-baseline gap-2 sm:block">
            <span className="font-display text-4xl font-bold leading-none tracking-[-0.05em] text-accent">{active.index}</span>
            <span className="mono-label-sm block sm:mt-2">{active.name}</span>
          </div>
          <p className="max-w-3xl text-pretty text-[13px] leading-relaxed text-[#bcc9da]">{active.description}</p>
        </div>
      </div>
    </section>
  )
}

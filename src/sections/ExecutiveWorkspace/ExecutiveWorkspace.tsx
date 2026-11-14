import { useState } from 'react'
import { ArrowRight, Bot, Check, ChevronRight, FileText, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { PageFooterNav } from '@/components/ui/PageFooterNav'
import { SectionHeader } from '@/components/ui/SectionHeader'
import {
  aiMessages,
  aiTools,
  aiWorkflow,
  documentationTools,
  planningSteps,
  skillGroups,
  type SkillTool,
} from '@/data/skills'
import { cn } from '@/utils/cn'

function ToolDetail({ tool, category }: { tool: SkillTool; category: string }) {
  return (
    <div className="mt-4 flex flex-col gap-4 border border-accent/25 bg-accent/5 p-4 sm:flex-row sm:items-center sm:gap-5">
      <span className="flex h-12 w-12 flex-none items-center justify-center border border-accent/35 bg-base/45 font-mono text-[12px] font-medium text-accent">
        {tool.mark}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink">{tool.name}</p>
          <span className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#6f86a3]">{category}</span>
        </div>
        <p className="mt-1 text-[11.5px] leading-relaxed text-[#bdccdd]">{tool.description}</p>
      </div>
      <div className="sm:w-64 sm:border-l sm:border-line sm:pl-4">
        <p className="mono-label-sm">Context</p>
        <p className="mt-1 text-[10.5px] leading-relaxed text-[#91a5bd]">{tool.context}</p>
      </div>
    </div>
  )
}

export function ExecutiveWorkspace() {
  const [selected, setSelected] = useState<{ tool: SkillTool; category: string }>({
    tool: skillGroups[0].tools[1],
    category: skillGroups[0].title,
  })

  return (
    <div className="page-shell page-top">
      <SectionHeader
        index="06"
        label="Executive Workspace"
        title={
          <>
            EXECUTIVE
            <br />
            <span className="text-[#91a5bf]">WORKSPACE.</span>
          </>
        }
        lead="Техническая база, инструменты и организация собственной работы — без фиктивных шкал владения и придуманных достижений."
        meta={
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">Technical stack</Badge>
            <Badge>AI workflow</Badge>
            <Badge>Documentation</Badge>
          </div>
        }
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6">
        <section className="panel flex flex-col overflow-hidden" aria-labelledby="planning-heading">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <FileText size={15} className="text-accent" aria-hidden="true" />
              <p className="mono-label">Planning</p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#5f7695]">05 steps</span>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h2 id="planning-heading" className="font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-ink sm:text-2xl">
              Сначала структура, затем скорость.
            </h2>
            <p className="mt-3 max-w-xl text-[12.5px] leading-relaxed text-[#aebdd0]">
              Структурирование задач, декомпозиция сложной работы на отдельные этапы, определение приоритетов и
              формирование понятного плана реализации.
            </p>

            <ol className="mt-6 space-y-2">
              {planningSteps.map((step) => (
                <li key={step.index} className="group flex items-center gap-3 border border-line/80 bg-base/25 px-3 py-2.5 transition-colors hover:border-[#3c5574] hover:bg-panel-2/40">
                  <span className="font-mono text-[9px] text-accent">{step.index}</span>
                  <span className="w-[90px] flex-none text-[11px] font-medium uppercase tracking-[0.04em] text-[#c4d0de]">
                    {step.name}
                  </span>
                  <span className="hidden flex-1 text-[10.5px] text-[#7f93ad] sm:block">{step.text}</span>
                  <ChevronRight size={12} className="ml-auto flex-none text-[#4d6583] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </li>
              ))}
            </ol>

            <div className="mt-auto flex items-start gap-2 border-t border-line pt-4">
              <Check size={13} className="mt-0.5 flex-none text-teal" aria-hidden="true" />
              <p className="text-[10.5px] leading-relaxed text-[#647b99]">
                Jira и другие системы управления проектами не указаны как освоенные инструменты без подтверждённого
                практического контекста.
              </p>
            </div>
          </div>
        </section>

        <section className="panel flex flex-col overflow-hidden" aria-labelledby="ai-heading">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <Bot size={15} className="text-teal" aria-hidden="true" />
              <p className="mono-label">AI workspace</p>
            </div>
            <Badge variant="warning">Demo transcript</Badge>
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h2 id="ai-heading" className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">
              AI как рабочий инструмент
            </h2>
            <p className="mt-2 text-[11.5px] leading-relaxed text-[#9fb0c4]">
              Использую AI для анализа, прототипирования, помощи в разработке и проверки результата. Не подключаю
              платные сервисы и не выдаю сгенерированный ответ за готовое решение.
            </p>

            <div className="mt-4 overflow-hidden border border-line bg-[#0a111d]">
              <div className="flex items-center justify-between border-b border-line px-3 py-2">
                <span className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#6f86a3]">Workspace / example session</span>
                <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.1em] text-[#647b99]">
                  <span className="h-1 w-1 rounded-full bg-warning" aria-hidden="true" />
                  Offline demo
                </span>
              </div>
              <div className="max-h-[260px] space-y-0 overflow-y-auto">
                {aiMessages.map((message, index) => (
                  <div
                    key={`${message.label}-${index}`}
                    className={cn(
                      'border-b border-line/60 px-3 py-2.5 last:border-b-0',
                      message.role === 'ai' ? 'bg-panel/35' : 'bg-transparent',
                    )}
                  >
                    <p
                      className={cn(
                        'font-mono text-[8px] uppercase tracking-[0.12em]',
                        message.role === 'ai' ? 'text-teal' : 'text-[#8fb6ff]',
                      )}
                    >
                      {message.label}
                    </p>
                    <p className="mt-1 text-[10.5px] leading-relaxed text-[#b7c6d8]">{message.text}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-line px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] text-[#526986]">
                Не является чат-ботом · демонстрация процесса
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3">
              {aiTools.map((tool) => (
                <div key={tool.name} className="border border-line/80 bg-base/25 p-2.5">
                  <span className="font-mono text-[9px] font-medium text-teal">{tool.mark}</span>
                  <p className="mt-1 text-[10.5px] font-medium text-[#c1cedd]">{tool.name}</p>
                  <p className="mt-1 text-[9px] leading-snug text-[#6f84a1]">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="panel mt-5 overflow-hidden lg:mt-6" aria-labelledby="stack-heading">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
          <div>
            <p className="mono-label">Technical stack</p>
            <h2 id="stack-heading" className="mt-1 font-display text-xl font-semibold tracking-[-0.03em]">
              Инструменты по категориям
            </h2>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#5f7695]">Select a tool / read context</p>
        </div>

        <div className="p-5 sm:p-6">
          <div className="grid gap-3 lg:grid-cols-12">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                className={cn(
                  'border border-line bg-base/20 p-3.5',
                  group.id === 'programming' && 'lg:col-span-5',
                  group.id === 'data' && 'lg:col-span-2',
                  group.id === 'game' && 'lg:col-span-2',
                  group.id === 'devtools' && 'lg:col-span-3',
                )}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <p className="mono-label-sm">{group.title}</p>
                  <span className="font-mono text-[8px] text-[#526986]">{String(group.tools.length).padStart(2, '0')}</span>
                </div>
                <p className="mt-1 text-[9.5px] leading-snug text-[#627997]">{group.caption}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.tools.map((tool) => {
                    const isSelected = selected.tool.name === tool.name
                    return (
                      <button
                        key={tool.name}
                        type="button"
                        onClick={() => setSelected({ tool, category: group.title })}
                        aria-pressed={isSelected}
                        title={tool.name}
                        className={cn(
                          'flex h-10 min-w-10 items-center justify-center border px-2 font-mono text-[9px] font-medium transition-colors',
                          isSelected
                            ? 'border-accent/60 bg-accent/12 text-[#b9d3ff]'
                            : 'border-line bg-panel/35 text-[#9fb1c7] hover:border-[#3d5878] hover:text-ink',
                        )}
                      >
                        {tool.mark}
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <ToolDetail tool={selected.tool} category={selected.category} />

          <div className="mt-3 flex items-start gap-2">
            <Sparkles size={12} className="mt-0.5 flex-none text-[#627b9b]" aria-hidden="true" />
            <p className="text-[10px] leading-relaxed text-[#5f7695]">
              Уровень владения не показан в процентах или шкалах: ниже указан только фактический контекст использования.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-6">
        <section className="panel overflow-hidden" aria-labelledby="documentation-heading">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
            <div>
              <p className="mono-label">Documentation & analytics</p>
              <h2 id="documentation-heading" className="mt-1 font-display text-lg font-semibold tracking-[-0.02em]">
                Документы и аналитика
              </h2>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#5f7695]">05 tools</span>
          </div>
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {documentationTools.map((tool) => (
              <div key={tool.name} className="group bg-panel/65 p-4 transition-colors hover:bg-panel-2/55">
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-8 w-8 items-center justify-center border border-line bg-base/45 font-mono text-[9px] text-[#b8c7d8]">
                    {tool.mark}
                  </span>
                  <ArrowRight size={12} className="text-[#4f6684] transition-transform group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true" />
                </div>
                <p className="mt-3 text-[11.5px] font-medium text-[#c6d2e0]">{tool.name}</p>
                <p className="mt-1 text-[10px] leading-snug text-[#7d91aa]">{tool.description}</p>
                <p className="mt-2 border-t border-line/60 pt-2 text-[9px] leading-snug text-[#5f7695]">{tool.context}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="panel p-5 sm:p-6" aria-labelledby="ai-process-heading">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="mono-label">AI process</p>
              <h2 id="ai-process-heading" className="mt-1 font-display text-lg font-semibold tracking-[-0.02em]">
                Рабочий цикл с AI
              </h2>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#5f7695]">06 steps</span>
          </div>
          <ol className="mt-4 space-y-2">
            {aiWorkflow.map((step) => (
              <li key={step.index} className="flex items-center gap-3 border-b border-line/60 pb-2 last:border-b-0 last:pb-0">
                <span className="flex h-6 w-6 flex-none items-center justify-center border border-line font-mono text-[8px] text-teal">
                  {step.index}
                </span>
                <span className="text-[11px] text-[#b7c5d6]">{step.name}</span>
                <Check size={11} className="ml-auto flex-none text-[#3f7f74]" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <p className="mt-4 border-t border-line pt-3 text-[10px] leading-relaxed text-[#647b99]">
            Проверка результата — обязательный этап. AI не заменяет понимание задачи и ответственность за решение.
          </p>
        </section>
      </div>

      <PageFooterNav />
    </div>
  )
}

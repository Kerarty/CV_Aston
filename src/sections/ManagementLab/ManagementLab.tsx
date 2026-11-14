import { useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  RotateCcw,
  Sparkles,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { PageFooterNav } from '@/components/ui/PageFooterNav'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { decisionPrinciples, scenarios } from '@/data/scenarios'
import { cn } from '@/utils/cn'

export function ManagementLab() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showSummary, setShowSummary] = useState(false)

  const active = scenarios[activeIndex]
  const selectedId = answers[active.id]
  const selected = active.options.find((option) => option.id === selectedId)
  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === scenarios.length

  const choose = (optionId: string) => {
    setAnswers((current) => ({ ...current, [active.id]: optionId }))
  }

  const resetCurrent = () => {
    setAnswers((current) => {
      const next = { ...current }
      delete next[active.id]
      return next
    })
  }

  const restartAll = () => {
    setAnswers({})
    setActiveIndex(0)
    setShowSummary(false)
  }

  const next = () => {
    if (activeIndex < scenarios.length - 1) {
      setActiveIndex((index) => index + 1)
    } else if (allAnswered) {
      setShowSummary(true)
    }
  }

  return (
    <div className="page-shell page-top">
      <SectionHeader
        index="05"
        label="Management Lab"
        title={
          <>
            DECISION
            <br />
            <span className="text-[#91a5bf]">MAKING LAB.</span>
          </>
        }
        lead="Небольшая образовательная симуляция: три управленческие ситуации и выбор подхода к каждой из них."
        meta={
          <div className="flex flex-wrap gap-2">
            <Badge variant="warning">Educational simulation</Badge>
            <Badge variant="muted">No score · no rating</Badge>
            <Badge variant="accent">03 scenarios</Badge>
          </div>
        }
      />

      {showSummary ? (
        <section className="panel overflow-hidden" aria-labelledby="lab-summary-heading">
          <div className="grid lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <div className="relative overflow-hidden border-b border-line p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-teal/8 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-teal" aria-hidden="true" />
                  <p className="mono-label">Simulation summary</p>
                </div>
                <h2
                  id="lab-summary-heading"
                  className="mt-6 font-display text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[0.95] tracking-[-0.05em]"
                >
                  DECISION
                  <br />
                  PRINCIPLES.
                </h2>
                <p className="mt-5 max-w-md text-pretty text-[13px] leading-relaxed text-[#c0ccda]">
                  Симуляция не оценивает компетенции и не присваивает рейтинг. Её задача — показать, как я
                  структурирую управленческие ситуации и какие принципы считаю важными.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="teal">03 / 03 explored</Badge>
                  <Badge variant="muted">Reflection only</Badge>
                </div>
                <Button variant="primary" onClick={restartAll} className="mt-7">
                  <RotateCcw size={14} aria-hidden="true" />
                  Пройти заново
                </Button>
              </div>
            </div>

            <div className="p-5 sm:p-6 lg:p-8">
              <ol className="divide-y divide-line">
                {decisionPrinciples.map((principle) => (
                  <li key={principle.index} className="grid grid-cols-[32px_minmax(0,1fr)] gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="font-mono text-[10px] text-accent">{principle.index}</span>
                    <div>
                      <p className="font-display text-[15px] font-semibold tracking-[-0.01em] text-ink">{principle.title}</p>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-[#9fb0c5]">{principle.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 border-t border-line pt-4 text-[10.5px] leading-relaxed text-[#6e86a5]">
                Это демонстрационная образовательная симуляция, а не оценка реальных управленческих компетенций.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-6">
          <aside className="panel flex flex-col overflow-hidden" aria-labelledby="scenario-index-heading">
            <div className="border-b border-line px-5 py-4">
              <div className="flex items-center justify-between gap-3">
                <p className="mono-label">Scenario index</p>
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#68809f]">{answeredCount} / 03</span>
              </div>
              <h2 id="scenario-index-heading" className="mt-1 font-display text-lg font-semibold tracking-[-0.02em]">
                Ситуации
              </h2>
            </div>

            <div className="flex-1 p-2 sm:p-3">
              <ul className="space-y-1.5">
                {scenarios.map((scenario, index) => {
                  const isActive = activeIndex === index
                  const isAnswered = Boolean(answers[scenario.id])
                  return (
                    <li key={scenario.id}>
                      <button
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-pressed={isActive}
                        className={cn(
                          'flex w-full items-center gap-3 border p-3 text-left transition-colors',
                          isActive ? 'border-accent/45 bg-accent/7' : 'border-transparent hover:border-line hover:bg-panel-2/40',
                        )}
                      >
                        <span
                          className={cn(
                            'flex h-7 w-7 flex-none items-center justify-center border font-mono text-[9px]',
                            isAnswered
                              ? 'border-teal/40 bg-teal/10 text-teal'
                              : isActive
                                ? 'border-accent/45 bg-accent/10 text-accent'
                                : 'border-line text-[#5c7392]',
                          )}
                        >
                          {isAnswered ? <Check size={12} aria-hidden="true" /> : scenario.index}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={cn('block truncate text-[12px] font-medium', isActive ? 'text-ink' : 'text-[#b4c2d4]')}>
                            {scenario.title}
                          </span>
                          <span className="mt-0.5 block truncate text-[10px] text-[#6e86a5]">{scenario.ru}</span>
                        </span>
                        <ChevronRight size={13} className={cn('flex-none', isActive ? 'text-accent' : 'text-[#4f6684]')} aria-hidden="true" />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="border-t border-line p-3">
              <button
                type="button"
                onClick={() => setShowSummary(true)}
                disabled={!allAnswered}
                className={cn(
                  'flex min-h-[44px] w-full items-center gap-3 border px-3 text-left transition-colors',
                  allAnswered
                    ? 'border-teal/35 bg-teal/8 text-[#9de8de] hover:bg-teal/12'
                    : 'cursor-not-allowed border-line text-[#647e9e] opacity-55',
                )}
              >
                <span className="font-mono text-[9px]">04</span>
                <span className="flex-1 text-[11px] font-medium">Итог симуляции</span>
                <ArrowRight size={13} aria-hidden="true" />
              </button>
              <p className="mt-3 px-1 text-[10px] leading-relaxed text-[#68809f]">
                Сценарии можно проходить в любом порядке. Ответ можно изменить до перехода к итогу.
              </p>
            </div>
          </aside>

          <section className="panel overflow-hidden" aria-labelledby="active-scenario-heading">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line px-5 py-5 sm:px-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-accent">{active.index}</span>
                  <p className="mono-label">Scenario / {active.ru}</p>
                </div>
                <h2
                  id="active-scenario-heading"
                  className="mt-3 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-bold leading-[1.02] tracking-[-0.04em]"
                >
                  {active.title}
                </h2>
              </div>
              <span className="border border-line bg-base/35 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                Decision {active.index} / 03
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <p className="max-w-3xl text-pretty text-[14px] leading-relaxed text-[#d1dae6] sm:text-[15px]">
                {active.situation}
              </p>

              <div className="mt-4 flex items-start gap-2.5 border border-line bg-base/30 p-3.5">
                <CircleAlert size={14} className="mt-0.5 flex-none text-warning" aria-hidden="true" />
                <div>
                  <p className="mono-label-sm">Context</p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-[#aab9cc]">{active.context}</p>
                </div>
              </div>

              <fieldset className="mt-6">
                <legend className="mono-label mb-3">Choose an approach</legend>
                <div className="space-y-2">
                  {active.options.map((option) => {
                    const isSelected = selectedId === option.id
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => choose(option.id)}
                        aria-pressed={isSelected}
                        className={cn(
                          'group flex w-full items-start gap-3 border p-3.5 text-left transition-all sm:gap-4 sm:p-4',
                          isSelected
                            ? 'border-accent/55 bg-accent/8'
                            : 'border-line bg-base/20 hover:border-[#3d5878] hover:bg-panel-2/40',
                        )}
                      >
                        <span
                          className={cn(
                            'flex h-7 w-7 flex-none items-center justify-center border font-mono text-[10px]',
                            isSelected ? 'border-accent bg-accent text-[#04101F]' : 'border-[#3c5574] text-[#9eb0c6]',
                          )}
                        >
                          {option.id}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={cn('block text-[12.5px] font-medium', isSelected ? 'text-ink' : 'text-[#c0ccda]')}>
                            {option.title}
                          </span>
                          <span className="mt-1 block text-[11px] leading-relaxed text-[#7f93ad]">{option.summary}</span>
                        </span>
                        <span
                          className={cn(
                            'mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full border',
                            isSelected ? 'border-accent bg-accent' : 'border-[#3c5574]',
                          )}
                          aria-hidden="true"
                        >
                          {isSelected ? <span className="h-1.5 w-1.5 rounded-full bg-[#04101F]" /> : null}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              {selected ? (
                <div className="mt-6 border-t border-line pt-5" aria-live="polite">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center border border-accent/40 bg-accent/10 text-accent">
                      <Check size={12} aria-hidden="true" />
                    </span>
                    <p className="mono-label">Consequences / option {selected.id}</p>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="border border-success/20 bg-success/5 p-3.5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-success">Advantages</p>
                      <p className="mt-2 text-[11.5px] leading-relaxed text-[#b7cbbb]">{selected.advantages}</p>
                    </div>
                    <div className="border border-warning/20 bg-warning/5 p-3.5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-warning">Risks</p>
                      <p className="mt-2 text-[11.5px] leading-relaxed text-[#c9bda7]">{selected.risks}</p>
                    </div>
                    <div className="border border-accent/20 bg-accent/5 p-3.5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#8fb6ff]">Next step</p>
                      <p className="mt-2 text-[11.5px] leading-relaxed text-[#b5c7dd]">{selected.nextStep}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <Button
                      variant="secondary"
                      onClick={next}
                      disabled={!selected || (activeIndex === scenarios.length - 1 && !allAnswered)}
                    >
                      {activeIndex < scenarios.length - 1 ? 'Next scenario' : allAnswered ? 'View summary' : 'Answer all scenarios'}
                      <ArrowRight size={13} aria-hidden="true" />
                    </Button>
                    <Button variant="ghost" onClick={resetCurrent}>
                      <RotateCcw size={13} aria-hidden="true" />
                      Restart scenario
                    </Button>
                    {allAnswered && activeIndex < scenarios.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => setShowSummary(true)}
                        className="ml-auto font-mono text-[9px] uppercase tracking-[0.12em] text-teal underline-offset-4 hover:underline"
                      >
                        Open summary
                      </button>
                    ) : null}
                  </div>
                </div>
              ) : (
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
                  <p className="text-[11px] text-[#6e86a5]">Выберите один из подходов, чтобы увидеть разбор последствий.</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#647e9e]">
                    {answeredCount} / 03 answered
                  </span>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      <PageFooterNav />
    </div>
  )
}

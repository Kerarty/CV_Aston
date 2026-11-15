import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  Handshake,
  Settings2,
  Target,
  Users,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/Badge'
import { PageFooterNav } from '@/components/ui/PageFooterNav'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { getAstonDirections, getAstonNote, type AstonDirectionId } from '@/data/astonDirections'
import { useLang } from '@/i18n/language'
import { cn } from '@/utils/cn'

const icons = {
  delivery: Workflow,
  operations: Settings2,
  sales: Handshake,
  people: Users,
}

export function AstonIntegration() {
  const { lang, t } = useLang()
  const astonDirections = getAstonDirections(lang)
  const astonNote = getAstonNote(lang)
  const [activeId, setActiveId] = useState<AstonDirectionId | null>('delivery')

  return (
    <div className="page-shell page-top">
      <SectionHeader
        index="07"
        label="ASTON Integration"
        title={
          <>
            FIND YOUR PATH
            <br />
            <span className="text-[#91a5bf]">IN ASTON.</span>
          </>
        }
        lead={t(
          'Четыре направления. Разные задачи. Общая цель — развитие бизнеса и реализация эффективных IT-решений.',
          'Four directions. Different tasks. One goal — growing the business and delivering effective IT solutions.',
        )}
        meta={
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">Delivery</Badge>
            <Badge variant="accent">Operations</Badge>
            <Badge>Sales & Marketing</Badge>
            <Badge>People</Badge>
          </div>
        }
      />

      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <div className="space-y-3 lg:col-span-8" role="list" aria-label={t('Направления программы ASTON', 'ASTON programme directions')}>
          {astonDirections.map((direction) => {
            const Icon = icons[direction.id]
            const isOpen = activeId === direction.id
            return (
              <article
                key={direction.id}
                role="listitem"
                className={cn(
                  'overflow-hidden border transition-colors',
                  isOpen ? 'border-accent/40 bg-panel/65' : 'border-line bg-panel/25 hover:border-[#3c5574]',
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveId(isOpen ? null : direction.id)}
                  aria-expanded={isOpen}
                  aria-controls={`direction-${direction.id}`}
                  className="grid w-full grid-cols-[32px_44px_minmax(0,1fr)_auto] items-center gap-3 p-4 text-left sm:gap-4 sm:p-5"
                >
                  <span className={cn('font-mono text-[10px]', isOpen ? 'text-accent' : 'text-[#5c7392]')}>
                    {direction.index}
                  </span>
                  <span
                    className={cn(
                      'flex h-10 w-10 items-center justify-center border',
                      isOpen ? 'border-accent/45 bg-accent/10 text-accent' : 'border-line text-[#7890ad]',
                    )}
                  >
                    <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[17px] font-semibold tracking-[-0.02em] text-ink sm:text-xl">
                      {direction.name}
                    </span>
                    <span className="mt-0.5 hidden truncate text-[10.5px] text-[#7f93ad] sm:block">{direction.ru}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        'hidden border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] sm:block',
                        direction.status === 'primary'
                          ? 'border-teal/30 bg-teal/8 text-[#8fe4d9]'
                          : 'border-line text-[#7f93ad]',
                      )}
                    >
                      {direction.statusLabel}
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn('text-muted transition-transform duration-200', isOpen && 'rotate-180 text-accent')}
                      aria-hidden="true"
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`direction-${direction.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-line px-4 py-5 sm:px-5 sm:pl-[5.5rem]">
                        <p className="max-w-2xl text-[12.5px] leading-relaxed text-[#b8c6d7]">{direction.description}</p>

                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className="mono-label-sm">{direction.interestsLabel}</p>
                            <ul className="mt-2 space-y-1.5">
                              {direction.interests.map((interest) => (
                                <li key={interest} className="flex items-start gap-2 text-[11px] leading-snug text-[#a9b9cb]">
                                  <span className="mt-[6px] h-1 w-1 flex-none bg-accent" aria-hidden="true" />
                                  {interest}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="mono-label-sm">{t('Хочу развивать', 'What I want to develop')}</p>
                            <ul className="mt-2 space-y-1.5">
                              {direction.growth.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-[11px] leading-snug text-[#8fa4bb]">
                                  <ArrowRight size={10} className="mt-[3px] flex-none text-teal" aria-hidden="true" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 border-t border-line pt-3">
                          <Target size={12} className="flex-none text-[#627b9b]" aria-hidden="true" />
                          <p className="text-[10px] leading-relaxed text-[#6e86a5]">
                            {t(
                              'Направление выбрано как область интереса, а не как подтверждённая специализация.',
                              'The direction is chosen as an area of interest, not a confirmed specialization.',
                            )}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            )
          })}
        </div>

        <aside className="lg:col-span-4">
          <div className="panel flex h-full flex-col overflow-hidden">
            <div className="border-b border-line px-5 py-4">
              <p className="mono-label">Application focus</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#68809f]">02 primary / 02 open</p>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border border-teal/35 bg-teal/8 text-teal">
                  <Target size={16} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold tracking-[-0.02em]">Delivery + Operations</p>
                  <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#68809f]">Initial focus</p>
                </div>
              </div>

              <p className="mt-5 text-pretty text-[12.5px] leading-relaxed text-[#b9c7d8]">{astonNote}</p>

              <div className="mt-5 grid grid-cols-2 gap-px border border-line bg-line">
                <div className="bg-panel/70 p-3">
                  <p className="mono-label-sm">{t('Техническая база', 'Technical foundation')}</p>
                  <p className="mt-1 text-[10.5px] leading-snug text-[#a9b9cb]">
                    {t('Понимание разработки и ограничений', 'Understanding development and its constraints')}
                  </p>
                </div>
                <div className="bg-panel/70 p-3">
                  <p className="mono-label-sm">{t('Организация', 'Organization')}</p>
                  <p className="mt-1 text-[10.5px] leading-snug text-[#a9b9cb]">
                    {t('Опыт координации и коммуникации', 'Experience in coordination and communication')}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6">
                <Link
                  to="/contact"
                  className="group flex items-center justify-between gap-4 border border-accent/40 bg-accent/8 p-4 no-underline transition-colors hover:bg-accent/14"
                >
                  <span>
                    <span className="mono-label-sm block">Next step</span>
                    <span className="mt-1 block text-[12px] font-medium text-ink">
                      {t('Открыть финальный экран', 'Open the final screen')}
                    </span>
                  </span>
                  <ArrowRight size={16} className="text-accent transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <PageFooterNav />
    </div>
  )
}

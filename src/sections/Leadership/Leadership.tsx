import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Minus, Plus, RotateCcw, Users } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { PageFooterNav } from '@/components/ui/PageFooterNav'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { leadershipAreas, leadershipIntro, managementCycle } from '@/data/leadership'
import { cn } from '@/utils/cn'

function LeadershipMap() {
  const nodes = [
    { label: 'COORDINATION', x: 62, y: 68 },
    { label: 'COMMUNICATION', x: 292, y: 42 },
    { label: 'ORGANIZATION', x: 330, y: 196 },
    { label: 'RESPONSIBILITY', x: 58, y: 222 },
  ]

  return (
    <svg viewBox="0 0 440 300" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="lead-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#478CFF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#478CFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="220" cy="150" r="96" fill="url(#lead-core)" />
      <circle cx="220" cy="150" r="112" fill="none" stroke="#27364B" strokeDasharray="2 7" />

      {nodes.map((node) => (
        <line
          key={node.label}
          x1="220"
          y1="150"
          x2={node.x}
          y2={node.y}
          stroke="#35506F"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      ))}

      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy={node.y} r="5" fill="#0D1523" stroke="#32D6C5" strokeWidth="1.2" />
          <circle cx={node.x} cy={node.y} r="1.6" fill="#32D6C5" />
          <text
            x={node.x < 220 ? node.x - 12 : node.x + 12}
            y={node.y + 3}
            textAnchor={node.x < 220 ? 'end' : 'start'}
            fill="#8C9AAF"
            fontSize="7.6"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="0.8"
          >
            {node.label}
          </text>
        </g>
      ))}

      <g>
        <rect x="156" y="126" width="128" height="48" fill="#111B2B" stroke="#478CFF" strokeOpacity="0.55" />
        <text
          x="220"
          y="145"
          textAnchor="middle"
          fill="#F2F5FA"
          fontSize="9.5"
          fontWeight="600"
          fontFamily="Manrope, sans-serif"
          letterSpacing="0.7"
        >
          STUDENT COUNCIL
        </text>
        <text
          x="220"
          y="159"
          textAnchor="middle"
          fill="#478CFF"
          fontSize="6.8"
          fontFamily="JetBrains Mono, monospace"
          letterSpacing="1.2"
        >
          LEAD ROLE
        </text>
      </g>
    </svg>
  )
}

function ManagementCycle() {
  const [activeId, setActiveId] = useState(managementCycle[0].id)
  const active = managementCycle.find((stage) => stage.id === activeId) ?? managementCycle[0]
  const center = 220
  const radius = 152

  return (
    <section className="panel mt-5 overflow-hidden lg:mt-6" aria-labelledby="cycle-heading">
      <div className="flex flex-col gap-3 border-b border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="mono-label">Management cycle</p>
          <h2 id="cycle-heading" className="mt-1 font-display text-lg font-semibold tracking-[-0.02em]">
            Как устроен рабочий цикл
          </h2>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#5f7695]">
          <RotateCcw size={12} aria-hidden="true" />
          Repeating process
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="relative flex items-center justify-center border-b border-line px-3 py-5 lg:border-b-0 lg:border-r">
          <svg viewBox="0 0 440 440" className="w-full max-w-[420px]" aria-hidden="true">
            <circle cx={center} cy={center} r={radius} fill="none" stroke="#27364B" strokeWidth="1" strokeDasharray="3 7" />
            <circle cx={center} cy={center} r={radius - 22} fill="none" stroke="#27364B" strokeWidth="1" strokeOpacity="0.35" />
            <circle cx={center} cy={center} r="62" fill="#0D1523" stroke="#35506F" />
            <text
              x={center}
              y={center - 8}
              textAnchor="middle"
              fill="#5F7695"
              fontSize="7.6"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="1.5"
            >
              ACTIVE STAGE
            </text>
            <text
              x={center}
              y={center + 18}
              textAnchor="middle"
              fill="#F2F5FA"
              fontSize="26"
              fontWeight="700"
              fontFamily="Manrope, sans-serif"
            >
              {active.number}
            </text>
            <text
              x={center}
              y={center + 35}
              textAnchor="middle"
              fill="#478CFF"
              fontSize="7.4"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="1.3"
            >
              {active.title.toUpperCase()}
            </text>

            {managementCycle.map((stage, index) => {
              const angle = (Math.PI * 2 * index) / managementCycle.length - Math.PI / 2
              const x = center + Math.cos(angle) * radius
              const y = center + Math.sin(angle) * radius
              const isActive = stage.id === activeId
              const labelX = center + Math.cos(angle) * (radius + 34)
              const labelY = center + Math.sin(angle) * (radius + 34)

              return (
                <g key={stage.id} className="transition-opacity">
                  <circle
                    cx={x}
                    cy={y}
                    r={isActive ? 18 : 13}
                    fill={isActive ? '#478CFF' : '#111B2B'}
                    stroke={isActive ? '#8FBAFF' : '#3E5878'}
                    strokeWidth="1"
                  />
                  <text
                    x={x}
                    y={y + 3}
                    textAnchor="middle"
                    fill={isActive ? '#04101F' : '#9FAFC3'}
                    fontSize="8.5"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    {stage.number}
                  </text>
                  <text
                    x={labelX}
                    y={labelY + 3}
                    textAnchor="middle"
                    fill={isActive ? '#F2F5FA' : '#7F90A8'}
                    fontSize="8"
                    fontFamily="JetBrains Mono, monospace"
                    letterSpacing="0.9"
                  >
                    {stage.title.toUpperCase()}
                  </text>
                </g>
              )
            })}
          </svg>
        </div>

        <div className="flex flex-col p-5 sm:p-6">
          <div className="min-h-[120px] border-b border-line pb-5">
            <p className="mono-label-sm">
              {active.number} / {active.title}
            </p>
            <p className="mt-3 text-pretty text-[13px] leading-relaxed text-[#c2cddd]">{active.description}</p>
          </div>

          <div className="mt-4 space-y-1" role="tablist" aria-label="Этапы управленческого цикла">
            {managementCycle.map((stage) => {
              const isActive = stage.id === activeId
              return (
                <button
                  key={stage.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(stage.id)}
                  className={cn(
                    'flex min-h-[40px] w-full items-center gap-3 border border-transparent px-2 text-left transition-colors',
                    isActive ? 'border-line bg-panel-2/50 text-ink' : 'text-muted hover:bg-panel-2/35 hover:text-ink',
                  )}
                >
                  <span className={cn('font-mono text-[9px]', isActive ? 'text-accent' : 'text-[#5c7392]')}>{stage.number}</span>
                  <span className="text-[12px] font-medium">{stage.title}</span>
                  <ArrowUpRight
                    size={12}
                    className={cn('ml-auto transition-opacity', isActive ? 'text-accent opacity-100' : 'opacity-0')}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </div>

          <p className="mt-auto pt-5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-[#5f7695]">
            После review цикл возвращается к plan — это не линейная, а повторяющаяся последовательность.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Leadership() {
  const [activeArea, setActiveArea] = useState<string | null>(leadershipAreas[0].id)

  return (
    <div className="page-shell page-top">
      <SectionHeader
        index="03"
        label="Leadership"
        title={
          <>
            LEADERSHIP
            <br />
            <span className="text-[#91a5bf]">IN PRACTICE.</span>
          </>
        }
        lead="Опыт руководства факультетским студенческим советом — практика организации совместной работы, коммуникации и ответственности за согласованные действия."
        meta={
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">Faculty Student Council</Badge>
            <Badge>Coordination</Badge>
            <Badge>Communication</Badge>
            <Badge>Responsibility</Badge>
          </div>
        }
      />

      <section className="panel overflow-hidden" aria-labelledby="leadership-case-heading">
        <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
          <div className="relative p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center border border-accent/40 bg-accent/10 text-accent">
                <Users size={14} aria-hidden="true" />
              </span>
              <p className="mono-label">Leadership case / 01</p>
            </div>

            <h2
              id="leadership-case-heading"
              className="mt-6 font-display text-[clamp(1.9rem,3.6vw,3.1rem)] font-bold leading-[0.95] tracking-[-0.05em]"
            >
              FACULTY
              <br />
              STUDENT COUNCIL
            </h2>

            <p className="mt-4 inline-flex border border-teal/30 bg-teal/8 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#7fe7dc]">
              {leadershipIntro.role}
            </p>

            <p className="mt-6 max-w-2xl text-pretty text-[13.5px] leading-relaxed text-[#c2cddd] sm:text-[14.5px]">
              {leadershipIntro.text}
            </p>

            <div className="mt-7 grid gap-px border border-line bg-line sm:grid-cols-3">
              {[
                ['Focus', 'Организация работы'],
                ['Mode', 'Координация участников'],
                ['Outcome', 'Согласованные действия'],
              ].map(([label, value]) => (
                <div key={label} className="bg-panel/70 p-3">
                  <p className="mono-label-sm">{label}</p>
                  <p className="mt-1.5 text-[11.5px] leading-snug text-[#c7d1df]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center border-t border-line bg-base/25 p-4 lg:border-l lg:border-t-0">
            <div className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#5f7695]">
              Coordination map
            </div>
            <LeadershipMap />
            <div className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.14em] text-[#5f7695]">
              04 areas / 01 lead
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 lg:mt-6" aria-labelledby="areas-heading">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="mono-label">Experience areas</p>
            <h2 id="areas-heading" className="mt-1 font-display text-xl font-semibold tracking-[-0.03em]">
              Четыре направления опыта
            </h2>
          </div>
          <p className="hidden font-mono text-[9px] uppercase tracking-[0.14em] text-[#5f7695] sm:block">
            Select to expand
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {leadershipAreas.map((area) => {
            const isOpen = activeArea === area.id
            return (
              <article
                key={area.id}
                className={cn(
                  'border transition-colors',
                  isOpen ? 'border-accent/45 bg-panel/65' : 'border-line bg-panel/30 hover:border-[#3c5574]',
                )}
              >
                <button
                  type="button"
                  onClick={() => setActiveArea(isOpen ? null : area.id)}
                  aria-expanded={isOpen}
                  aria-controls={`area-${area.id}`}
                  className="flex min-h-[120px] w-full items-start gap-4 p-5 text-left"
                >
                  <span className={cn('mt-0.5 font-mono text-[10px]', isOpen ? 'text-accent' : 'text-[#5c7392]')}>
                    {String(leadershipAreas.indexOf(area) + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-semibold uppercase tracking-[-0.02em]">{area.title}</span>
                    <span className="mt-2 block text-[11.5px] leading-relaxed text-muted">{area.short}</span>
                  </span>
                  <span className={cn('flex h-7 w-7 flex-none items-center justify-center border', isOpen ? 'border-accent/50 text-accent' : 'border-line text-muted')}>
                    {isOpen ? <Minus size={13} aria-hidden="true" /> : <Plus size={13} aria-hidden="true" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`area-${area.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-line px-5 py-4 pl-[3.4rem] text-pretty text-[12px] leading-relaxed text-[#aebdce]">
                        {area.details}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            )
          })}
        </div>
      </section>

      <ManagementCycle />
      <PageFooterNav />
    </div>
  )
}

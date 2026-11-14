import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { sections } from '@/app/navigation'
import { cn } from '@/utils/cn'

const CENTER = 310
const RADIUS = 214

function polar(index: number, total: number, radius: number) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2
  return {
    x: CENTER + Math.cos(angle) * radius,
    y: CENTER + Math.sin(angle) * radius,
  }
}

export function SystemMap() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = sections.find((section) => section.id === activeId) ?? null

  const nodes = useMemo(
    () =>
      sections.map((section, index) => {
        const position = polar(index, sections.length, RADIUS)
        return { section, index, ...position }
      }),
    [],
  )

  const activate = (id: string) => setActiveId(id)

  return (
    <div className="panel flex min-h-[480px] flex-col overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
          <p className="mono-label">Project map</p>
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#68809f]">08 modules / 01 core</p>
      </div>

      <div className="relative flex flex-1 flex-col justify-center px-3 py-4 sm:px-5">
        <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/30" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-line/20" />
        </div>

        <svg
          viewBox="0 0 620 620"
          className="relative mx-auto hidden w-full max-w-[560px] md:block"
          role="group"
          aria-label="Интерактивная карта восьми разделов PROJECT ZERO"
        >
          <defs>
            <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#478CFF" stopOpacity="0.24" />
              <stop offset="65%" stopColor="#478CFF" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#478CFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={CENTER} cy={CENTER} r="162" fill="url(#core-glow)" />
          <circle cx={CENTER} cy={CENTER} r={RADIUS} fill="none" stroke="#27364B" strokeWidth="1" strokeDasharray="2 8" />
          <circle cx={CENTER} cy={CENTER} r="116" fill="none" stroke="#27364B" strokeWidth="1" strokeOpacity="0.45" />

          <g
            className="orbit-slow"
            style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
            aria-hidden="true"
          >
            <circle
              cx={CENTER}
              cy={CENTER}
              r="138"
              fill="none"
              stroke="#32D6C5"
              strokeOpacity="0.28"
              strokeWidth="1"
              strokeDasharray="18 150"
            />
            <circle cx={CENTER + 138} cy={CENTER} r="2.5" fill="#32D6C5" />
          </g>

          {nodes.map(({ section, x, y }) => {
            const isActive = activeId === section.id || pathname === section.path
            return (
              <line
                key={`line-${section.id}`}
                x1={CENTER}
                y1={CENTER}
                x2={x}
                y2={y}
                stroke={isActive ? '#478CFF' : '#27364B'}
                strokeWidth={isActive ? 1.4 : 1}
                strokeDasharray={isActive ? '0' : '3 6'}
                className="transition-all duration-300"
              />
            )
          })}

          <g>
            <circle cx={CENTER} cy={CENTER} r="54" fill="#0D1523" stroke="#35506F" />
            <circle cx={CENTER} cy={CENTER} r="42" fill="none" stroke="#27364B" strokeDasharray="1 5" />
            <path
              d={`M${CENTER - 15} ${CENTER - 14}h30l-30 28h30`}
              fill="none"
              stroke="#478CFF"
              strokeWidth="2.6"
              strokeLinecap="square"
            />
            <circle cx={CENTER + 15} cy={CENTER - 14} r="2.4" fill="#32D6C5" />
            <text
              x={CENTER}
              y={CENTER + 32}
              textAnchor="middle"
              fill="#8C9AAF"
              fontSize="8"
              fontFamily="JetBrains Mono, monospace"
              letterSpacing="1.6"
            >
              CORE
            </text>
          </g>

          {nodes.map(({ section, x, y, index }) => {
            const isActive = activeId === section.id
            const angle = (Math.PI * 2 * index) / sections.length - Math.PI / 2
            const labelX = x + Math.cos(angle) * 26
            const labelY = y + Math.sin(angle) * 26
            const anchor = Math.cos(angle) > 0.35 ? 'start' : Math.cos(angle) < -0.35 ? 'end' : 'middle'
            const shortLabel = section.label
              .replace('Candidate ', '')
              .replace('Project ', '')
              .replace('3D ', '')
              .replace('Executive ', '')

            return (
              <g
                key={section.id}
                role="button"
                tabIndex={0}
                aria-label={`${section.number}. ${section.label} — ${section.ru}`}
                className="cursor-pointer"
                onMouseEnter={() => activate(section.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => activate(section.id)}
                onBlur={() => setActiveId(null)}
                onClick={() => navigate(section.path)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    navigate(section.path)
                  }
                }}
              >
                <circle cx={x} cy={y} r="26" fill="transparent" />
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 18 : 14}
                  fill={isActive ? '#478CFF' : '#0D1523'}
                  stroke={isActive ? '#8FBAFF' : '#3E5878'}
                  strokeWidth="1"
                  className="transition-all duration-200"
                />
                <text
                  x={x}
                  y={y + 3.2}
                  textAnchor="middle"
                  fill={isActive ? '#04101F' : '#A9B8CB'}
                  fontSize="9"
                  fontWeight="500"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {section.number}
                </text>
                <text
                  x={labelX}
                  y={labelY + 3}
                  textAnchor={anchor}
                  fill={isActive ? '#F2F5FA' : '#7F90A8'}
                  fontSize="9.2"
                  fontFamily="JetBrains Mono, monospace"
                  letterSpacing="0.7"
                  className="transition-colors duration-200"
                >
                  {shortLabel.toUpperCase()}
                </text>
              </g>
            )
          })}
        </svg>

        <div className="grid grid-cols-2 gap-2 md:hidden">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Link
                key={section.id}
                to={section.path}
                className="group flex min-h-[88px] flex-col justify-between border border-line bg-panel/45 p-3 no-underline transition-colors hover:border-accent/50 hover:bg-panel-2/50"
              >
                <span className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-accent">{section.number}</span>
                  <Icon size={14} className="text-[#607694] transition-colors group-hover:text-accent" aria-hidden="true" />
                </span>
                <span className="mt-2">
                  <span className="block text-[12px] font-medium leading-tight text-ink">{section.label}</span>
                  <span className="mt-0.5 block text-[10px] leading-tight text-muted">{section.ru}</span>
                </span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="mt-auto border-t border-line px-5 py-4 sm:px-6">
        <div className="flex min-h-[48px] items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="mono-label-sm truncate">
              {active ? `${active.number} / ${active.label}` : 'Select a module'}
            </p>
            <p className="mt-1 truncate text-[12px] text-muted">
              {active ? active.description : 'Наведите на узел карты или откройте раздел в меню.'}
            </p>
          </div>
          {active ? (
            <Link
              to={active.path}
              className={cn(
                'flex h-10 w-10 flex-none items-center justify-center border border-accent/45 bg-accent/10 text-accent transition-colors hover:bg-accent hover:text-[#04101F]',
              )}
              aria-label={`Открыть раздел ${active.label}`}
            >
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ) : (
            <span className="hidden h-10 w-10 flex-none items-center justify-center border border-line text-[#526a89] sm:flex">
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

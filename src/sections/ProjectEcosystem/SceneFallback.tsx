import type { KeyboardEvent } from 'react'
import type { EcosystemNodeId } from '@/data/ecosystem'
import { moduleNodes } from '@/data/ecosystem'

const positions: Record<string, { x: number; y: number }> = {
  delivery: { x: 168, y: 104 },
  operations: { x: 432, y: 104 },
  sales: { x: 432, y: 300 },
  people: { x: 168, y: 300 },
}

const shortLabels: Record<string, string> = {
  delivery: 'DELIVERY',
  operations: 'OPERATIONS',
  sales: 'SALES',
  people: 'PEOPLE',
}

type SceneFallbackProps = {
  selected: EcosystemNodeId
  onSelect: (id: EcosystemNodeId) => void
  reason?: string
}

export function SceneFallback({ selected, onSelect, reason }: SceneFallbackProps) {
  const activate = (event: KeyboardEvent<SVGGElement>, id: EcosystemNodeId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect(id)
    }
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#070c15]">
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-3 border-b border-line/60 px-4 py-3">
        <p className="mono-label-sm">Schematic mode / no WebGL</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#5f7695]">2D fallback</p>
      </div>

      <svg viewBox="0 0 600 500" className="h-full w-full" role="group" aria-label="Схема экосистемы PROJECT ZERO">
        <defs>
          <pattern id="fallback-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0H0V30" fill="none" stroke="#27364B" strokeWidth="0.6" opacity="0.35" />
          </pattern>
          <radialGradient id="fallback-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#478CFF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#478CFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="600" height="500" fill="url(#fallback-grid)" />
        <circle cx="300" cy="220" r="190" fill="url(#fallback-glow)" />
        <circle cx="300" cy="220" r="150" fill="none" stroke="#27364B" strokeWidth="1" strokeDasharray="3 8" />
        <circle cx="300" cy="220" r="96" fill="none" stroke="#27364B" strokeWidth="1" strokeOpacity="0.45" />

        {moduleNodes.map((node) => {
          const point = positions[node.id]
          const isActive = selected === node.id
          return (
            <line
              key={`line-${node.id}`}
              x1="300"
              y1="220"
              x2={point.x}
              y2={point.y}
              stroke={isActive ? '#478CFF' : '#324a68'}
              strokeWidth={isActive ? 1.6 : 1}
              strokeDasharray={isActive ? undefined : '3 6'}
            />
          )
        })}

        <line
          x1="300"
          y1="258"
          x2="300"
          y2="386"
          stroke={selected === 'island' ? '#32D6C5' : '#324a68'}
          strokeWidth={selected === 'island' ? 1.6 : 1}
          strokeDasharray={selected === 'island' ? undefined : '3 6'}
        />

        <g
          role="button"
          tabIndex={0}
          aria-label="Ядро PROJECT ZERO"
          className="cursor-pointer outline-none"
          onClick={() => onSelect('core')}
          onKeyDown={(event) => activate(event, 'core')}
        >
          <circle cx="300" cy="220" r="48" fill="#0D1523" stroke={selected === 'core' ? '#478CFF' : '#3E5878'} strokeWidth="1.4" />
          <circle cx="300" cy="220" r="37" fill="none" stroke="#27364B" strokeDasharray="1 5" />
          <path d="M286 206h28l-28 26h28" fill="none" stroke="#478CFF" strokeWidth="2.6" />
          <circle cx="315" cy="206" r="2.4" fill="#32D6C5" />
          <text
            x="300"
            y="272"
            textAnchor="middle"
            fill="#8C9AAF"
            fontSize="8"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="1.6"
          >
            CORE / PROJECT ZERO
          </text>
        </g>

        {moduleNodes.map((node) => {
          const point = positions[node.id]
          const isActive = selected === node.id
          return (
            <g
              key={node.id}
              role="button"
              tabIndex={0}
              aria-label={`${node.index}. ${node.label} — ${node.ru}`}
              className="cursor-pointer outline-none"
              onClick={() => onSelect(node.id)}
              onKeyDown={(event) => activate(event, node.id)}
            >
              <circle cx={point.x} cy={point.y} r="30" fill="transparent" />
              <circle
                cx={point.x}
                cy={point.y}
                r={isActive ? 17 : 13}
                fill={isActive ? '#478CFF' : '#0D1523'}
                stroke={isActive ? '#8FBAFF' : '#3E5878'}
                strokeWidth="1.1"
              />
              <text
                x={point.x}
                y={point.y + 3.4}
                textAnchor="middle"
                fill={isActive ? '#04101F' : '#A9B8CB'}
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
              >
                {node.index}
              </text>
              <text
                x={point.x}
                y={point.y + 46}
                textAnchor="middle"
                fill={isActive ? '#F2F5FA' : '#7F90A8'}
                fontSize="8.5"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="1"
              >
                {shortLabels[node.id]}
              </text>
            </g>
          )
        })}

        <g
          role="button"
          tabIndex={0}
          aria-label="PORTFOLIO ISLAND — портфолио проектов"
          className="cursor-pointer outline-none"
          onClick={() => onSelect('island')}
          onKeyDown={(event) => activate(event, 'island')}
        >
          <rect
            x="190"
            y="386"
            width="220"
            height="54"
            fill={selected === 'island' ? 'rgba(50,214,197,0.1)' : '#0D1523'}
            stroke={selected === 'island' ? '#32D6C5' : '#3E5878'}
            strokeWidth="1.2"
          />
          <text
            x="300"
            y="409"
            textAnchor="middle"
            fill={selected === 'island' ? '#F2F5FA' : '#A9B8CB'}
            fontSize="9"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="1.6"
          >
            PORTFOLIO ISLAND
          </text>
          <text
            x="300"
            y="425"
            textAnchor="middle"
            fill="#6F86A3"
            fontSize="7.5"
            fontFamily="JetBrains Mono, monospace"
            letterSpacing="1"
          >
            FACTORY · RUNNER · TECHNICAL PROJECTS
          </text>
        </g>
      </svg>

      <p className="absolute inset-x-0 bottom-0 z-10 border-t border-line/60 px-4 py-3 text-center text-[10.5px] leading-relaxed text-[#647b99]">
        {reason ?? 'WebGL недоступен на этом устройстве. Схема сохраняет навигацию и содержание раздела.'}
      </p>
    </div>
  )
}

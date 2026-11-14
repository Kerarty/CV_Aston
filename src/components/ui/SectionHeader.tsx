import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type SectionHeaderProps = {
  index: string
  label: string
  title: ReactNode
  lead?: ReactNode
  meta?: ReactNode
  className?: string
}

export function SectionHeader({ index, label, title, lead, meta, className }: SectionHeaderProps) {
  return (
    <header className={cn('mb-10 lg:mb-14', className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[11px] font-medium tracking-[0.16em] text-accent">{index}</span>
        <span className="font-mono text-[11px] text-line">/</span>
        <span className="mono-label">{label}</span>
        <span className="ml-2 h-px flex-1 bg-line" aria-hidden="true" />
      </div>

      <div className="mt-6 grid gap-5 lg:mt-7 lg:grid-cols-[minmax(0,1fr)_minmax(240px,340px)] lg:items-end lg:gap-12">
        <h1 className="display-title max-w-4xl text-[clamp(2rem,4.2vw,4rem)]">{title}</h1>
        {lead ? <p className="max-w-md text-pretty text-[14px] leading-relaxed text-muted lg:justify-self-end lg:text-[15px]">{lead}</p> : null}
      </div>

      {meta ? <div className="mt-7">{meta}</div> : null}
    </header>
  )
}

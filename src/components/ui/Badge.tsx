import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type BadgeVariant = 'accent' | 'teal' | 'muted' | 'warning' | 'success'

const styles: Record<BadgeVariant, string> = {
  accent: 'border-accent/35 bg-accent/10 text-[#9cc0ff]',
  teal: 'border-teal/35 bg-teal/10 text-[#7fe7dc]',
  muted: 'border-line bg-panel-2/55 text-muted',
  warning: 'border-warning/35 bg-warning/10 text-[#f6cf94]',
  success: 'border-success/35 bg-success/10 text-[#7de5c4]',
}

type BadgeProps = {
  children: ReactNode
  variant?: BadgeVariant
  dot?: boolean
  className?: string
}

export function Badge({ children, variant = 'muted', dot = false, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-[2px] border px-2.5 py-1 font-mono text-[10px] font-medium uppercase leading-none tracking-[0.14em]',
        styles[variant],
        className,
      )}
    >
      {dot ? <span className="status-dot h-1.5 w-1.5" aria-hidden="true" /> : null}
      {children}
    </span>
  )
}

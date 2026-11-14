import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { contactSection, getAdjacentSection, sections } from '@/app/navigation'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

type PresentationModeProps = {
  active: boolean
  pathname: string
  onExit: () => void
}

export function PresentationMode({ active, pathname, onExit }: PresentationModeProps) {
  const navigate = useNavigate()
  const current = pathname === contactSection.path ? contactSection : sections.find((s) => s.path === pathname)
  const index = current ? sections.findIndex((s) => s.id === current.id) : -1
  const position = current?.id === contactSection.id ? sections.length + 1 : index + 1
  const total = sections.length + 1

  if (!active) return null

  const go = (direction: -1 | 1) => {
    const next = getAdjacentSection(pathname, direction)
    navigate(next.path)
  }

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-line/40" aria-hidden="true">
        <div
          className="h-full bg-accent shadow-[0_0_10px_rgba(71,140,255,0.8)] transition-[width] duration-500"
          style={{ width: `${(position / total) * 100}%` }}
        />
      </div>

      <div
        className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-[#080d18]/94 px-3 py-3 backdrop-blur-xl sm:bottom-5 sm:left-1/2 sm:right-auto sm:w-auto sm:-translate-x-1/2 sm:border sm:px-3"
        role="region"
        aria-label="Режим презентации"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" onClick={onExit} className="hidden sm:inline-flex" aria-label="Выйти из режима презентации">
            <X size={14} aria-hidden="true" />
            Exit
          </Button>

          <Button variant="secondary" onClick={() => go(-1)} aria-label="Предыдущий раздел" className="w-11 px-0 sm:w-auto sm:px-4">
            <ChevronLeft size={15} aria-hidden="true" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="min-w-0 flex-1 px-2 text-center sm:min-w-[210px]">
            <p className="mono-label-sm truncate">
              {String(position).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </p>
            <p className="truncate text-[11px] font-medium text-ink" aria-live="polite">
              {current?.label ?? 'Command Center'}
            </p>
          </div>

          <Button variant="primary" onClick={() => go(1)} aria-label="Следующий раздел" className="w-11 px-0 sm:w-auto sm:px-4">
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={15} aria-hidden="true" />
          </Button>

          <Button variant="ghost" onClick={onExit} className="sm:hidden" aria-label="Выйти из режима презентации">
            <X size={15} aria-hidden="true" />
          </Button>
        </div>
        <p className={cn('mt-2 hidden text-center font-mono text-[9px] uppercase tracking-[0.14em] text-[#5e7696] sm:block')}>
          ← → navigation · esc exit
        </p>
      </div>
    </>
  )
}

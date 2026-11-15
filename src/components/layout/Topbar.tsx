import { NavLink, useLocation } from 'react-router-dom'
import { Download, Home, Menu, MonitorPlay, X } from 'lucide-react'
import { getSectionByPath } from '@/app/navigation'
import { candidate } from '@/data/candidate'
import { Badge } from '@/components/ui/Badge'
import { useLang, type Lang } from '@/i18n/language'
import { cn } from '@/utils/cn'

function LangSwitch() {
  const { lang, setLang, t } = useLang()

  const options: Array<{ code: Lang; label: string }> = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ]

  return (
    <div
      className="flex h-10 flex-none items-center border border-line font-mono text-[10px] tracking-[0.12em]"
      role="group"
      aria-label={t('Язык интерфейса', 'Interface language')}
    >
      {options.map((option, index) => (
        <button
          key={option.code}
          type="button"
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
          title={option.code === 'ru' ? 'Русский' : 'English'}
          className={cn(
            'h-full px-2.5 uppercase transition-colors',
            index > 0 && 'border-l border-line',
            lang === option.code
              ? 'bg-accent/15 text-accent'
              : 'text-muted hover:text-ink',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

type TopbarProps = {
  onOpenMobile: () => void
  presentation: boolean
  onTogglePresentation: () => void
}

export function Topbar({ onOpenMobile, presentation, onTogglePresentation }: TopbarProps) {
  const { pathname } = useLocation()
  const { t } = useLang()
  const current = getSectionByPath(pathname)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-line bg-[#080d18]/82 px-4 backdrop-blur-xl sm:px-6">
      {!presentation ? (
        <button
          type="button"
          onClick={onOpenMobile}
          className="flex h-10 w-10 flex-none items-center justify-center border border-line text-muted transition-colors hover:border-accent/50 hover:text-ink lg:hidden"
          aria-label={t('Открыть меню', 'Open menu')}
          aria-controls="site-navigation"
        >
          <Menu size={17} aria-hidden="true" />
        </button>
      ) : null}

      <div className="flex min-w-0 items-center gap-2.5">
        <span className="font-mono text-[10px] tracking-[0.14em] text-accent">{current.number}</span>
        <span className="h-3 w-px bg-line" aria-hidden="true" />
        <p className="min-w-0 truncate font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          {current.label}
        </p>
        <span className="hidden truncate text-[11px] text-[#607694] sm:block">/ {current.ru}</span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        {!presentation ? (
          <span className="hidden md:block">
            <Badge variant="teal" dot>
              Project Zero
            </Badge>
          </span>
        ) : (
          <span className="hidden sm:block">
            <Badge variant="accent">Presentation</Badge>
          </span>
        )}

        {candidate.cvUrl ? (
          <a
            href={`${import.meta.env.BASE_URL}${candidate.cvUrl}`}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-10 flex-none items-center gap-2 border border-accent/45 bg-accent/10 px-3 font-mono text-[10px] uppercase tracking-[0.12em] text-accent transition-colors hover:bg-accent/20"
            title={t('Открыть CV в формате PDF', 'Open the CV as a PDF')}
          >
            <Download size={14} aria-hidden="true" />
            <span className="hidden sm:inline">CV</span>
          </a>
        ) : null}

        <LangSwitch />

        {!presentation ? (
          pathname === '/' ? (
            <span
              className="flex h-10 w-10 items-center justify-center border border-line text-muted opacity-35"
              aria-hidden="true"
            >
              <Home size={15} />
            </span>
          ) : (
            <NavLink
              to="/"
              className="flex h-10 w-10 items-center justify-center border border-line text-muted transition-colors hover:border-accent/50 hover:text-ink"
              aria-label={t('На главный экран', 'To the home screen')}
              title={t('На главный экран', 'To the home screen')}
            >
              <Home size={15} aria-hidden="true" />
            </NavLink>
          )
        ) : null}

        <button
          type="button"
          onClick={onTogglePresentation}
          className={cn(
            'flex h-10 items-center gap-2 border px-3 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors',
            presentation
              ? 'border-warning/45 bg-warning/10 text-warning hover:bg-warning/15'
              : 'border-line text-muted hover:border-accent/50 hover:text-ink',
          )}
          aria-pressed={presentation}
        >
          {presentation ? <X size={14} aria-hidden="true" /> : <MonitorPlay size={14} aria-hidden="true" />}
          <span className="hidden sm:inline">{presentation ? 'Exit' : 'Presentation'}</span>
          <span className="sm:hidden">{presentation ? 'Exit' : 'Pres.'}</span>
        </button>
      </div>
    </header>
  )
}

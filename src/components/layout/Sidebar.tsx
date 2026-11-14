import { NavLink } from 'react-router-dom'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
  Github,
  Mail,
  X,
} from 'lucide-react'
import { contactSection, sections } from '@/app/navigation'
import { candidate } from '@/data/candidate'
import { cn } from '@/utils/cn'
import { LogoMark } from '@/components/ui/LogoMark'

type SidebarProps = {
  collapsed: boolean
  mobileOpen: boolean
  onToggleCollapse: () => void
  onCloseMobile: () => void
}

export function Sidebar({ collapsed, mobileOpen, onToggleCollapse, onCloseMobile }: SidebarProps) {
  const compact = collapsed && !mobileOpen

  return (
    <aside
      id="site-navigation"
      aria-label="Основная навигация"
      className={cn(
        'fixed inset-y-0 left-0 z-50 flex flex-col border-r border-line bg-[#080d18]/97 backdrop-blur-lg transition-[width,transform,visibility] duration-200 ease-out',
        compact ? 'w-[84px]' : 'w-[280px]',
        mobileOpen ? 'visible translate-x-0' : 'invisible -translate-x-full lg:visible lg:translate-x-0',
      )}
    >
      <div className="flex h-16 flex-none items-center gap-3 border-b border-line px-4">
        <NavLink to="/" onClick={onCloseMobile} aria-label="PROJECT ZERO — на главную" className="flex min-w-0 items-center gap-3 no-underline">
          <LogoMark size={36} />
          <span className={cn('min-w-0 transition-opacity', compact && 'sr-only')}>
            <span className="block font-display text-[12px] font-bold leading-none tracking-[0.18em] text-ink">
              PROJECT ZERO
            </span>
            <span className="mt-1.5 block truncate font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              {candidate.latinName}
            </span>
          </span>
        </NavLink>

        <button
          type="button"
          onClick={onCloseMobile}
          className="ml-auto flex h-10 w-10 flex-none items-center justify-center border border-line text-muted transition-colors hover:text-ink lg:hidden"
          aria-label="Закрыть меню"
        >
          <X size={17} aria-hidden="true" />
        </button>
      </div>

      <div className={cn('px-4 pb-3 pt-5', compact && 'px-2')}>
        <p className={cn('mono-label-sm', compact && 'sr-only')}>Navigation / 08</p>
        <p className={cn('mt-1 truncate font-mono text-[10px] text-[#5f7593]', compact && 'text-center text-[9px]')}>
          {compact ? '08' : 'ASTON / MANAGEMENT'}
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-3" aria-label="Разделы портфолио">
        <ol className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <li key={section.id}>
                <NavLink
                  to={section.path}
                  end={section.path === '/'}
                  onClick={onCloseMobile}
                  title={compact ? `${section.number} — ${section.label}` : undefined}
                  className={cn(
                    'group relative flex min-h-[48px] items-center gap-3 border-l-2 border-transparent px-3 py-2 no-underline transition-colors',
                    'hover:bg-panel-2/45',
                    compact && 'justify-center px-2',
                  )}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={cn(
                          'w-5 flex-none font-mono text-[10px] tracking-[0.08em] transition-colors',
                          isActive ? 'text-accent' : 'text-[#5c7190] group-hover:text-muted',
                        )}
                      >
                        {section.number}
                      </span>
                      <Icon
                        size={15}
                        strokeWidth={1.7}
                        className={cn(
                          'flex-none transition-colors',
                          isActive ? 'text-accent' : 'text-[#637997] group-hover:text-ink',
                          !compact && 'hidden xl:block',
                        )}
                        aria-hidden="true"
                      />
                      <span className={cn('min-w-0 flex-1', compact && 'sr-only')}>
                        <span
                          className={cn(
                            'block truncate text-[12.5px] font-medium leading-tight transition-colors',
                            isActive ? 'text-ink' : 'text-[#a7b4c7] group-hover:text-ink',
                          )}
                        >
                          {section.label}
                        </span>
                        <span
                          className={cn(
                            'mt-0.5 block truncate text-[10.5px] leading-tight transition-colors',
                            isActive ? 'text-[#8fb6ff]' : 'text-[#667b98]',
                          )}
                        >
                          {section.ru}
                        </span>
                      </span>
                      {isActive ? (
                        <span
                          className="absolute inset-y-2 left-0 w-[2px] bg-accent shadow-[0_0_12px_rgba(71,140,255,0.8)]"
                          aria-hidden="true"
                        />
                      ) : null}
                    </>
                  )}
                </NavLink>
              </li>
            )
          })}
        </ol>
      </nav>

      <div className={cn('flex-none border-t border-line p-3', compact && 'px-2')}>
        <div className={cn('mb-3 border border-line/80 bg-panel/35 p-3', compact && 'hidden')}>
          <p className="mono-label-sm">Application</p>
          <p className="mt-1 text-[11px] leading-relaxed text-[#b7c4d6]">
            ASTON · Программа развития менеджмента
          </p>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#5e7696]">Review copy · 2026</p>
        </div>

        <div className={cn('flex flex-col gap-1.5', compact && 'items-center')}>
          <a
            href={candidate.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              'flex min-h-[42px] items-center gap-2 border border-transparent px-2.5 text-[11px] text-muted no-underline transition-colors hover:border-line hover:bg-panel-2/45 hover:text-ink',
              compact && 'w-11 justify-center px-0',
            )}
            title="GitHub — Kerarty"
          >
            <Github size={15} aria-hidden="true" />
            <span className={cn(compact && 'sr-only')}>GitHub</span>
            <ArrowUpRight size={12} className={cn('ml-auto opacity-60', compact && 'hidden')} aria-hidden="true" />
          </a>

          {candidate.cvUrl ? (
            <a
              href={candidate.cvUrl}
              download
              className={cn(
                'flex min-h-[42px] items-center gap-2 border border-transparent px-2.5 text-[11px] text-muted no-underline transition-colors hover:border-line hover:bg-panel-2/45 hover:text-ink',
                compact && 'w-11 justify-center px-0',
              )}
            >
              <Download size={15} aria-hidden="true" />
              <span className={cn(compact && 'sr-only')}>Скачать CV</span>
            </a>
          ) : null}

          <NavLink
            to={contactSection.path}
            onClick={onCloseMobile}
            title="Перейти к контактам"
            className={cn(
              'btn btn-primary mt-1 w-full',
              compact && 'h-11 w-11 overflow-hidden px-0 text-[0px]',
            )}
          >
            <Mail size={15} aria-hidden="true" />
            <span className={cn(compact && 'sr-only')}>Связаться</span>
          </NavLink>
        </div>

        <button
          type="button"
          onClick={onToggleCollapse}
          className={cn(
            'mt-3 hidden min-h-[38px] w-full items-center gap-2 border-t border-line pt-3 text-left font-mono text-[9px] uppercase tracking-[0.14em] text-[#637b99] transition-colors hover:text-ink lg:flex',
            compact && 'justify-center',
          )}
          aria-label={collapsed ? 'Развернуть боковую панель' : 'Свернуть боковую панель'}
          aria-expanded={!collapsed}
        >
          {collapsed ? <ChevronRight size={14} aria-hidden="true" /> : <ChevronLeft size={14} aria-hidden="true" />}
          <span className={cn(compact && 'sr-only')}>{collapsed ? 'Expand' : 'Collapse'}</span>
        </button>
      </div>
    </aside>
  )
}

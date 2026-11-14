import { Suspense, useEffect, useState, type CSSProperties } from 'react'
import { useLocation, useNavigate, useOutlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Github } from 'lucide-react'
import { getSectionByPath, getAdjacentSection } from '@/app/navigation'
import { candidate } from '@/data/candidate'
import { Sidebar } from '@/components/layout/Sidebar'
import { Topbar } from '@/components/layout/Topbar'
import { PresentationMode } from '@/components/layout/PresentationMode'
import { PageTransition } from '@/components/animation/PageTransition'

function RouteFallback() {
  return (
    <div className="page-shell page-top">
      <div className="panel flex min-h-[360px] items-center justify-center p-8">
        <div className="text-center">
          <span className="status-dot pulse-dot mx-auto block" aria-hidden="true" />
          <p className="mono-label mt-4">Loading environment</p>
          <p className="mt-2 text-sm text-muted">Подготавливаем 3D-экосистему…</p>
        </div>
      </div>
    </div>
  )
}

export function MainLayout() {
  const { pathname } = useLocation()
  const outlet = useOutlet()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return window.localStorage.getItem('pz-sidebar-collapsed') === '1'
    } catch {
      return false
    }
  })
  const [mobileOpen, setMobileOpen] = useState(false)
  const [presentation, setPresentation] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main')?.focus({ preventScroll: true })
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const section = getSectionByPath(pathname)
    document.title = `${section.label} · PROJECT ZERO — Yaroslav Kukar`
  }, [pathname])

  useEffect(() => {
    if (!mobileOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!presentation) return

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target
      if (target instanceof HTMLElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return

      if (event.key === 'Escape') {
        // An open dialog (e.g. project dossier) handles its own Escape —
        // don't exit the whole presentation mode from under it.
        const openDialog = document.querySelector('[role="dialog"][aria-modal="true"]')
        if (openDialog) return
        event.preventDefault()
        setPresentation(false)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        navigate(getAdjacentSection(pathname, 1).path)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        navigate(getAdjacentSection(pathname, -1).path)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [presentation, pathname, navigate])

  const toggleCollapse = () => {
    setCollapsed((value) => {
      const next = !value
      try {
        window.localStorage.setItem('pz-sidebar-collapsed', next ? '1' : '0')
      } catch {
        // Storage can be unavailable in private contexts; the UI still works.
      }
      return next
    })
  }

  const startPresentation = () => {
    setMobileOpen(false)
    setPresentation(true)
  }

  const stopPresentation = () => setPresentation(false)

  const sidebarWidth = presentation ? '0px' : collapsed ? '84px' : '280px'

  return (
    <div className="min-h-dvh">
      <a
        href="#main"
        className="fixed left-3 top-3 z-[100] -translate-y-24 border border-accent bg-panel px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink transition-transform focus:translate-y-0"
      >
        Перейти к содержимому
      </a>

      {!presentation ? (
        <Sidebar
          collapsed={collapsed}
          mobileOpen={mobileOpen}
          onToggleCollapse={toggleCollapse}
          onCloseMobile={() => setMobileOpen(false)}
        />
      ) : null}

      {mobileOpen && !presentation ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-[#040811]/70 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Закрыть меню"
        />
      ) : null}

      <div
        className="app-main min-h-dvh"
        style={{ '--sidebar-current': sidebarWidth } as CSSProperties}
      >
        <Topbar
          onOpenMobile={() => setMobileOpen(true)}
          presentation={presentation}
          onTogglePresentation={presentation ? stopPresentation : startPresentation}
        />

        <main id="main" tabIndex={-1} className="min-h-[calc(100dvh-64px)] outline-none">
          <AnimatePresence mode="wait" initial={false}>
            <PageTransition key={pathname}>
              <Suspense fallback={<RouteFallback />}>{outlet}</Suspense>
            </PageTransition>
          </AnimatePresence>
        </main>

        {!presentation ? (
          <footer className="border-t border-line/80 px-4 py-5 sm:px-6">
            <div className="mx-auto flex max-w-[1560px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5e7696]">
                Project Zero · Personal portfolio · {getSectionByPath(pathname).number} / 09
              </p>
              <div className="flex items-center gap-4">
                <p className="text-[11px] text-[#6f84a1]">
                  {candidate.latinName} · {candidate.role}
                </p>
                <a
                  href={candidate.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted no-underline transition-colors hover:text-ink"
                >
                  <Github size={13} aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        ) : null}
      </div>

      <PresentationMode active={presentation} pathname={pathname} onExit={stopPresentation} />
    </div>
  )
}

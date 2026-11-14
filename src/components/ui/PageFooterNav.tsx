import { Link, useLocation } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { sections, contactSection } from '@/app/navigation'

export function PageFooterNav() {
  const { pathname } = useLocation()
  const currentIndex = sections.findIndex((section) => section.path === pathname)

  if (pathname === contactSection.path) {
    return (
      <div className="mt-16 border-t border-line pt-6">
        <Link
          to="/"
          className="group flex items-center justify-between gap-4 py-2 no-underline"
        >
          <span>
            <span className="mono-label block">Return to start</span>
            <span className="mt-1 block font-display text-xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent">
              Command Center
            </span>
          </span>
          <ArrowRight
            size={20}
            className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
            aria-hidden="true"
          />
        </Link>
      </div>
    )
  }

  const next = currentIndex >= 0 && currentIndex < sections.length - 1 ? sections[currentIndex + 1] : contactSection

  return (
    <div className="mt-16 border-t border-line pt-6">
      <Link to={next.path} className="group flex items-center justify-between gap-4 py-2 no-underline">
        <span>
          <span className="mono-label block">
            Next / {next.number} — {next.label}
          </span>
          <span className="mt-1 block font-display text-xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent">
            {next.ru}
          </span>
        </span>
        <ArrowRight
          size={20}
          className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
          aria-hidden="true"
        />
      </Link>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Github, Mail, Play, Send, UserRound } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button, buttonClass } from '@/components/ui/Button'
import { LogoMark } from '@/components/ui/LogoMark'
import { PageFooterNav } from '@/components/ui/PageFooterNav'
import { SystemMap } from '@/sections/CommandCenter/SystemMap'
import { candidate } from '@/data/candidate'
import { sections } from '@/app/navigation'
import { useLang } from '@/i18n/language'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

function BootScreen({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#060b14]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="relative w-[min(440px,calc(100vw-3rem))]">
        <div className="mb-8 flex items-center gap-4">
          <LogoMark size={46} />
          <div>
            <p className="font-display text-[13px] font-bold tracking-[0.22em] text-ink">PROJECT ZERO</p>
            <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Personal portfolio / 2026</p>
          </div>
        </div>

        <p className="mono-label">Preparing workspace</p>
        <div className="mt-4 h-px w-full overflow-hidden bg-line">
          <motion.div
            className="h-full w-full origin-left bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-mono text-[10px] text-[#6e84a2]">Command Center / loading interface</p>
          <button
            type="button"
            onClick={onFinish}
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            Skip
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function InfoStrip() {
  const { lang } = useLang()
  const education = lang === 'en' ? candidate.educationEn : candidate.education
  const items = [
    ['Candidate', candidate.latinName],
    ['Role', candidate.role],
    ['Education', `${education.institution} / ${education.level}`],
    ['Profile', candidate.profile],
  ]

  return (
    <dl className="grid grid-cols-2 gap-x-5 gap-y-5 border-y border-line py-5 sm:grid-cols-4 sm:gap-x-8 lg:py-6">
      {items.map(([label, value]) => (
        <div key={label} className="min-w-0">
          <dt className="mono-label-sm">{label}</dt>
          <dd className="mt-1.5 truncate text-[12.5px] font-medium text-ink sm:text-[13px]" title={value}>
            {value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

export function CommandCenter() {
  const navigate = useNavigate()
  const { lang, t } = useLang()
  const reduced = usePrefersReducedMotion()
  const [booting, setBooting] = useState(() => {
    if (reduced) return false
    try {
      return window.sessionStorage.getItem('pz-booted') !== '1'
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!booting) return
    const timer = window.setTimeout(() => {
      setBooting(false)
      try {
        window.sessionStorage.setItem('pz-booted', '1')
      } catch {
        // Ignore storage restrictions.
      }
    }, 950)
    return () => window.clearTimeout(timer)
  }, [booting])

  const finishBoot = () => {
    setBooting(false)
    try {
      window.sessionStorage.setItem('pz-booted', '1')
    } catch {
      // Ignore storage restrictions.
    }
  }

  return (
    <>
      <AnimatePresence>{booting ? <BootScreen onFinish={finishBoot} /> : null}</AnimatePresence>

      <div className="page-shell page-top">
        <section aria-labelledby="hero-title">
          <div className="flex items-center justify-between gap-4">
            <p className="mono-label max-w-[70%] truncate">
              {lang === 'en' ? candidate.programmeEn : candidate.programme}
            </p>
            <p className="hidden font-mono text-[10px] uppercase tracking-[0.14em] text-[#68809f] sm:block">
              2026 / Application
            </p>
          </div>

          <div className="relative mt-8 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end lg:gap-10">
            <div className="min-w-0">
              <h1 id="hero-title" className="display-title text-[clamp(4rem,10.5vw,9.4rem)] leading-[0.82] tracking-[-0.065em]">
                <span className="block">PROJECT</span>
                <span className="hero-outline mt-1 block">
                  ZERO<span className="ml-2 inline-block h-[0.13em] w-[0.13em] translate-y-[-0.55em] bg-teal align-baseline" aria-hidden="true" />
                </span>
              </h1>
            </div>

            <div className="border-l border-line pl-4 lg:mb-1 lg:pl-6">
              <p className="mono-label">Candidate / application 2026</p>
              <p className="mt-3 font-display text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-ink sm:text-4xl">
                {candidate.latinName}
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {candidate.role}
              </p>
              <p className="mt-3 max-w-[280px] text-[13px] leading-relaxed text-muted">{candidate.tagline}</p>
            </div>
          </div>

          <div className="mt-9 lg:mt-11">
            <InfoStrip />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5 lg:mt-8">
            <button type="button" onClick={() => navigate('/profile')} className={buttonClass('primary', 'sm:min-w-[230px]')}>
              {t('Начать знакомство', 'Explore the portfolio')}
              <ArrowRight size={13} aria-hidden="true" />
            </button>
            {candidate.contacts.telegram ? (
              <a
                href={candidate.contacts.telegram}
                target="_blank"
                rel="noreferrer noopener"
                className={buttonClass('secondary')}
              >
                <Send size={13} aria-hidden="true" />
                Telegram
              </a>
            ) : null}
            {candidate.contacts.email ? (
              <a href={`mailto:${candidate.contacts.email}`} className={buttonClass('ghost')}>
                <Mail size={13} aria-hidden="true" />
                Email
              </a>
            ) : null}
            <a
              href={candidate.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className={buttonClass('ghost')}
            >
              <Github size={13} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </section>

        <section
          className="mt-8 grid gap-4 lg:mt-10 lg:gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(350px,1fr)]"
          aria-label={t('Карта проекта и статус кандидата', 'Project map and candidate status')}
        >
          <SystemMap />

          <div className="flex flex-col gap-4 lg:gap-5">
            <div className="panel p-5 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="mono-label">Candidate status</p>
                <Badge variant="teal" dot>
                  Active
                </Badge>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <div className="relative flex h-16 w-16 flex-none items-center justify-center border border-accent/35 bg-accent/8">
                  <span className="font-display text-xl font-bold tracking-[-0.04em] text-ink">YK</span>
                  <span className="absolute -right-1 -top-1 h-2 w-2 bg-teal" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-xl font-semibold tracking-[-0.03em]">{candidate.latinName}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{candidate.role}</p>
                  <p className="mt-1 text-[11px] text-muted">{candidate.profile}</p>
                </div>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-px border border-line bg-line">
                <div className="bg-panel/80 p-3">
                  <dt className="mono-label-sm">Education</dt>
                  <dd className="mt-1 text-[12px] font-medium text-ink">
                    {lang === 'en' ? candidate.educationEn.institution : candidate.education.institution}
                  </dd>
                </div>
                <div className="bg-panel/80 p-3">
                  <dt className="mono-label-sm">Level</dt>
                  <dd className="mt-1 text-[12px] font-medium text-ink">
                    {lang === 'en' ? candidate.educationEn.level : candidate.education.level}
                  </dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {['PM', 'IT Ops', 'Analysis', 'AI Tools'].map((tag) => (
                  <span key={tag} className="border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="ghost" className="mt-4 -ml-3 h-9 min-h-9" onClick={() => navigate('/profile')}>
                <UserRound size={14} aria-hidden="true" />
                {t('Открыть профиль', 'Open profile')}
                <ArrowRight size={13} aria-hidden="true" />
              </Button>
            </div>

            <div className="panel relative overflow-hidden p-5 sm:p-6">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/8 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-3">
                  <p className="mono-label">Welcome message</p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5d7392]">01 / intro</span>
                </div>
                <p className="mt-4 text-pretty text-[13.5px] leading-relaxed text-[#c4cedc]">
                  {t(
                    'Добро пожаловать в PROJECT ZERO — интерактивное пространство, в котором можно познакомиться с моим опытом, проектами, технической базой и подходом к управлению.',
                    'Welcome to PROJECT ZERO — an interactive space to explore my experience, projects, technical foundation and approach to management.',
                  )}
                </p>
                <button type="button" onClick={() => navigate('/profile')} className={buttonClass('primary', 'mt-6 w-full sm:w-auto')}>
                  <Play size={14} aria-hidden="true" />
                  Initialize project
                </button>
                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[#5d7392]">
                  {sections.length} modules · free navigation
                </p>
              </div>
            </div>
          </div>
        </section>

        <PageFooterNav />
      </div>
    </>
  )
}

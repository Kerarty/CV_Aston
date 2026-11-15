import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { PageFooterNav } from '@/components/ui/PageFooterNav'
import { buttonClass } from '@/components/ui/Button'
import { LogoMark } from '@/components/ui/LogoMark'
import { candidate } from '@/data/candidate'
import { getAstonNote } from '@/data/astonDirections'
import { getProjects } from '@/data/projects'
import { useLang } from '@/i18n/language'
import { cn } from '@/utils/cn'

export function Contact() {
  const { lang, t } = useLang()
  const astonNote = getAstonNote(lang)
  const projects = getProjects(lang)
  const { email, telegram } = candidate.contacts
  const directContacts = Boolean(email || telegram)
  const [emailCopied, setEmailCopied] = useState(false)
  const telegramHandle = telegram?.match(/t\.me\/([^/?#]+)/)?.[1]

  const copyEmail = async () => {
    if (!email) return
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 2200)
    } catch {
      // Clipboard API unavailable (e.g. http context) — адрес остаётся видимым текстом.
    }
  }

  return (
    <div className="page-shell page-top">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.16em] text-accent">09</span>
          <span className="font-mono text-[11px] text-line">/</span>
          <p className="mono-label">Final message</p>
        </div>
        <Badge variant="teal" dot>
          Application / 2026
        </Badge>
      </div>

      <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-8 lg:mt-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] lg:gap-12">
        <section aria-labelledby="final-message-heading">
          <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#6f86a3]">
            <Sparkles size={12} className="text-teal" aria-hidden="true" />
            Project Zero / complete
          </p>

          <h1
            id="final-message-heading"
            className="display-title mt-5 text-[clamp(2.25rem,5.2vw,4.9rem)] leading-[0.92] tracking-[-0.055em]"
          >
            BUILDING SYSTEMS.
            <br />
            CONNECTING PEOPLE.
            <br />
            <span className="text-[#91a5bf]">DELIVERING RESULTS.</span>
          </h1>

          <div className="mt-8 max-w-2xl space-y-4 text-pretty text-[13.5px] leading-relaxed text-[#b9c7d8] sm:text-[14.5px]">
            <p>
              {t(
                'Спасибо, что дошли до финального экрана. PROJECT ZERO — это не заявление о готовом опыте, а попытка показать, как я думаю, учусь и организую работу.',
                'Thank you for reaching the final screen. PROJECT ZERO is not a claim of finished expertise — it is an attempt to show how I think, learn and organize work.',
              )}
            </p>
            <p>
              {t(
                'Мне интересно строить системы, в которых технологии и люди работают в одном направлении. ASTON для меня — возможность проверить этот интерес в реальной управленческой среде и начать профессиональный путь в IT.',
                'I am interested in building systems where technology and people move in the same direction. For me, ASTON is a chance to test that interest in a real management environment and start a professional path in IT.',
              )}
            </p>
          </div>

          <blockquote className="mt-8 max-w-xl border-l-2 border-accent pl-5">
            <p className="font-display text-[clamp(1.15rem,2vw,1.45rem)] font-medium leading-snug tracking-[-0.02em] text-ink">
              «{t(candidate.goal, candidate.goalEn)}»
            </p>
            <footer className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
              Professional goal / 2026
            </footer>
          </blockquote>

          <div
            className="mt-8 grid max-w-2xl gap-px border border-line bg-line sm:grid-cols-2"
            aria-label={t('Способы связаться', 'Ways to get in touch')}
          >
            {email ? (
              <div className="flex items-center gap-3.5 bg-panel/70 p-4 sm:col-span-2">
                <span className="flex h-11 w-11 flex-none items-center justify-center border border-accent/35 bg-accent/10 text-accent">
                  <Mail size={17} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mono-label-sm">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 block truncate text-[14px] font-medium text-ink no-underline transition-colors hover:text-accent"
                  >
                    {email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-live="polite"
                  className={cn(
                    'flex h-10 flex-none items-center gap-2 border px-3 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors',
                    emailCopied
                      ? 'border-teal/45 bg-teal/10 text-teal'
                      : 'border-line text-muted hover:border-accent/50 hover:text-ink',
                  )}
                >
                  {emailCopied ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
                  {emailCopied ? t('Скопировано', 'Copied') : t('Копировать', 'Copy')}
                </button>
              </div>
            ) : null}

            {telegram ? (
              <a
                href={telegram}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-3.5 bg-panel/70 p-4 no-underline transition-colors hover:bg-panel-2/60"
              >
                <span className="flex h-11 w-11 flex-none items-center justify-center border border-teal/35 bg-teal/10 text-teal">
                  <Send size={17} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="mono-label-sm">Telegram</p>
                  <p className="mt-1 truncate text-[14px] font-medium text-ink transition-colors group-hover:text-accent">
                    {telegramHandle ? `@${telegramHandle}` : telegram}
                  </p>
                </div>
                <ArrowUpRight
                  size={15}
                  className="flex-none text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </a>
            ) : null}

            <a
              href={candidate.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-3.5 bg-panel/70 p-4 no-underline transition-colors hover:bg-panel-2/60"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center border border-line bg-base/50 text-muted transition-colors group-hover:border-accent/50 group-hover:text-ink">
                <Github size={17} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="mono-label-sm">GitHub</p>
                <p className="mt-1 truncate text-[14px] font-medium text-ink transition-colors group-hover:text-accent">
                  {candidate.links.github.replace('https://github.com/', '')}
                </p>
              </div>
              <ArrowUpRight
                size={15}
                className="flex-none text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {candidate.cvUrl ? (
              <a
                href={`${import.meta.env.BASE_URL}${candidate.cvUrl}`}
                download
                className={buttonClass('secondary')}
              >
                <Download size={14} aria-hidden="true" />
                {t('Скачать CV', 'Download CV')}
              </a>
            ) : null}

            <Link to="/archive" className={buttonClass('ghost')}>
              Project Archive
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          {!directContacts ? (
            <p className="mt-4 max-w-lg text-[10.5px] leading-relaxed text-[#6e86a5]">
              {t(
                'Прямые контакты (email и Telegram) не опубликованы в этой версии. Связаться можно через GitHub.',
                'Direct contacts (email and Telegram) are not published in this version. Reach out via GitHub.',
              )}
            </p>
          ) : null}
        </section>

        <aside className="space-y-4">
          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <p className="mono-label">Candidate snapshot</p>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#68809f]">YK / 2026</span>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 flex-none items-center justify-center border border-accent/35 bg-accent/8">
                  <span className="font-display text-xl font-bold tracking-[-0.04em]">YK</span>
                  <span className="absolute -right-1 -top-1 h-2 w-2 bg-teal" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-xl font-semibold tracking-[-0.03em]">{candidate.latinName}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{candidate.role}</p>
                  <p className="mt-1 text-[11px] text-muted">{candidate.profile}</p>
                </div>
              </div>

              <dl className="mt-5 divide-y divide-line border-y border-line">
                {[
                  ['Programme', candidate.programme],
                  ['Education', `${candidate.education.institution} / ${candidate.education.level}`],
                  ['Direction', candidate.education.programme],
                  ['Course', candidate.education.course],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[92px_minmax(0,1fr)] gap-3 py-2.5">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#68809f]">{label}</dt>
                    <dd className="text-[11px] leading-snug text-[#c1cedd]">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {candidate.focus.slice(0, 4).map((item) => (
                  <span
                    key={item}
                    className="border border-line px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.08em] text-[#93a8c0]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-line pt-4">
                <span className="status-dot" aria-hidden="true" />
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-teal">Open to the programme</p>
              </div>
            </div>
          </div>

          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <p className="mono-label">Application paths</p>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#68809f]">03</span>
            </div>
            <div className="p-2">
              <ul className="space-y-1">
                {[
                  { index: '01', label: 'Candidate Profile', to: '/profile', ru: 'Техническая база и подход' },
                  { index: '02', label: 'Project Archive', to: '/archive', ru: 'Досье проектного опыта' },
                  { index: '03', label: 'ASTON Integration', to: '/aston', ru: 'Направления программы' },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="group flex min-h-[48px] items-center gap-3 border border-transparent px-3 py-2 no-underline transition-colors hover:border-line hover:bg-panel-2/45"
                    >
                      <span className="w-5 flex-none font-mono text-[9px] text-accent">{item.index}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[11.5px] font-medium text-[#c4d0de] group-hover:text-ink">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[9.5px] text-[#68809f]">{item.ru}</span>
                      </span>
                      <ArrowUpRight
                        size={12}
                        className="flex-none text-[#4f6684] transition-colors group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="panel flex items-center gap-3 p-4">
            <LogoMark size={34} />
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#6f86a3]">Portfolio / 2026</p>
              <p className="mt-1 truncate text-[11px] text-[#9fb0c5]">
                {projects.length} {t('досье', 'dossiers')} · {lang === 'en' ? candidate.educationEn.institution : candidate.education.institution} · {lang === 'en' ? candidate.programmeEn : candidate.programme}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <section className="panel mt-8 overflow-hidden lg:mt-10" aria-labelledby="aston-note-heading">
        <div className="grid lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)]">
          <div className="border-b border-line p-5 sm:p-6 lg:border-b-0 lg:border-r">
            <p className="mono-label">ASTON note</p>
            <h2
              id="aston-note-heading"
              className="mt-3 font-display text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold leading-[1.02] tracking-[-0.035em]"
            >
              DELIVERY &amp;
              <br />
              OPERATIONS.
            </h2>
            <p className="mt-3 text-[11.5px] leading-relaxed text-[#7d91aa]">
              {t(
                'Начальный фокус внутри программы — при сохранении открытости к остальным направлениям.',
                'The initial focus within the programme — while staying open to the other directions.',
              )}
            </p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-pretty text-[12.5px] leading-relaxed text-[#b9c7d8]">{astonNote}</p>
            <p className="mt-4 border-t border-line pt-3 text-[10px] leading-relaxed text-[#68809f]">
              {candidate.disclaimer}
            </p>
          </div>
        </div>
      </section>

      <PageFooterNav />
    </div>
  )
}

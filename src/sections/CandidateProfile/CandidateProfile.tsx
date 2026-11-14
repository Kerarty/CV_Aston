import { useState } from 'react'
import { ArrowRight, GraduationCap, Link2, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { PageFooterNav } from '@/components/ui/PageFooterNav'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { candidate } from '@/data/candidate'
import { ProfileChain } from '@/sections/CandidateProfile/ProfileChain'

const interests = ['Project Management', 'IT Operations', 'Business Analysis', 'Process Optimization', 'AI Tools & Analytics', 'Team Coordination']
const strengths = [
  'Системное мышление',
  'Самостоятельное обучение',
  'Инициативность',
  'Организаторские способности',
  'Техническая грамотность',
  'Интерес к аналитике',
]

export function CandidateProfile() {
  const [activeInterest, setActiveInterest] = useState<string | null>(null)

  return (
    <div className="page-shell page-top">
      <SectionHeader
        index="02"
        label="Candidate Profile"
        title={
          <>
            TECHNICAL THINKING.
            <br />
            <span className="text-[#91a5bf]">MANAGEMENT MINDSET.</span>
          </>
        }
        lead="Техническая база, интерес к аналитике и управлению, готовность двигаться от самостоятельной работы к координации команд."
        meta={
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">{candidate.education.institution}</Badge>
            <Badge>{candidate.education.level}</Badge>
            <Badge>{candidate.education.course}</Badge>
            <Badge>{candidate.education.form}</Badge>
          </div>
        }
      />

      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <article className="lg:col-span-7">
          <div className="panel relative h-full overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 bg-[radial-gradient(circle_at_top_right,rgba(71,140,255,0.13),transparent_65%)]" aria-hidden="true" />
            <div className="relative">
              <p className="mono-label">Personal statement</p>
              <div className="mt-5 space-y-4 text-pretty text-[14px] leading-relaxed text-[#c4cede] sm:text-[15px]">
                {candidate.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-7 border-l-2 border-accent pl-4">
                <p className="font-display text-lg font-medium leading-snug tracking-[-0.02em] text-ink sm:text-xl">
                  «{candidate.goal}»
                </p>
                <footer className="mt-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  Professional direction / 2026
                </footer>
              </blockquote>

              <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-line pt-5">
                <a
                  href={candidate.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline font-mono text-[10px] uppercase tracking-[0.12em] text-muted hover:text-ink"
                >
                  GitHub portfolio
                  <Link2 size={12} aria-hidden="true" />
                </a>
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#5c7392]">
                  Profile / verified information only
                </span>
              </div>
            </div>
          </div>
        </article>

        <aside className="lg:col-span-5">
          <div className="panel h-full p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="mono-label">Identity card</p>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5d7392]">02 / profile</span>
            </div>

            <div className="mt-5 flex items-center gap-4 border-b border-line pb-5">
              <div className="relative flex h-[68px] w-[68px] flex-none items-center justify-center border border-accent/35 bg-accent/8">
                <span className="font-display text-2xl font-bold tracking-[-0.05em]">YK</span>
                <span className="absolute -right-1 -top-1 h-2 w-2 bg-teal" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="font-display text-xl font-semibold tracking-[-0.03em]">{candidate.latinName}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{candidate.role}</p>
                <p className="mt-1 text-[11px] text-muted">{candidate.profile}</p>
              </div>
            </div>

            <dl className="divide-y divide-line">
              {[
                ['Education', `${candidate.education.institution} / ${candidate.education.level}`],
                ['Direction', candidate.education.programme],
                ['Course', candidate.education.course],
                ['Format', candidate.education.form],
                ['Programme', candidate.programme],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[96px_minmax(0,1fr)] gap-3 py-3">
                  <dt className="mono-label-sm pt-0.5">{label}</dt>
                  <dd className="text-[12.5px] leading-snug text-[#cbd5e2]">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-4 flex items-center gap-2 border border-line bg-base/35 p-3">
              <GraduationCap size={15} className="flex-none text-teal" aria-hidden="true" />
              <p className="text-[11px] leading-snug text-muted">
                Техническая база БГУИР + самостоятельные проекты + организаторский опыт.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-12 lg:gap-6">
        <section className="panel p-5 sm:p-6 lg:col-span-4" aria-labelledby="education-heading">
          <div className="flex items-center justify-between gap-3">
            <p className="mono-label">Education</p>
            <GraduationCap size={15} className="text-[#627b9b]" aria-hidden="true" />
          </div>
          <h2 id="education-heading" className="mt-4 font-display text-[1.7rem] font-bold leading-none tracking-[-0.04em]">
            БГУИР
          </h2>
          <p className="mt-2 text-[12px] leading-relaxed text-muted">{candidate.education.institutionFull}</p>
          <div className="mt-5 space-y-2 border-t border-line pt-4">
            {[
              ['Специальность', candidate.education.programme],
              ['Уровень', candidate.education.level],
              ['Курс', candidate.education.course],
              ['Форма', candidate.education.form],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-[92px_minmax(0,1fr)] gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#5f7695]">{label}</span>
                <span className="text-[11.5px] leading-snug text-[#c6d0de]">{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="panel p-5 sm:p-6 lg:col-span-4" aria-labelledby="interests-heading">
          <div className="flex items-center justify-between gap-3">
            <p className="mono-label">Professional interests</p>
            <Sparkles size={15} className="text-[#627b9b]" aria-hidden="true" />
          </div>
          <h2 id="interests-heading" className="mt-4 font-display text-lg font-semibold tracking-[-0.02em]">
            Где хочу развиваться
          </h2>
          <ul className="mt-4 space-y-1.5">
            {interests.map((interest) => (
              <li key={interest}>
                <button
                  type="button"
                  onClick={() => setActiveInterest(activeInterest === interest ? null : interest)}
                  aria-pressed={activeInterest === interest}
                  className="group flex w-full items-center gap-2.5 border-b border-line/60 py-2 text-left transition-colors hover:text-ink"
                >
                  <span className={`h-1.5 w-1.5 flex-none transition-colors ${activeInterest === interest ? 'bg-teal' : 'bg-line group-hover:bg-accent'}`} aria-hidden="true" />
                  <span className="flex-1 text-[12px] text-[#c2cddd]">{interest}</span>
                  <ArrowRight size={11} className="text-[#506986] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-3 min-h-[32px] text-[10.5px] leading-snug text-muted" aria-live="polite">
            {activeInterest
              ? 'Направление из списка профессиональных интересов; подтверждается учебными и личными проектами.'
              : 'Нажмите на направление, чтобы отметить его в интерфейсе.'}
          </p>
        </section>

        <section className="panel p-5 sm:p-6 lg:col-span-4" aria-labelledby="strengths-heading">
          <div className="flex items-center justify-between gap-3">
            <p className="mono-label">Personal strengths</p>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5d7392]">06 points</span>
          </div>
          <h2 id="strengths-heading" className="mt-4 font-display text-lg font-semibold tracking-[-0.02em]">
            Что помогает в работе
          </h2>
          <ol className="mt-4 space-y-2.5">
            {strengths.map((strength, index) => (
              <li key={strength} className="flex items-start gap-3">
                <span className="mt-[1px] font-mono text-[9px] text-accent">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-[12px] leading-snug text-[#c2cddd]">{strength}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 border-t border-line pt-3 text-[10.5px] leading-snug text-[#647b99]">
            Без рейтингов и процентных оценок — это качественные характеристики, а не измеренные показатели.
          </p>
        </section>
      </div>

      <ProfileChain />
      <PageFooterNav />
    </div>
  )
}

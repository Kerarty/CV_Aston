import { useState, type ReactNode } from 'react'
import { ArrowUpRight, ChevronRight, CircleDot, FileText, Layers, Play } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button, buttonClass } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { PageFooterNav } from '@/components/ui/PageFooterNav'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { projects, type Project } from '@/data/projects'
import { ProjectGlyph } from '@/sections/ProjectArchive/ProjectGlyph'
import { cn } from '@/utils/cn'

function DossierRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 border-b border-line/70 py-4 last:border-b-0 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-5">
      <p className="mono-label-sm pt-0.5">{label}</p>
      <div className="text-[12.5px] leading-relaxed text-[#c2cddd]">{children}</div>
    </div>
  )
}

function ProjectDossier({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      title={project ? `${project.name} — project dossier` : 'Project dossier'}
      eyebrow={project ? `${project.index} / ${project.type}` : undefined}
      className="max-w-5xl"
    >
      {project ? (
        <div>
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]">
            <div>
              <p className="text-pretty text-[14px] leading-relaxed text-[#c7d2e0]">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.technologies.map((technology) => (
                  <span key={technology} className="border border-line bg-base/40 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-line bg-base/30 p-4">
              <p className="mono-label-sm">Dossier status</p>
              <div className="mt-3 space-y-2 text-[11.5px] text-[#b7c5d7]">
                <p className="flex items-center justify-between gap-3">
                  <span className="text-muted">Type</span>
                  <span className="text-right">{project.typeRu}</span>
                </p>
                <p className="flex items-center justify-between gap-3">
                  <span className="text-muted">Materials</span>
                  <span className="text-right">{project.links.play || project.links.source ? 'Available online' : 'On request'}</span>
                </p>
                <p className="flex items-center justify-between gap-3">
                  <span className="text-muted">Role</span>
                  <span className="text-right">Author / contributor</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 divide-y divide-line/70 border-y border-line/70">
            <DossierRow label="Overview">
              <p>{project.details.overview}</p>
            </DossierRow>
            <DossierRow label="Objective">
              <p>{project.details.objective}</p>
            </DossierRow>
            <DossierRow label="My contribution">
              <ul className="space-y-1.5">
                {project.details.contribution.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-[7px] h-1 w-1 flex-none bg-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DossierRow>
            <DossierRow label="Tools & technologies">
              <div className="flex flex-wrap gap-1.5">
                {project.details.tools.map((tool) => (
                  <span key={tool} className="border border-line px-2 py-1 text-[10.5px] text-[#aebdce]">
                    {tool}
                  </span>
                ))}
              </div>
            </DossierRow>
            <DossierRow label="Workflow">
              <ol className="space-y-1.5">
                {project.details.workflow.map((step, index) => (
                  <li key={step} className="flex gap-2.5">
                    <span className="font-mono text-[9px] text-accent">{String(index + 1).padStart(2, '0')}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </DossierRow>
            <DossierRow label="Outcome">
              <p>{project.details.outcome}</p>
            </DossierRow>
            <DossierRow label="Lessons learned">
              <ul className="space-y-1.5">
                {project.details.lessons.map((lesson) => (
                  <li key={lesson} className="flex gap-2.5">
                    <CircleDot size={11} className="mt-1 flex-none text-teal" aria-hidden="true" />
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </DossierRow>
          </div>

          {project.mediaNote ? (
            <div className="mt-5 border border-warning/25 bg-warning/5 p-4">
              <p className="mono-label-sm text-warning/90">Materials note</p>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-[#c5b696]">{project.mediaNote}</p>
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
            {project.links.play ? (
              <a href={project.links.play} target="_blank" rel="noreferrer noopener" className={buttonClass('primary')}>
                <Play size={13} aria-hidden="true" />
                Play project
              </a>
            ) : null}
            {project.links.source ? (
              <a href={project.links.source} target="_blank" rel="noreferrer noopener" className={buttonClass('secondary')}>
                <ArrowUpRight size={13} aria-hidden="true" />
                View source code
              </a>
            ) : null}
            <Button variant="ghost" onClick={onClose} className="ml-auto">
              Close dossier
            </Button>
          </div>
        </div>
      ) : null}
    </Modal>
  )
}

export function ProjectArchive() {
  const [selected, setSelected] = useState(projects[0])
  const [dossier, setDossier] = useState<Project | null>(null)

  return (
    <div className="page-shell page-top">
      <SectionHeader
        index="04"
        label="Project Archive"
        title={
          <>
            PROJECT
            <br />
            <span className="text-[#91a5bf]">ARCHIVE.</span>
          </>
        }
        lead="Три категории проектного опыта: дипломная работа, самостоятельный прототип и учебные технические проекты."
        meta={
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent">03 dossiers</Badge>
            <Badge>Diploma</Badge>
            <Badge>Personal</Badge>
            <Badge>Academic</Badge>
          </div>
        }
      />

      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.42fr)] lg:gap-6">
        <section className="panel flex flex-col overflow-hidden" aria-labelledby="archive-index-heading">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
            <div>
              <p className="mono-label">Archive index</p>
              <h2 id="archive-index-heading" className="mt-1 font-display text-lg font-semibold tracking-[-0.02em]">
                Проектные досье
              </h2>
            </div>
            <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[#5f7695]">
              <Layers size={12} aria-hidden="true" />
              03
            </span>
          </div>

          <div className="flex-1 p-2 sm:p-3">
            <ul className="space-y-1.5">
              {projects.map((project) => {
                const isActive = selected.id === project.id
                return (
                  <li key={project.id}>
                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      aria-pressed={isActive}
                      className={cn(
                        'group flex w-full items-center gap-3 border p-3 text-left transition-colors sm:gap-4 sm:p-4',
                        isActive
                          ? 'border-accent/45 bg-accent/7'
                          : 'border-transparent hover:border-line hover:bg-panel-2/40',
                      )}
                    >
                      <span className={cn('font-mono text-[10px]', isActive ? 'text-accent' : 'text-[#5c7392]')}>
                        {project.index}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={cn('block truncate font-display text-[15px] font-semibold tracking-[-0.02em]', isActive ? 'text-ink' : 'text-[#c4cedc]')}>
                          {project.name}
                        </span>
                        <span className="mt-1 block truncate font-mono text-[8.5px] uppercase tracking-[0.11em] text-[#647b99]">
                          {project.type}
                        </span>
                      </span>
                      <ChevronRight
                        size={15}
                        className={cn('flex-none transition-transform', isActive ? 'translate-x-0.5 text-accent' : 'text-[#536b89] group-hover:translate-x-0.5')}
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="border-t border-line px-5 py-4">
            <p className="flex items-start gap-2 text-[10.5px] leading-relaxed text-[#647b99]">
              <FileText size={13} className="mt-0.5 flex-none" aria-hidden="true" />
              В архив включены только проекты, о которых есть подтверждённый контекст. Материалы без реальных файлов не
              добавлялись.
            </p>
          </div>
        </section>

        <section className="panel overflow-hidden" aria-labelledby="project-preview-heading">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-accent">{selected.index}</span>
              <p className="mono-label">Dossier preview</p>
            </div>
            <Badge variant={selected.type === 'Diploma Project' ? 'accent' : 'muted'}>{selected.type}</Badge>
          </div>

          <div className="relative h-[220px] border-b border-line bg-base/30 sm:h-[260px]">
            <ProjectGlyph glyph={selected.glyph} />
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-[#7d91aa]">{selected.typeRu}</p>
                <p className="mt-1 font-display text-2xl font-bold tracking-[-0.04em] text-ink sm:text-3xl">
                  {selected.name}
                </p>
              </div>
              <span className="hidden border border-line bg-base/70 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8ca0b8] sm:block">
                {selected.technologies.length} tools
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-muted">{selected.subtitle}</p>
            <p className="mt-3 max-w-2xl text-pretty text-[13px] leading-relaxed text-[#c0ccda]">{selected.description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {selected.technologies.map((technology) => (
                <span key={technology} className="border border-line bg-base/35 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-[#94a8c0]">
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
              <Button variant="primary" onClick={() => setDossier(selected)}>
                <FileText size={14} aria-hidden="true" />
                Открыть досье
              </Button>
              {selected.links.play ? (
                <a href={selected.links.play} target="_blank" rel="noreferrer noopener" className={buttonClass('secondary')}>
                  <Play size={13} aria-hidden="true" />
                  Play project
                </a>
              ) : null}
              {selected.links.source ? (
                <a href={selected.links.source} target="_blank" rel="noreferrer noopener" className={buttonClass('ghost')}>
                  <ArrowUpRight size={13} aria-hidden="true" />
                  Source
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </div>

      <ProjectDossier project={dossier} onClose={() => setDossier(null)} />

      <PageFooterNav />
    </div>
  )
}

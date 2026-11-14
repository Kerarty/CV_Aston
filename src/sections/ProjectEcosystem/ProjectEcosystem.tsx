import {
  Component,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import {
  ArrowUpRight,
  Boxes,
  ChevronRight,
  Crosshair,
  ExternalLink,
  Handshake,
  MousePointerClick,
  Orbit,
  RotateCw,
  Settings2,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { PageFooterNav } from '@/components/ui/PageFooterNav'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { buttonClass } from '@/components/ui/Button'
import { LogoMark } from '@/components/ui/LogoMark'
import { getEcosystemNode, ecosystemNodes, type EcosystemNodeId } from '@/data/ecosystem'
import { projects } from '@/data/projects'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'
import { SceneFallback } from '@/sections/ProjectEcosystem/SceneFallback'
import { cn } from '@/utils/cn'

const EcosystemScene = lazy(() =>
  import('@/three/EcosystemScene').then((module) => ({ default: module.EcosystemScene })),
)

const nodeIcons: Record<EcosystemNodeId, LucideIcon> = {
  core: Orbit,
  delivery: Workflow,
  operations: Settings2,
  sales: Handshake,
  people: Users,
  island: Boxes,
}

function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      window.WebGLRenderingContext && (canvas.getContext('webgl2') || canvas.getContext('webgl')),
    )
  } catch {
    return false
  }
}

class SceneErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

function SceneLoader({ sceneReady, onSkip }: { sceneReady: boolean; onSkip: () => void }) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#070c15]/94 px-6 text-center backdrop-blur-sm">
      <LogoMark size={40} />
      <p className="mono-label mt-5">{sceneReady ? 'Revealing ecosystem' : 'Loading 3D environment'}</p>
      <div className="mt-4 h-px w-56 overflow-hidden bg-line">
        <div className="h-full w-1/2 animate-pulse bg-accent" />
      </div>
      <p className="mt-3 max-w-xs text-[11px] leading-relaxed text-[#6e86a5]">
        {sceneReady
          ? 'Модели загружены. Раскрываем ядро, направления ASTON и портфолио.'
          : 'Загружаем архитектурные модели и материалы сцены.'}
      </p>
      {sceneReady ? (
        <button
          type="button"
          onClick={onSkip}
          className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted underline-offset-4 hover:text-ink hover:underline"
        >
          Skip intro
        </button>
      ) : null}
    </div>
  )
}

function ScenePlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[#070c15]">
      <div className="text-center">
        <span className="status-dot mx-auto block" aria-hidden="true" />
        <p className="mono-label mt-4">Loading scene module</p>
      </div>
    </div>
  )
}

const layers = [
  {
    index: '01',
    label: 'CORE',
    ru: 'Кандидат',
    text: 'Техническая база, интересы и управленческий вектор.',
  },
  {
    index: '02',
    label: 'ASTON MODULES',
    ru: 'Направления',
    text: 'Delivery, Operations, Sales & Marketing, People.',
  },
  {
    index: '03',
    label: 'PORTFOLIO ISLAND',
    ru: 'Проекты',
    text: 'Factory Management, Runner, Technical Projects.',
  },
]

export default function ProjectEcosystem() {
  const reducedMotion = usePrefersReducedMotion()
  const [webgl] = useState(detectWebGL)
  const [selected, setSelected] = useState<EcosystemNodeId>('core')
  const [hovered, setHovered] = useState<EcosystemNodeId | null>(null)
  const [focus, setFocus] = useState<EcosystemNodeId | 'overview'>('overview')
  const [resetToken, setResetToken] = useState(0)
  const [autoRotate, setAutoRotate] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)
  const [introDone, setIntroDone] = useState(() => reducedMotion || !webgl)
  const progress = useRef({ value: reducedMotion ? 1 : 0 })

  const node = getEcosystemNode(selected)
  const hoveredNode = hovered ? getEcosystemNode(hovered) : null

  const handleReady = useCallback(() => setSceneReady(true), [])

  useEffect(() => {
    if (!sceneReady || !webgl) return

    if (reducedMotion) {
      progress.current.value = 1
      // Настройка reduced-motion включилась во время интро — глушим его синхронно.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIntroDone(true)
      return
    }

    const tween = gsap.to(progress.current, {
      value: 1,
      duration: 2.6,
      ease: 'power2.inOut',
      onComplete: () => setIntroDone(true),
    })

    return () => {
      tween.kill()
    }
  }, [sceneReady, webgl, reducedMotion])

  const handleSelect = (id: EcosystemNodeId) => {
    setSelected(id)
    setFocus(id)
  }

  const handleReset = () => {
    setFocus('overview')
    setResetToken((value) => value + 1)
  }

  const handleSkip = () => {
    gsap.to(progress.current, { value: 1, duration: 0.25, overwrite: true })
    setIntroDone(true)
  }

  const updateHover = (id: EcosystemNodeId | null) => {
    setHovered(id)
  }

  return (
    <div className="page-shell page-top">
      <SectionHeader
        index="08"
        label="3D Project Ecosystem"
        title={
          <>
            PROJECT
            <br />
            <span className="text-[#91a5bf]">ECOSYSTEM.</span>
          </>
        }
        lead="Пространственная модель экосистемы: ядро кандидата, четыре направления ASTON и портфолио проектов."
        meta={
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">Interactive 3D</Badge>
            <Badge variant="teal" dot>
              Six nodes
            </Badge>
            <Badge>Procedural core</Badge>
            <Badge>CC0 models</Badge>
          </div>
        }
      />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.62fr)_minmax(340px,0.78fr)] xl:items-start xl:gap-6">
        <section className="panel overflow-hidden" aria-label="Интерактивная 3D-экосистема">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              <p className="mono-label">Orbital ecosystem</p>
              <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-[#68809f] sm:inline">
                / interactive map
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setAutoRotate((value) => !value)}
                aria-pressed={autoRotate}
                className={cn(
                  'flex h-9 items-center gap-2 border px-2.5 font-mono text-[9px] uppercase tracking-[0.1em] transition-colors',
                  autoRotate
                    ? 'border-accent/55 bg-accent/12 text-[#b9d3ff]'
                    : 'border-line text-muted hover:border-[#3d5878] hover:text-ink',
                )}
              >
                <RotateCw size={13} aria-hidden="true" />
                <span className="hidden sm:inline">Auto-rotate</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex h-9 items-center gap-2 border border-line px-2.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted transition-colors hover:border-[#3d5878] hover:text-ink"
              >
                <Crosshair size={13} aria-hidden="true" />
                <span className="hidden sm:inline">Reset view</span>
              </button>
            </div>
          </div>

          <div className="relative h-[440px] w-full sm:h-[540px] xl:h-[640px]">
            <SceneErrorBoundary
              fallback={
                <SceneFallback
                  selected={selected}
                  onSelect={handleSelect}
                  reason="3D-сцена не запустилась на этом устройстве. Показана схема экосистемы."
                />
              }
            >
              {webgl ? (
                <Suspense fallback={<ScenePlaceholder />}>
                  <EcosystemScene
                    selected={selected}
                    hovered={hovered}
                    focus={focus}
                    resetToken={resetToken}
                    progress={progress}
                    autoRotate={autoRotate}
                    reducedMotion={reducedMotion}
                    onSelect={handleSelect}
                    onHover={updateHover}
                    onReady={handleReady}
                  />
                </Suspense>
              ) : (
                <SceneFallback selected={selected} onSelect={handleSelect} />
              )}
            </SceneErrorBoundary>

            {webgl ? (
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 p-4">
                <p className="mono-label-sm border border-line/70 bg-[#070c15]/70 px-2 py-1 backdrop-blur-sm">
                  {hoveredNode ? `Inspect / ${hoveredNode.label}` : node.id !== 'core' ? `Focus / ${node.label}` : 'Overview / drag to orbit'}
                </p>
                <p className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-[#6f86a3] sm:block">
                  Node {node.index} / 05
                </p>
              </div>
            ) : null}

            {!introDone && webgl ? <SceneLoader sceneReady={sceneReady} onSkip={handleSkip} /> : null}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line px-4 py-3 sm:px-5">
            <p className="flex items-center gap-2 text-[10px] leading-relaxed text-[#6e86a5]">
              <MousePointerClick size={12} className="flex-none text-[#6f86a3]" aria-hidden="true" />
              Drag to orbit · scroll to zoom · click an object to inspect
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#647e9e]">
              {webgl ? 'WebGL / live' : 'Schematic / 2D'}
            </p>
          </div>
        </section>

        <aside className="flex flex-col gap-4 xl:gap-5">
          <div className="panel overflow-hidden" aria-live="polite">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <p className="mono-label">Node inspector</p>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#68809f]">
                {node.index} / 05
              </span>
            </div>

            <div className="p-5">
              <p className="mono-label-sm text-accent">{node.eyebrow}</p>
              <h2 className="mt-2 font-display text-[clamp(1.4rem,2.2vw,1.9rem)] font-bold leading-[1.05] tracking-[-0.03em] text-ink">
                {node.label}
              </h2>
              <p className="mt-1 text-[12px] text-muted">{node.ru}</p>
              <p className="mt-4 text-pretty text-[12.5px] leading-relaxed text-[#b9c7d8]">{node.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {node.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line bg-base/35 px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.08em] text-[#93a8c0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {node.id === 'island' ? (
                <div className="mt-5 border-t border-line pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="mono-label-sm">Portfolio dossiers</p>
                    <span className="font-mono text-[9px] text-[#68809f]">03</span>
                  </div>
                  <ul className="mt-2 divide-y divide-line/70">
                    {projects.map((project) => (
                      <li key={project.id}>
                        <Link
                          to="/archive"
                          className="group flex items-center gap-3 py-2.5 no-underline transition-colors"
                        >
                          <span className="font-mono text-[9px] text-accent">{project.index}</span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[11.5px] font-medium text-[#c4d0de] group-hover:text-ink">
                              {project.name}
                            </span>
                            <span className="mt-0.5 block truncate font-mono text-[8px] uppercase tracking-[0.1em] text-[#68809f]">
                              {project.type}
                            </span>
                          </span>
                          <ChevronRight
                            size={12}
                            className="flex-none text-[#4f6684] transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                            aria-hidden="true"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <Link to={node.link.to} className={buttonClass('secondary', 'mt-5 w-full')}>
                {node.link.label}
                <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
              <p className="mono-label">Object index</p>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#68809f]">06 nodes</span>
            </div>
            <div className="p-2">
              <ul className="space-y-1">
                {ecosystemNodes.map((item) => {
                  const Icon = nodeIcons[item.id]
                  const isActive = item.id === selected
                  const isHovered = item.id === hovered
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleSelect(item.id)}
                        onMouseEnter={() => updateHover(item.id)}
                        onMouseLeave={() => updateHover(null)}
                        onFocus={() => updateHover(item.id)}
                        onBlur={() => updateHover(null)}
                        aria-pressed={isActive}
                        className={cn(
                          'group flex min-h-[44px] w-full items-center gap-3 border px-3 py-2 text-left transition-colors',
                          isActive
                            ? 'border-accent/40 bg-accent/8'
                            : isHovered
                              ? 'border-line bg-panel-2/45'
                              : 'border-transparent hover:border-line hover:bg-panel-2/40',
                        )}
                      >
                        <span className={cn('w-5 flex-none font-mono text-[9px]', isActive ? 'text-accent' : 'text-[#5c7392]')}>
                          {item.index}
                        </span>
                        <Icon
                          size={14}
                          strokeWidth={1.7}
                          className={cn('flex-none', isActive ? 'text-accent' : 'text-[#637b99]')}
                          aria-hidden="true"
                        />
                        <span className="min-w-0 flex-1">
                          <span
                            className={cn(
                              'block truncate text-[11.5px] font-medium',
                              isActive ? 'text-ink' : 'text-[#b4c2d4]',
                            )}
                          >
                            {item.label}
                          </span>
                          <span className="mt-0.5 block truncate text-[9.5px] text-[#68809f]">{item.ru}</span>
                        </span>
                        <ChevronRight
                          size={12}
                          className={cn(
                            'flex-none transition-transform',
                            isActive ? 'translate-x-0.5 text-accent' : 'text-[#4f6684]',
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="panel p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="mono-label">Scene notes</p>
              <Boxes size={14} className="text-[#627b9b]" aria-hidden="true" />
            </div>
            <p className="mt-3 text-[11px] leading-relaxed text-[#8fa2b9]">
              Ядро, орбиты, платформы и связи построены процедурно. Архитектурные модели — Kenney City Kit
              (Commercial) и Space Kit, лицензия CC0.
            </p>
            <a
              href="https://kenney.nl/assets"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-muted no-underline transition-colors hover:text-ink"
            >
              kenney.nl / assets
              <ExternalLink size={11} aria-hidden="true" />
            </a>
            <p className="mt-3 border-t border-line pt-3 text-[10px] leading-relaxed text-[#68809f]">
              Сцена — визуальная навигация. Все данные и ссылки доступны в списке объектов и в разделах портфолио.
            </p>
          </div>
        </aside>
      </div>

      <section className="mt-5 grid gap-px border border-line bg-line sm:grid-cols-3 lg:mt-6" aria-label="Три уровня экосистемы">
        {layers.map((layer) => (
          <div key={layer.index} className="bg-base-2/70 p-5">
            <div className="flex items-center justify-between gap-3">
              <p className="mono-label-sm">{layer.label}</p>
              <span className="font-mono text-[9px] text-accent">{layer.index}</span>
            </div>
            <p className="mt-2 font-display text-[15px] font-semibold tracking-[-0.01em] text-[#c8d4e2]">{layer.ru}</p>
            <p className="mt-1 text-[11px] leading-relaxed text-[#7d91aa]">{layer.text}</p>
          </div>
        ))}
      </section>

      <PageFooterNav />
    </div>
  )
}

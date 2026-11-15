import { useState, useMemo, useRef } from 'react'
import { Html, Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { EcosystemModuleNode, EcosystemNode, EcosystemNodeId } from '@/data/ecosystem'
import { moduleNodes } from '@/data/ecosystem'
import { useTintedModel } from '@/three/modelMaterials'

type ProgressRef = { current: { value: number } }

type NodeProps = {
  node: EcosystemNode
  selected: boolean
  hovered: boolean
  onSelect: (id: EcosystemNodeId) => void
  onHover: (id: EcosystemNodeId | null) => void
  progress: ProgressRef
  revealDelay: number
}

type ModuleProps = Omit<NodeProps, 'node'> & {
  node: EcosystemModuleNode
}

function useReveal(progress: ProgressRef, delay: number, baseY: number, active: boolean = false) {
  const ref = useRef<THREE.Group>(null)
  const boost = useRef(0)

  useFrame((_, delta) => {
    const group = ref.current
    if (!group) return

    // Плавный hover-отклик: здание слегка «подпрыгивает» масштабом.
    const targetBoost = active ? 1 : 0
    boost.current += (targetBoost - boost.current) * Math.min(1, delta * 8)

    const value = progress.current?.value ?? 1
    const local = THREE.MathUtils.clamp((value - delay) / 0.55, 0, 1)
    const eased = local * local * (3 - 2 * local)
    const scale = Math.max(0.001, eased * (1 + boost.current * 0.055))

    group.scale.setScalar(scale)
    group.position.y = baseY - (1 - eased) * 3.4 + boost.current * 0.12
    group.visible = eased > 0.002
  })

  return ref
}

function nodeHandlers(node: EcosystemNode, onSelect: NodeProps['onSelect'], onHover: NodeProps['onHover']) {
  return {
    onPointerOver: (event: { stopPropagation: () => void }) => {
      event.stopPropagation()
      onHover(node.id)
    },
    onPointerOut: (event: { stopPropagation: () => void }) => {
      event.stopPropagation()
      onHover(null)
    },
    onClick: (event: { stopPropagation: () => void }) => {
      event.stopPropagation()
      onSelect(node.id)
    },
  }
}

function HitMesh({ radius, height, y = 0 }: { radius: number; height: number; y?: number }) {
  return (
    <mesh position={[0, y, 0]}>
      <cylinderGeometry args={[radius, radius, height, 16]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
    </mesh>
  )
}

function useGlowTexture() {
  return useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const context = canvas.getContext('2d')
    if (!context) return null

    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64)
    gradient.addColorStop(0, 'rgba(180, 212, 255, 0.95)')
    gradient.addColorStop(0.25, 'rgba(71, 140, 255, 0.5)')
    gradient.addColorStop(0.6, 'rgba(71, 140, 255, 0.12)')
    gradient.addColorStop(1, 'rgba(71, 140, 255, 0)')
    context.fillStyle = gradient
    context.fillRect(0, 0, 128, 128)

    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  }, [])
}

/** Голографическая табличка над узлом: индекс + название направления. */
function HoloLabel({ position, index, label, accent = false }: {
  position: [number, number, number]
  index: string
  label: string
  accent?: boolean
}) {
  return (
    <Html position={position} center distanceFactor={16} zIndexRange={[18, 0]}>
      <div
        className="pointer-events-none flex items-center gap-1.5 whitespace-nowrap border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] backdrop-blur-sm"
        style={{
          borderColor: accent ? 'rgba(71,140,255,0.55)' : 'rgba(39,54,75,0.9)',
          background: 'rgba(7,12,21,0.82)',
          color: accent ? '#9cc0ff' : '#8c9aaf',
        }}
      >
        <span style={{ color: '#478cff' }}>{index}</span>
        <span aria-hidden="true" style={{ color: '#27364b' }}>|</span>
        {label}
      </div>
    </Html>
  )
}

/** Расширяющийся сонар-импульс под выбранным узлом. */
function SelectionPulse({ active }: { active: boolean }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const mesh = ref.current
    if (!mesh) return
    const t = (state.clock.elapsedTime % 1.7) / 1.7
    mesh.scale.setScalar(1 + t * 2.1)
    const material = mesh.material as THREE.MeshBasicMaterial
    material.opacity = active ? (1 - t) * 0.45 : 0
    mesh.visible = active
  })

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.3, 0]}>
      <ringGeometry args={[0.92, 1, 64]} />
      <meshBasicMaterial color="#478cff" transparent opacity={0} depthWrite={false} side={THREE.DoubleSide} />
    </mesh>
  )
}

/** Спутник на наклонной орбите вокруг ядра. */
function CoreSatellite({ glow }: { glow: THREE.Texture | null }) {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    const group = ref.current
    if (!group) return
    const t = state.clock.elapsedTime * 0.24
    const radius = 2.55
    group.position.set(
      Math.cos(t) * radius,
      1.35 + Math.sin(t * 0.8) * 0.6,
      Math.sin(t) * radius,
    )
    group.rotation.y = -t * 1.4
    group.rotation.z = 0.4
  })

  return (
    <group ref={ref} scale={0.55}>
      <mesh>
        <boxGeometry args={[0.16, 0.16, 0.16]} />
        <meshStandardMaterial
          color="#8fb4e2"
          metalness={0.45}
          roughness={0.3}
          emissive="#2f6ed0"
          emissiveIntensity={0.55}
        />
      </mesh>
      <mesh position={[0.26, 0, 0]}>
        <boxGeometry args={[0.24, 0.02, 0.11]} />
        <meshStandardMaterial color="#2f4358" metalness={0.6} roughness={0.35} emissive="#478cff" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.26, 0, 0]}>
        <boxGeometry args={[0.24, 0.02, 0.11]} />
        <meshStandardMaterial color="#2f4358" metalness={0.6} roughness={0.35} emissive="#478cff" emissiveIntensity={0.3} />
      </mesh>
      {glow ? (
        <sprite scale={[0.55, 0.55, 1]}>
          <spriteMaterial
            map={glow}
            color="#32d6c5"
            transparent
            opacity={0.4}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
      ) : null}
    </group>
  )
}

function Platform({ active, selected }: { active: boolean; selected: boolean }) {
  return (
    <group>
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[1.76, 1.34, 0.34, 24]} />
        <meshStandardMaterial color="#101c2d" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.23, 0]}>
        <cylinderGeometry args={[1.58, 1.58, 0.04, 32]} />
        <meshStandardMaterial
          color={active ? '#16283e' : '#101c2d'}
          metalness={0.45}
          roughness={0.55}
          emissive={active ? '#0b2138' : '#000000'}
          emissiveIntensity={active ? 0.28 : 0}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.258, 0]}>
        <torusGeometry args={[1.62, 0.016, 6, 84]} />
        <meshBasicMaterial
          color={selected ? '#478cff' : active ? '#32d6c5' : '#35506f'}
          transparent
          opacity={selected ? 0.95 : active ? 0.8 : 0.5}
          depthWrite={false}
        />
      </mesh>
      <mesh position={[0, -0.62, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[1.42, 1.24, 12]} />
        <meshStandardMaterial color="#0b1523" metalness={0.3} roughness={0.72} />
      </mesh>
    </group>
  )
}

export function CoreNode({ node, selected, hovered, onSelect, onHover, progress }: NodeProps) {
  const revealRef = useReveal(progress, 0, 2.35, selected || hovered)
  const ringsRef = useRef<THREE.Group>(null)
  const shellRef = useRef<THREE.Mesh>(null)
  const coreMeshRef = useRef<THREE.Mesh>(null)
  const orbitRef = useRef<THREE.Group>(null)
  const glow = useGlowTexture()
  const active = selected || hovered

  const orbitDots = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 12
        const radius = 1.9 + (index % 3) * 0.06
        return [Math.cos(angle) * radius, Math.sin(angle * 2) * 0.18, Math.sin(angle) * radius] as [
          number,
          number,
          number,
        ]
      }),
    [],
  )

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (ringsRef.current) {
      ringsRef.current.rotation.y = time * 0.18
      ringsRef.current.rotation.x = Math.sin(time * 0.24) * 0.08
    }
    if (shellRef.current) {
      shellRef.current.rotation.y = -time * 0.1
      shellRef.current.rotation.z = time * 0.045
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.y = time * 0.32
    }
    // «Дыхание» ядра: пульсация свечения внутренней сферы.
    const coreMaterial = coreMeshRef.current?.material as THREE.MeshStandardMaterial | undefined
    if (coreMaterial) {
      coreMaterial.emissiveIntensity = 1.0 + Math.sin(time * 1.7) * (active ? 0.42 : 0.22)
    }
  })

  return (
    <group
      ref={revealRef}
      position={[0, 2.35, 0]}
      userData={{ baseY: 2.35 }}
      {...nodeHandlers(node, onSelect, onHover)}
    >
      {glow ? (
        <sprite scale={[5.2, 5.2, 1]}>
          <spriteMaterial
            map={glow}
            transparent
            opacity={active ? 0.52 : 0.3}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            color="#5f97ea"
          />
        </sprite>
      ) : null}

      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.16, 1]} />
        <meshBasicMaterial color="#5278a6" wireframe transparent opacity={active ? 0.55 : 0.28} />
      </mesh>

      <mesh ref={coreMeshRef}>
        <icosahedronGeometry args={[0.56, 1]} />
        <meshStandardMaterial
          color="#8fb4e2"
          emissive="#2f6ed0"
          emissiveIntensity={1.15}
          metalness={0.15}
          roughness={0.28}
        />
      </mesh>

      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.55, 0.012, 6, 96]} />
          <meshBasicMaterial color="#478cff" transparent opacity={0.7} />
        </mesh>
        <mesh rotation={[Math.PI / 2.4, 0.5, 0.2]}>
          <torusGeometry args={[1.9, 0.009, 6, 96]} />
          <meshBasicMaterial color="#32d6c5" transparent opacity={0.5} />
        </mesh>
      </group>

      <group ref={orbitRef}>
        {orbitDots.map((position, index) => (
          <mesh key={index} position={position}>
            <sphereGeometry args={[0.032, 6, 6]} />
            <meshBasicMaterial color={index % 4 === 0 ? '#32d6c5' : '#7fb0ff'} transparent opacity={0.8} />
          </mesh>
        ))}
      </group>

      <CoreSatellite glow={glow} />

      <HoloLabel position={[0, 4.4, 0]} index="00" label="PROJECT ZERO" accent={active} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.15, 0]}>
        <ringGeometry args={[1.42, 1.45, 72]} />
        <meshBasicMaterial
          color={selected ? '#478cff' : active ? '#32d6c5' : '#35506f'}
          transparent
          opacity={selected ? 0.9 : 0.4}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.45, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
      </mesh>

      <pointLight position={[0, 0, 0]} intensity={active ? 6.5 : 3.5} distance={7} color="#478cff" />
    </group>
  )
}

export function ModuleNode({ node, selected, hovered, onSelect, onHover, progress, revealDelay }: ModuleProps) {
  const revealRef = useReveal(progress, revealDelay, 0, selected || hovered)
  const { object } = useTintedModel(node.model, 'city')
  const active = selected || hovered

  return (
    <group
      ref={revealRef}
      position={node.position}
      rotation={[0, Math.atan2(node.position[0], node.position[2]) + Math.PI, 0]}
      userData={{ baseY: 0 }}
      {...nodeHandlers(node, onSelect, onHover)}
    >
      <Platform active={active} selected={selected} />
      <SelectionPulse active={selected} />

      <group position={[0, 0.24, 0]}>
        <primitive object={object} scale={node.scale} />
      </group>

      <HoloLabel position={[0, 3.6, 0]} index={node.index} label={node.label} accent={active} />

      {selected ? (
        <mesh position={[0, 2.3, 0]}>
          <cylinderGeometry args={[0.014, 0.014, 4.4, 6]} />
          <meshBasicMaterial
            color="#478cff"
            transparent
            opacity={0.32}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ) : null}

      <HitMesh radius={2.1} height={3.8} y={1.55} />

      <pointLight position={[0, 2.6, 0]} intensity={active ? 2.4 : 0} distance={5.5} color="#478cff" />
    </group>
  )
}

function TrackRunner({ color, offset = 0 }: { color: string; offset?: number }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const angle = state.clock.elapsedTime * 0.55 + offset
    ref.current.position.set(Math.cos(angle) * 1.64, 0.29, Math.sin(angle) * 1.28)
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[0.07, 0.035, 0.1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

function IslandTrack({ selected }: { selected: boolean }) {
  const points = useMemo(
    () =>
      Array.from({ length: 97 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 96
        return [Math.cos(angle) * 1.64, 0.255, Math.sin(angle) * 1.28] as [number, number, number]
      }),
    [],
  )

  return (
    <group>
      <Line
        points={points}
        color={selected ? '#32d6c5' : '#3d6b8b'}
        lineWidth={1.2}
        transparent
        opacity={selected ? 0.9 : 0.5}
      />
      <TrackRunner color="#32d6c5" />
      <TrackRunner color="#7fb0ff" offset={Math.PI} />
    </group>
  )
}

function IslandDetails() {
  const grid = useMemo(() => {
    const lines: Array<Array<[number, number, number]>> = []
    for (let index = -2; index <= 2; index += 1) {
      const offset = index * 0.78
      lines.push([
        [offset, 0.225, -1.75],
        [offset, 0.225, 1.75],
      ])
      lines.push([
        [-1.75, 0.225, offset],
        [1.75, 0.225, offset],
      ])
    }
    return lines
  }, [])

  return (
    <group>
      {grid.map((points, index) => (
        <Line key={index} points={points} color="#2c4d6d" lineWidth={0.7} transparent opacity={0.22} />
      ))}

      <mesh position={[1.34, 0.26, 1.32]}>
        <boxGeometry args={[0.38, 0.1, 0.22]} />
        <meshStandardMaterial color="#16283c" metalness={0.35} roughness={0.58} />
      </mesh>
      <mesh position={[1.31, 0.34, 1.01]}>
        <boxGeometry args={[0.28, 0.09, 0.19]} />
        <meshStandardMaterial color="#1a3047" metalness={0.35} roughness={0.55} />
      </mesh>
      <mesh position={[-1.38, 0.26, 1.12]}>
        <boxGeometry args={[0.33, 0.09, 0.27]} />
        <meshStandardMaterial color="#16283c" metalness={0.35} roughness={0.58} />
      </mesh>
      <mesh position={[-1.34, 0.33, 0.83]}>
        <boxGeometry args={[0.22, 0.07, 0.17]} />
        <meshStandardMaterial color="#1a3047" metalness={0.35} roughness={0.55} />
      </mesh>

      <mesh position={[-1.31, 0.37, -0.15]}>
        <cylinderGeometry args={[0.13, 0.15, 0.26, 10]} />
        <meshStandardMaterial color="#1c3348" metalness={0.42} roughness={0.5} />
      </mesh>
      <mesh position={[-1.31, 0.505, -0.15]}>
        <cylinderGeometry args={[0.13, 0.13, 0.02, 10]} />
        <meshBasicMaterial color="#32d6c5" transparent opacity={0.55} />
      </mesh>

      <mesh position={[1.02, 0.26, 1.64]}>
        <boxGeometry args={[0.055, 0.055, 0.055]} />
        <meshBasicMaterial color="#32d6c5" />
      </mesh>
      <mesh position={[-1.65, 0.26, -1.28]}>
        <boxGeometry args={[0.045, 0.045, 0.045]} />
        <meshBasicMaterial color="#478cff" />
      </mesh>
    </group>
  )
}

export function PortfolioNode({ node, selected, hovered, onSelect, onHover, progress }: NodeProps) {
  const revealRef = useReveal(progress, 0.24, -3.3, selected || hovered)
  const platform = useTintedModel('island-platform.glb', 'tech')
  const hangar = useTintedModel('factory-hangar.glb', 'tech')
  const chimney = useTintedModel('factory-chimney.glb', 'tech')
  const dish = useTintedModel('tech-dish.glb', 'tech')
  const structure = useTintedModel('tech-structure.glb', 'tech')
  const active = selected || hovered

  return (
    <group
      ref={revealRef}
      position={[-0.8, -3.3, 1.0]}
      userData={{ baseY: -3.3 }}
      {...nodeHandlers(node, onSelect, onHover)}
    >
      <primitive object={platform.object} scale={2.0} />
      <SelectionPulse active={selected} />
      <mesh position={[0, -0.6, 0]}>
        <coneGeometry args={[1.64, 1.15, 7]} />
        <meshStandardMaterial color="#0a1421" metalness={0.28} roughness={0.78} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.225, 0]}>
        <torusGeometry args={[1.94, 0.008, 6, 96]} />
        <meshBasicMaterial
          color={selected ? '#478cff' : active ? '#32d6c5' : '#35506f'}
          transparent
          opacity={selected ? 0.9 : 0.4}
          depthWrite={false}
        />
      </mesh>

      <IslandTrack selected={selected} />
      <IslandDetails />

      <group position={[-0.62, 0.22, 0.12]} rotation={[0, 0.35, 0]}>
        <primitive object={hangar.object} scale={0.58} />
      </group>
      <group position={[1.0, 0.22, -0.53]}>
        <primitive object={chimney.object} scale={0.58} />
      </group>
      <group position={[0.95, 0.22, 0.63]} rotation={[0, -0.4, 0]}>
        <primitive object={dish.object} scale={0.78} />
      </group>
      <group position={[-0.94, 0.22, -0.84]} rotation={[0, 0.6, 0]}>
        <primitive object={structure.object} scale={0.68} />
      </group>

      <HoloLabel position={[0, 2.1, 0]} index="05" label="PORTFOLIO ISLAND" accent={active} />

      <HitMesh radius={2.08} height={1.8} y={0.75} />

      <pointLight position={[0, 1.5, 0]} intensity={active ? 3 : 1.2} distance={5.5} color="#32d6c5" />
    </group>
  )
}

function FlowDot({ from, to, color }: { from: THREE.Vector3; to: THREE.Vector3; color: string }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    const progress = (state.clock.elapsedTime * 0.34) % 1
    ref.current.position.lerpVectors(from, to, progress)
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.042, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.9} />
    </mesh>
  )
}

export function Connections({ selected }: { selected: EcosystemNodeId }) {
  const corePoint = useMemo(() => new THREE.Vector3(0, 1.45, 0), [])
  const islandPoint = useMemo(() => new THREE.Vector3(-0.8, -2.72, 1.0), [])

  return (
    <group>
      {moduleNodes.map((node) => {
        const active = selected === node.id
        const start = new THREE.Vector3(node.position[0], 0.35, node.position[2])
        return (
          <group key={node.id}>
            <Line
              points={[start, corePoint]}
              color={active ? '#478cff' : '#2d4562'}
              lineWidth={active ? 1.5 : 1}
              dashed={!active}
              dashSize={0.18}
              gapSize={0.16}
              transparent
              opacity={active ? 0.95 : 0.5}
            />
            {active ? <FlowDot from={start} to={corePoint} color="#32d6c5" /> : null}
          </group>
        )
      })}

      <Line
        points={[corePoint, islandPoint]}
        color={selected === 'island' ? '#32d6c5' : '#2d4562'}
        lineWidth={selected === 'island' ? 1.5 : 1}
        dashed={selected !== 'island'}
        dashSize={0.18}
        gapSize={0.16}
        transparent
        opacity={selected === 'island' ? 0.95 : 0.45}
      />
      {selected === 'island' ? <FlowDot from={islandPoint} to={corePoint} color="#478cff" /> : null}
    </group>
  )
}

export function GroundRings() {
  const circles = useMemo(
    () =>
      [5.6, 8.6, 12.0].map((radius) =>
        Array.from({ length: 129 }, (_, index) => {
          const angle = (Math.PI * 2 * index) / 128
          return [Math.cos(angle) * radius, -4.55, Math.sin(angle) * radius] as [number, number, number]
        }),
      ),
    [],
  )

  const spokes = useMemo(
    () =>
      Array.from({ length: 8 }, (_, index) => {
        const angle = (Math.PI * 2 * index) / 8
        return [
          [Math.cos(angle) * 3.4, -4.54, Math.sin(angle) * 3.4] as [number, number, number],
          [Math.cos(angle) * 13.2, -4.54, Math.sin(angle) * 13.2] as [number, number, number],
        ]
      }),
    [],
  )

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4.6, 0]}>
        <circleGeometry args={[14, 64]} />
        <meshBasicMaterial color="#0b1a2c" transparent opacity={0.55} depthWrite={false} />
      </mesh>
      {circles.map((points, index) => (
        <Line
          key={index}
          points={points}
          color="#2f4a68"
          lineWidth={1}
          transparent
          opacity={index === 1 ? 0.4 : 0.24}
        />
      ))}
      {spokes.map((points, index) => (
        <Line key={index} points={points} color="#27364b" lineWidth={1} transparent opacity={0.3} />
      ))}
    </group>
  )
}

export function DataMotes() {
  const ref = useRef<THREE.Points>(null)

  // Случайные сиды генерируем один раз в инициализаторе состояния —
  // Math.random в render-пути запрещён правилом react-hooks.
  const [positions] = useState(() => {
    const values = new Float32Array(240 * 3)
    for (let index = 0; index < 240; index += 1) {
      const radius = 8 + Math.random() * 10
      const angle = Math.random() * Math.PI * 2
      values[index * 3] = Math.cos(angle) * radius
      values[index * 3 + 1] = -3 + Math.random() * 10
      values[index * 3 + 2] = Math.sin(angle) * radius
    }
    return values
  })

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.012
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#6e93c4"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  )
}

/** Далёкое звёздное небо: точки на сплюснутой сфере вокруг сцены. */
export function Starfield() {
  const [positions] = useState(() => {
    const count = 1100
    const values = new Float32Array(count * 3)
    for (let index = 0; index < count; index += 1) {
      const radius = 56 + Math.random() * 26
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      values[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
      values[index * 3 + 1] = radius * Math.cos(phi) * 0.55 - 2
      values[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
    }
    return values
  })

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#a9c2e0"
        size={0.42}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        fog={false}
      />
    </points>
  )
}

const DRONE_FROM = new THREE.Vector3(0, 1.7, 0.5)
const DRONE_TO = new THREE.Vector3(-0.8, -2.4, 1.0)

/** Грузовой дрон, курсирующий между ядром и Portfolio Island. */
export function CargoDrone() {
  const ref = useRef<THREE.Group>(null)
  const glow = useGlowTexture()

  useFrame((state) => {
    const group = ref.current
    if (!group) return
    const time = state.clock.elapsedTime
    // Пинг-понг 0 → 1 → 0: дрон летит туда и обратно.
    const phase = Math.abs(((time * 0.11) % 2) - 1)
    group.position.lerpVectors(DRONE_FROM, DRONE_TO, phase)
    group.position.y += Math.sin(time * 1.8) * 0.09
    group.lookAt(DRONE_TO)
  })

  return (
    <group ref={ref} scale={0.9}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <capsuleGeometry args={[0.055, 0.16, 4, 8]} />
        <meshStandardMaterial
          color="#1d2d40"
          metalness={0.55}
          roughness={0.4}
          emissive="#478cff"
          emissiveIntensity={0.45}
        />
      </mesh>
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[0.1, 0.05, 0.06]} />
        <meshStandardMaterial color="#32d6c5" emissive="#32d6c5" emissiveIntensity={0.8} />
      </mesh>
      {glow ? (
        <sprite scale={[0.75, 0.75, 1]}>
          <spriteMaterial
            map={glow}
            color="#32d6c5"
            transparent
            opacity={0.5}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </sprite>
      ) : null}
    </group>
  )
}

import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import type { EcosystemNodeId } from '@/data/ecosystem'
import { getEcosystemNode, moduleNodes } from '@/data/ecosystem'
import { Connections, CoreNode, DataMotes, GroundRings, ModuleNode, PortfolioNode } from '@/three/EcosystemNodes'

type ProgressRef = { current: { value: number } }

type EcosystemSceneProps = {
  selected: EcosystemNodeId
  hovered: EcosystemNodeId | null
  focus: EcosystemNodeId | 'overview'
  resetToken: number
  progress: ProgressRef
  autoRotate: boolean
  reducedMotion: boolean
  onSelect: (id: EcosystemNodeId) => void
  onHover: (id: EcosystemNodeId | null) => void
  onReady: () => void
}

const INTRO_POSITION = new THREE.Vector3(17.6, 13.6, 21.6)
const INTRO_TARGET = new THREE.Vector3(0, 0.9, 0)
const DEFAULT_POSITION = new THREE.Vector3(13.6, 8.8, 16.2)
const DEFAULT_TARGET = new THREE.Vector3(0, -0.45, -0.25)

function getView(id: EcosystemNodeId | 'overview') {
  if (id === 'core') {
    return {
      position: new THREE.Vector3(6.6, 5.4, 8.4),
      target: new THREE.Vector3(0, 2.35, 0),
    }
  }

  if (id === 'island') {
    return {
      position: new THREE.Vector3(5.0, 0.7, 9.0),
      target: new THREE.Vector3(-0.8, -2.75, 1.0),
    }
  }

  if (id === 'overview') {
    return { position: DEFAULT_POSITION.clone(), target: DEFAULT_TARGET.clone() }
  }

  const node = moduleNodes.find((item) => item.id === id)
  if (!node) {
    return { position: DEFAULT_POSITION.clone(), target: DEFAULT_TARGET.clone() }
  }

  const [x, , z] = node.position
  const direction = new THREE.Vector3(x, 0, z).normalize()
  const tangent = new THREE.Vector3(-direction.z, 0, direction.x)
  const position = new THREE.Vector3(x, 0, z)
    .addScaledVector(direction, 7.0)
    .addScaledVector(tangent, 2.4)
    .setY(4.9)

  return {
    position,
    target: new THREE.Vector3(x, 1.3, z),
  }
}

function CameraRig({
  focus,
  resetToken,
  progress,
  controlsRef,
  introCancelled,
  autoRotate,
}: {
  focus: EcosystemNodeId | 'overview'
  resetToken: number
  progress: ProgressRef
  controlsRef: { current: OrbitControlsImpl | null }
  introCancelled: { current: boolean }
  autoRotate: boolean
}) {
  const { camera } = useThree()
  const animation = useRef<{ position: THREE.Vector3; target: THREE.Vector3 } | null>(null)
  const introSettled = useRef(false)

  useEffect(() => {
    if (focus === 'overview' && resetToken === 0) return
    const view = getView(focus)
    animation.current = { position: view.position, target: view.target }
    introCancelled.current = true
  }, [focus, resetToken, introCancelled])

  useFrame((_, delta) => {
    const controls = controlsRef.current
    if (!controls) return

    const value = progress.current?.value ?? 1
    if (focus === 'overview' && !introCancelled.current) {
      if (value < 0.999) {
        const eased = value * value * (3 - 2 * value)
        camera.position.lerpVectors(INTRO_POSITION, DEFAULT_POSITION, eased)
        controls.target.lerpVectors(INTRO_TARGET, DEFAULT_TARGET, eased)
        controls.update()
      } else if (!introSettled.current) {
        camera.position.copy(DEFAULT_POSITION)
        controls.target.copy(DEFAULT_TARGET)
        controls.update()
        introSettled.current = true
      }
    }

    if (animation.current) {
      const alpha = 1 - Math.exp(-4.6 * Math.min(delta, 0.08))
      camera.position.lerp(animation.current.position, alpha)
      controls.target.lerp(animation.current.target, alpha)
      controls.update()

      if (
        camera.position.distanceTo(animation.current.position) < 0.03 &&
        controls.target.distanceTo(animation.current.target) < 0.03
      ) {
        camera.position.copy(animation.current.position)
        controls.target.copy(animation.current.target)
        controls.update()
        animation.current = null
      }
      return
    }

    if (autoRotate) controls.update()
  })

  return null
}

function SceneContent({
  selected,
  hovered,
  focus,
  resetToken,
  progress,
  autoRotate,
  onSelect,
  onHover,
  onReady,
}: Omit<EcosystemSceneProps, 'reducedMotion'>) {
  const controlsRef = useRef<OrbitControlsImpl>(null)
  const introCancelled = useRef(false)
  const announced = useRef(false)

  useEffect(() => {
    if (announced.current) return
    announced.current = true
    onReady()
  }, [onReady])

  return (
    <>
      <color attach="background" args={['#070c15']} />
      <fog attach="fog" args={['#080d18', 22, 52]} />

      <ambientLight intensity={0.32} color="#93aed2" />
      <hemisphereLight args={['#bddaff', '#070d18', 0.45]} />
      <directionalLight position={[10, 15, 8]} intensity={1.7} color="#dbe8ff" />
      <directionalLight position={[-9, 7, -10]} intensity={0.7} color="#478cff" />
      <pointLight position={[0, 2.3, 0]} intensity={5.5} distance={9} color="#478cff" />
      <pointLight position={[0, -3.2, -0.8]} intensity={4} distance={8} color="#32d6c5" />

      <CameraRig
        focus={focus}
        resetToken={resetToken}
        progress={progress}
        controlsRef={controlsRef}
        introCancelled={introCancelled}
        autoRotate={autoRotate}
      />

      <CoreNode
        node={getEcosystemNode('core')}
        selected={selected === 'core'}
        hovered={hovered === 'core'}
        onSelect={onSelect}
        onHover={onHover}
        progress={progress}
        revealDelay={0}
      />

      {moduleNodes.map((node, index) => (
        <ModuleNode
          key={node.id}
          node={node}
          selected={selected === node.id}
          hovered={hovered === node.id}
          onSelect={onSelect}
          onHover={onHover}
          progress={progress}
          revealDelay={0.08 + index * 0.06}
        />
      ))}

      <PortfolioNode
        node={getEcosystemNode('island')}
        selected={selected === 'island'}
        hovered={hovered === 'island'}
        onSelect={onSelect}
        onHover={onHover}
        progress={progress}
        revealDelay={0.34}
      />

      <Connections selected={selected} />
      <GroundRings />
      <DataMotes />

      <OrbitControls
        ref={controlsRef}
        makeDefault
        target={[0, -0.45, -0.25]}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        minDistance={6}
        maxDistance={28}
        minPolarAngle={0.22}
        maxPolarAngle={1.48}
        autoRotate={autoRotate}
        autoRotateSpeed={0.32}
        onStart={() => {
          introCancelled.current = true
        }}
      />
    </>
  )
}

export function EcosystemScene(props: EcosystemSceneProps) {
  return (
    <Canvas
      dpr={props.reducedMotion ? [1, 1.25] : [1, 1.75]}
      gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
      camera={{ position: [INTRO_POSITION.x, INTRO_POSITION.y, INTRO_POSITION.z], fov: 40, near: 0.1, far: 90 }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.toneMappingExposure = 0.94
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        <SceneContent {...props} />
      </Suspense>
    </Canvas>
  )
}

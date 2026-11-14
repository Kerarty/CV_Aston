import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export const MODEL_BASE = `${import.meta.env.BASE_URL}assets/models/`

export type ModelKind = 'city' | 'tech'

export type TintedModel = {
  object: THREE.Group
  size: THREE.Vector3
}

const techPalette: Record<
  string,
  {
    color: string
    metalness: number
    roughness: number
    emissive?: string
    emissiveIntensity?: number
  }
> = {
  metal: { color: '#2f4358', metalness: 0.58, roughness: 0.55 },
  metalDark: { color: '#1d2d40', metalness: 0.52, roughness: 0.6 },
  dark: { color: '#0a1420', metalness: 0.32, roughness: 0.74 },
  metalRed: {
    color: '#1f7a75',
    metalness: 0.32,
    roughness: 0.46,
    emissive: '#052825',
    emissiveIntensity: 0.18,
  },
  _defaultMat: {
    color: '#4a7396',
    metalness: 0.38,
    roughness: 0.48,
    emissive: '#0d2a49',
    emissiveIntensity: 0.22,
  },
}

function createCityMaterial(source: THREE.Material | null) {
  const map = source && 'map' in source ? ((source as THREE.MeshStandardMaterial).map ?? null) : null

  return new THREE.MeshStandardMaterial({
    map,
    color: new THREE.Color('#8fa5c0'),
    metalness: 0.08,
    roughness: 0.8,
    emissive: new THREE.Color('#0a1b2d'),
    emissiveMap: map,
    emissiveIntensity: 0.3,
  })
}

function createTechMaterial(source: THREE.Material | null) {
  const key = source?.name ?? 'metal'
  const spec = techPalette[key] ?? techPalette.metal

  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(spec.color),
    metalness: spec.metalness,
    roughness: spec.roughness,
    emissive: spec.emissive ? new THREE.Color(spec.emissive) : new THREE.Color('#000000'),
    emissiveIntensity: spec.emissiveIntensity ?? 0,
  })
}

export function useTintedModel(file: string, kind: ModelKind): TintedModel {
  const { scene } = useGLTF(`${MODEL_BASE}${file}`)

  return useMemo(() => {
    const object = scene.clone(true)

    object.traverse((child) => {
      const mesh = child as THREE.Mesh
      if (!mesh.isMesh) return

      const source = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material
      mesh.material = kind === 'city' ? createCityMaterial(source) : createTechMaterial(source)
      mesh.castShadow = false
      mesh.receiveShadow = false
    })

    object.updateMatrixWorld(true)
    const box = new THREE.Box3().setFromObject(object)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())

    // Bake the centering offset into the root children instead of the root itself,
    // so later uniform scaling does not shift the model away from its origin.
    object.position.set(0, 0, 0)
    object.rotation.set(0, 0, 0)
    object.scale.set(1, 1, 1)

    for (const child of object.children) {
      child.position.x -= center.x
      child.position.y -= box.min.y
      child.position.z -= center.z
    }

    object.updateMatrixWorld(true)

    return { object, size }
  }, [scene, kind])
}

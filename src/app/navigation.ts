import type { LucideIcon } from 'lucide-react'
import {
  Boxes,
  BriefcaseBusiness,
  Flag,
  FlaskConical,
  FolderArchive,
  LayoutDashboard,
  Target,
  UserRound,
} from 'lucide-react'

export type Section = {
  id: string
  number: string
  path: string
  label: string
  ru: string
  title: string
  description: string
  icon: LucideIcon
}

export const sections: Section[] = [
  {
    id: 'command',
    number: '01',
    path: '/',
    label: 'Command Center',
    ru: 'Центр управления',
    title: 'Command Center',
    description: 'Главный экран и карта проекта',
    icon: LayoutDashboard,
  },
  {
    id: 'profile',
    number: '02',
    path: '/profile',
    label: 'Candidate Profile',
    ru: 'Профиль кандидата',
    title: 'Candidate Profile',
    description: 'Образование, интересы и подход',
    icon: UserRound,
  },
  {
    id: 'leadership',
    number: '03',
    path: '/leadership',
    label: 'Leadership',
    ru: 'Лидерский опыт',
    title: 'Leadership',
    description: 'Организация и координация',
    icon: Flag,
  },
  {
    id: 'archive',
    number: '04',
    path: '/archive',
    label: 'Project Archive',
    ru: 'Архив проектов',
    title: 'Project Archive',
    description: 'Проектные досье',
    icon: FolderArchive,
  },
  {
    id: 'lab',
    number: '05',
    path: '/lab',
    label: 'Management Lab',
    ru: 'Лаборатория решений',
    title: 'Management Lab',
    description: 'Симулятор принятия решений',
    icon: FlaskConical,
  },
  {
    id: 'workspace',
    number: '06',
    path: '/workspace',
    label: 'Executive Workspace',
    ru: 'Рабочие инструменты',
    title: 'Executive Workspace',
    description: 'Технологии и организация работы',
    icon: BriefcaseBusiness,
  },
  {
    id: 'aston',
    number: '07',
    path: '/aston',
    label: 'ASTON Integration',
    ru: 'Направления ASTON',
    title: 'ASTON Integration',
    description: 'Соответствие направлениям программы',
    icon: Target,
  },
  {
    id: 'ecosystem',
    number: '08',
    path: '/ecosystem',
    label: '3D Project Ecosystem',
    ru: '3D-экосистема',
    title: '3D Project Ecosystem',
    description: 'Пространственная модель проектов',
    icon: Boxes,
  },
]

export const contactSection: Section = {
  id: 'contact',
  number: '09',
  path: '/contact',
  label: 'Contact',
  ru: 'Контакты',
  title: 'Final Message',
  description: 'Финальный экран и контакты',
  icon: Flag,
}

export const presentationOrder = [...sections.map((section) => section.path), contactSection.path]

export function getSectionByPath(pathname: string): Section {
  return sections.find((section) => section.path === pathname) ?? contactSection
}

export function getAdjacentSection(pathname: string, direction: -1 | 1): Section {
  const index = presentationOrder.indexOf(pathname)
  const safeIndex = index === -1 ? 0 : index
  const nextIndex = (safeIndex + direction + presentationOrder.length) % presentationOrder.length
  const path = presentationOrder[nextIndex]
  return path === contactSection.path ? contactSection : getSectionByPath(path)
}

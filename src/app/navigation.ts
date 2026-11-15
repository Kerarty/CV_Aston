import type { LucideIcon } from 'lucide-react'
import type { LocalText } from '@/i18n/language'
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
  description: LocalText
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
    description: {
      ru: 'Главный экран и карта проекта',
      en: 'Home screen and project map',
    },
    icon: LayoutDashboard,
  },
  {
    id: 'profile',
    number: '02',
    path: '/profile',
    label: 'Candidate Profile',
    ru: 'Профиль кандидата',
    title: 'Candidate Profile',
    description: {
      ru: 'Образование, интересы и подход',
      en: 'Education, interests and approach',
    },
    icon: UserRound,
  },
  {
    id: 'leadership',
    number: '03',
    path: '/leadership',
    label: 'Leadership',
    ru: 'Лидерский опыт',
    title: 'Leadership',
    description: {
      ru: 'Организация и координация',
      en: 'Organization and coordination',
    },
    icon: Flag,
  },
  {
    id: 'archive',
    number: '04',
    path: '/archive',
    label: 'Project Archive',
    ru: 'Архив проектов',
    title: 'Project Archive',
    description: {
      ru: 'Проектные досье',
      en: 'Project dossiers',
    },
    icon: FolderArchive,
  },
  {
    id: 'lab',
    number: '05',
    path: '/lab',
    label: 'Management Lab',
    ru: 'Лаборатория решений',
    title: 'Management Lab',
    description: {
      ru: 'Симулятор принятия решений',
      en: 'Decision-making simulator',
    },
    icon: FlaskConical,
  },
  {
    id: 'workspace',
    number: '06',
    path: '/workspace',
    label: 'Executive Workspace',
    ru: 'Рабочие инструменты',
    title: 'Executive Workspace',
    description: {
      ru: 'Технологии и организация работы',
      en: 'Tools and working practices',
    },
    icon: BriefcaseBusiness,
  },
  {
    id: 'aston',
    number: '07',
    path: '/aston',
    label: 'ASTON Integration',
    ru: 'Направления ASTON',
    title: 'ASTON Integration',
    description: {
      ru: 'Соответствие направлениям программы',
      en: 'Fit with the programme directions',
    },
    icon: Target,
  },
  {
    id: 'ecosystem',
    number: '08',
    path: '/ecosystem',
    label: '3D Project Ecosystem',
    ru: '3D-экосистема',
    title: '3D Project Ecosystem',
    description: {
      ru: 'Пространственная модель проектов',
      en: 'Spatial model of the portfolio',
    },
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
  description: {
    ru: 'Финальный экран и контакты',
    en: 'Final screen and contacts',
  },
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

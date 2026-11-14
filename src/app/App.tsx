import { lazy } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { CommandCenter } from '@/sections/CommandCenter/CommandCenter'

// Главная секция — eager (мгновенный первый экран), остальные грузим по маршруту.
const CandidateProfile = lazy(() => import('@/sections/CandidateProfile/CandidateProfile').then((m) => ({ default: m.CandidateProfile })))
const Leadership = lazy(() => import('@/sections/Leadership/Leadership').then((m) => ({ default: m.Leadership })))
const ProjectArchive = lazy(() => import('@/sections/ProjectArchive/ProjectArchive').then((m) => ({ default: m.ProjectArchive })))
const ManagementLab = lazy(() => import('@/sections/ManagementLab/ManagementLab').then((m) => ({ default: m.ManagementLab })))
const ExecutiveWorkspace = lazy(() => import('@/sections/ExecutiveWorkspace/ExecutiveWorkspace').then((m) => ({ default: m.ExecutiveWorkspace })))
const AstonIntegration = lazy(() => import('@/sections/AstonIntegration/AstonIntegration').then((m) => ({ default: m.AstonIntegration })))
const ProjectEcosystem = lazy(() => import('@/sections/ProjectEcosystem/ProjectEcosystem'))
const Contact = lazy(() => import('@/sections/Contact/Contact').then((m) => ({ default: m.Contact })))

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<CommandCenter />} />
          <Route path="profile" element={<CandidateProfile />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="archive" element={<ProjectArchive />} />
          <Route path="lab" element={<ManagementLab />} />
          <Route path="workspace" element={<ExecutiveWorkspace />} />
          <Route path="aston" element={<AstonIntegration />} />
          <Route path="ecosystem" element={<ProjectEcosystem />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

import { lazy } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { CommandCenter } from '@/sections/CommandCenter/CommandCenter'
import { CandidateProfile } from '@/sections/CandidateProfile/CandidateProfile'
import { Leadership } from '@/sections/Leadership/Leadership'
import { ProjectArchive } from '@/sections/ProjectArchive/ProjectArchive'
import { ManagementLab } from '@/sections/ManagementLab/ManagementLab'
import { ExecutiveWorkspace } from '@/sections/ExecutiveWorkspace/ExecutiveWorkspace'
import { AstonIntegration } from '@/sections/AstonIntegration/AstonIntegration'
import { Contact } from '@/sections/Contact/Contact'

const ProjectEcosystem = lazy(() => import('@/sections/ProjectEcosystem/ProjectEcosystem'))

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

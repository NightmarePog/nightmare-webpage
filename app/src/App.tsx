import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './components/ui/pages/LandingPage'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

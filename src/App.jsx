import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DropPage from './pages/DropPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drop/:id" element={<DropPage />} />
    </Routes>
  )
}

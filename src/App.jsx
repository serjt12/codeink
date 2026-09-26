import { Routes, Route } from 'react-router-dom'
import { ExchangeRateProvider } from './context/ExchangeRateContext.jsx'
import Home from './pages/Home.jsx'
import DropPage from './pages/DropPage.jsx'

export default function App() {
  return (
    <ExchangeRateProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drop/:id" element={<DropPage />} />
      </Routes>
    </ExchangeRateProvider>
  )
}

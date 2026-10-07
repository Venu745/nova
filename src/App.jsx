import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import AboutSection from './pages/AboutSection'
import Features from './pages/Features'
import HowitWorks from './pages/HowitWorks'
import Solutions from './pages/Solutions'
import FinancialCTA from './pages/FinancialCTA'
import Planes from './pages/Planes'
import FAQ from './pages/FAQ'
import TrustedBy from './pages/TrustedBy'
import Login from './pages/Login'
import AIChat from './components/AIChart'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutSection/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/how-it-works' element={<HowitWorks/>} />
        <Route path='/pricing' element={<Planes/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/about' element={<AboutSection/>} />
        <Route path='/connections' element={<TrustedBy/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <AIChat/>
    </div>
  )
}

export default App
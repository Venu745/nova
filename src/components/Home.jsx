import React from 'react'
import Hero from '../pages/Hero'
import TrustedBy from '../pages/TrustedBy'
import Features from '../pages/Features'
import Planes from '../pages/Planes'
import AboutSection from '../pages/AboutSection'
import HowitWorks from '../pages/HowitWorks'
import Statistics from '../pages/Statistics'
import Testimonials from '../pages/Testimonials'
import FAQ from '../pages/FAQ'
import FinancialCTA from '../pages/FinancialCTA'
import Footer from '../pages/Footer'
import Solutions from '../pages/Solutions'

const Home = () => {
  return (
    <div>
      <Hero/>
      <TrustedBy/>
      <Features/>
      <AboutSection/>
      <HowitWorks/>
      <Statistics/>
      <Solutions/>
      <Testimonials/>
      <Planes/>
      <FAQ/>
      <FinancialCTA/>
      <Footer/>
    </div>
  )
}

export default Home

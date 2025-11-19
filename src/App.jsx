import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Technologies from './components/Technologies'
import { CTA1, CTA2 } from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App(){
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0b0f19' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <CTA1 />
      <Process />
      <Pricing />
      <Testimonials />
      <CTA2 />
      <Technologies />
      <Contact />
      <Footer />
      <a href="#home" className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-800/70 backdrop-blur-md border border-white/10 text-white">↑</a>
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
    </div>
  )
}

export default App

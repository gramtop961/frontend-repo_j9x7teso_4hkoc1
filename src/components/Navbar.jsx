import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/5' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-white font-bold tracking-tight text-lg">DevAura</a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="relative text-slate-200 hover:text-white transition group">
                <span>{item.label}</span>
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="px-4 py-2 rounded-full text-white font-medium shadow-[0_0_25px_rgba(37,99,235,0.35)]" style={{ background: 'linear-gradient(90deg,#06b6d4,#2563eb)' }}>
              Get Quote
            </a>
          </div>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
            <div className="px-6 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a onClick={() => setOpen(false)} key={item.href} href={item.href} className="text-slate-200 hover:text-white py-2">
                  {item.label}
                </a>
              ))}
              <a onClick={() => setOpen(false)} href="#contact" className="mt-2 px-4 py-2 rounded-full text-white text-center font-medium" style={{ background: 'linear-gradient(90deg,#06b6d4,#2563eb)' }}>
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

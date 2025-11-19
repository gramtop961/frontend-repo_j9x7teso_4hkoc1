import React, { useEffect, useMemo, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start','end start'] })

  const orbX = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const orbY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const hue = useTransform(scrollYProgress, [0, 1], [0, 45])

  useEffect(() => {
    const root = document.documentElement
    const unsub = hue.on('change', (v) => root.style.setProperty('--hero-hue', `${v}deg`))
    return () => unsub()
  }, [hue])

  const headline = 'Building Experiences That Feel Alive.'
  const letters = useMemo(() => headline.split(''), [headline])

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0b0f19' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-80" style={{ background: 'linear-gradient(115deg,#2563eb,#7c3aed,#06b6d4)', filter: 'url(#noiseFilter)' }} />
        <motion.div style={{ x: orbX, y: orbY }} className="absolute inset-0">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.2),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-cyan-300/80 mb-4">
          ⚡ React • Next.js • Tailwind • AI Chatbots • Voice Bots
        </motion.p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
          {letters.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, rotateX: 45, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ delay: 0.02 * i, duration: 0.5, ease: 'easeOut' }}
              className="inline-block will-change-transform">
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-6 text-lg md:text-2xl text-slate-300">
          Modern, responsive, and AI-powered websites that convert.
        </motion.p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href="#portfolio" className="px-6 py-3 rounded-full text-white font-semibold shadow-[0_0_35px_rgba(59,130,246,0.35)]" style={{ background: 'linear-gradient(115deg,#2563eb,#7c3aed,#06b6d4)' }}>
            View My Work
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} href="#contact" className="px-6 py-3 rounded-full text-sky-300 border border-sky-400/40 hover:bg-sky-400/10 transition">
            Start Your Project
          </motion.a>
        </div>
      </div>

      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" />
          </feComponentTransfer>
        </filter>
      </svg>
    </section>
  )
}

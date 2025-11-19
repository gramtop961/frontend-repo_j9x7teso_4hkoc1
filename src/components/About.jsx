import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Grid, Component } from 'lucide-react'

export default function About(){
  const paragraphs = [
    'I craft high-conversion websites that merge aesthetics with measurable results.',
    'From landing pages to complex web apps, everything is built mobile-first and blazing fast.',
    'I integrate AI chatbots and voice bots to automate lead capture and support.',
    'Every build is SEO-aware, accessible, and optimized for performance.'
  ]

  return (
    <section id="about" className="relative py-24" style={{ backgroundColor: '#0b0f19' }}>
      <div className="absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About</h2>
          <div className="space-y-4 text-slate-300">
            {paragraphs.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>{p}</motion.p>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-6">
          {[Code2, Zap, Grid, Component].map((Icon, i) => (
            <motion.div key={i} initial={{ rotate: -10, opacity: 0, y: 20 }} whileInView={{ rotate: 0, opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="p-6 rounded-2xl bg-slate-800/40 border border-white/10 text-center backdrop-blur-md">
              <Icon className="w-10 h-10 mx-auto text-cyan-300" />
              <p className="text-slate-300 mt-2">Premium Builds</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

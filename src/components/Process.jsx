import React from 'react'
import { motion } from 'framer-motion'
import { Compass, PenTool, Code2, Bug, Rocket } from 'lucide-react'

const steps = [
  { icon: Compass, title: 'Discovery & Planning', desc: 'Clarify goals, audience, and success metrics.' },
  { icon: PenTool, title: 'Design & Mockup', desc: 'Wireframes to polished visual concepts.' },
  { icon: Code2, title: 'Development', desc: 'Clean, scalable, and testable code.' },
  { icon: Bug, title: 'Testing & Refinement', desc: 'Cross-device QA and performance tuning.' },
  { icon: Rocket, title: 'Launch & Support', desc: 'Deploy, monitor, and support.' },
]

export default function Process(){
  return (
    <section id="process" className="relative py-24" style={{ backgroundColor: '#0b0f19' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-10">Process</h2>
        <div className="relative">
          <motion.div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ transformOrigin: 'top' }} />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial={{ x: i % 2 ? 50 : -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="ml-10 p-6 rounded-2xl bg-slate-800/40 border border-white/10 text-white backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <s.icon className="w-6 h-6 text-cyan-300" />
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>
                <p className="text-slate-300 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

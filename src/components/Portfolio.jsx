import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { name: 'Aadaram Café', cat: 'Restaurant Website', desc: 'Delightful, conversion-ready menu-first experience.', tags: ['React','Tailwind','SEO'], link: '#' },
  { name: 'Aesthetic Clinic', cat: 'Medical Website', desc: 'Clean, credible, and appointment-driven.', tags: ['Next.js','Tailwind','Forms'], link: '#' },
  { name: 'Gritty Gaming Café', cat: 'Gaming Website', desc: 'High-energy visuals with membership promos.', tags: ['React','Tailwind','Motion'], link: '#' },
  { name: 'Twelve7 Salon', cat: 'Salon Website', desc: 'Elegant, glossy, and booking-focused.', tags: ['React','Tailwind','SEO'], link: '#' },
  { name: 'InkThrive SEO', cat: 'Agency Website', desc: 'Authority-focused layouts built for trust.', tags: ['Next.js','Tailwind','Blog'], link: '#' },
]

export default function Portfolio(){
  return (
    <section id="portfolio" className="relative py-24" style={{ backgroundColor: '#0b0f19' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-10">Work That Delivers Results.</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-slate-800/40 border border-white/10 text-white backdrop-blur-md relative overflow-hidden">
              <motion.div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.35),rgba(124,58,237,0.35))' }} animate={{ backgroundPosition: ['0% 0%','100% 100%'] }} transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror' }} />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <p className="text-slate-300">{p.cat}</p>
                </div>
                <a href={p.link} className="px-3 py-1 rounded-full border border-white/20 text-slate-200 hover:bg-white/10">View Live Site</a>
              </div>
              <p className="mt-3 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-slate-900/50 border border-white/10">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

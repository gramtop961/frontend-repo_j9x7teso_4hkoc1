import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Rohan', text: 'The new site doubled our leads within a month. Super smooth process.', stars: 5 },
  { name: 'Aisha', text: 'Incredible attention to detail and speed. Our salon bookings shot up.', stars: 5 },
  { name: 'Vikram', text: 'Voice bot handles 70% of calls now. Game changer for support.', stars: 5 },
  { name: 'Meera', text: 'SEO improvements placed us on page one. Great ROI.', stars: 5 },
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="relative py-24" style={{ backgroundColor: '#0b0f19' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ rotateY: i % 2 ? 30 : -30, opacity: 0 }} whileInView={{ rotateY: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-2xl bg-slate-800/40 border border-white/10 text-white backdrop-blur-md">
              <div className="flex items-center gap-2">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-amber-400">★</span>
                ))}
              </div>
              <p className="mt-3 text-slate-200">“{t.text}”</p>
              <p className="mt-2 text-slate-400 text-sm">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

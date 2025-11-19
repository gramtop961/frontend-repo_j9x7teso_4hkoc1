import React from 'react'
import { motion } from 'framer-motion'
import { Salad, Scissors, Stethoscope, ShoppingCart, Search, Boxes } from 'lucide-react'

const services = [
  { icon: Salad, title: 'Restaurant & Café Websites' },
  { icon: Scissors, title: 'Salon & Beauty Websites' },
  { icon: Stethoscope, title: 'Medical & Healthcare Websites' },
  { icon: ShoppingCart, title: 'E-commerce Solutions' },
  { icon: Search, title: 'SEO-Optimized Websites' },
  { icon: Boxes, title: 'Custom Web Applications' },
]

export default function Services(){
  return (
    <section id="services" className="relative py-24" style={{ backgroundColor: '#0b0f19' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-10">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ rotateY: i % 2 ? 90 : -90, opacity: 0 }} whileInView={{ rotateY: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group p-6 rounded-2xl bg-slate-800/40 border border-white/10 backdrop-blur-md text-white will-change-transform">
              <s.icon className="w-10 h-10 text-cyan-300" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300">Conversion-focused design with modern tech.</p>
              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-24 transition-all"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

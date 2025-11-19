import React from 'react'
import { motion } from 'framer-motion'

export function CTA1(){
  return (
    <section className="relative py-20 text-center" style={{ backgroundColor: '#0b0f19' }}>
      <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-transparent text-3xl md:text-5xl font-extrabold bg-clip-text" style={{ backgroundImage: 'linear-gradient(115deg,#2563eb,#7c3aed,#06b6d4)'}}>
        Ready to Transform Your Business Online?
      </motion.h3>
      <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="mt-6 inline-block px-6 py-3 rounded-full text-white font-semibold shadow-[0_0_35px_rgba(59,130,246,0.35)]" style={{ background: 'linear-gradient(90deg,#06b6d4,#2563eb)'}}>
        Get Free Quote
      </motion.a>
    </section>
  )
}

export function CTA2(){
  return (
    <section className="relative py-20 text-center" style={{ backgroundColor: '#0b0f19' }}>
      <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-transparent text-3xl md:text-5xl font-extrabold bg-clip-text" style={{ backgroundImage: 'linear-gradient(115deg,#2563eb,#7c3aed,#06b6d4)'}}>
        Let’s Build Something Extraordinary
      </motion.h3>
      <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="mt-6 inline-block px-6 py-3 rounded-full text-white font-semibold shadow-[0_0_35px_rgba(59,130,246,0.35)]" style={{ background: 'linear-gradient(90deg,#06b6d4,#2563eb)'}}>
        Start Your Project Now
      </motion.a>
    </section>
  )
}

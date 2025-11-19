import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="relative pt-16 pb-8" style={{ backgroundColor: '#0b0f19' }}>
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-slate-300">
        {['Brand / About','Quick Links','Services','Contact'].map((title, i) => (
          <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <h4 className="text-white font-semibold mb-3">{title}</h4>
            <ul className="space-y-2">
              <li className="hover:text-white transition">Premium, high-conversion builds.</li>
              <li className="hover:text-white transition">Websites • AI Chatbots • Voice Bots</li>
              <li className="hover:text-white transition">hello@devaura.studio</li>
              <li className="hover:text-white transition">India</li>
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center text-slate-500">© 2025 | Built with ❤️ in India.</div>
    </footer>
  )
}

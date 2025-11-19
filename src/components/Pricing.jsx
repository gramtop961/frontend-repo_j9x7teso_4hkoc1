import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const Price = ({ value, prefix = '₹' }) => {
  const [display, setDisplay] = useState(0)
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const duration = 1200
    const startTime = performance.now()
    const step = (now) => {
      const p = Math.min(1, (now - startTime) / duration)
      setDisplay(Math.floor(prefix ? p * end : p * end))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, prefix])
  return <span ref={ref}>{prefix}{display.toLocaleString()}</span>
}

export default function Pricing(){
  return (
    <section id="pricing" className="relative py-24" style={{ backgroundColor: '#0b0f19' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-10">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Starter */}
          <motion.div initial={{ rotateX: -45, opacity: 0 }} whileInView={{ rotateX: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="p-6 rounded-2xl bg-slate-800/40 border border-white/10 text-white backdrop-blur-md">
            <h3 className="text-2xl font-semibold">Starter</h3>
            <p className="text-slate-300">Landing Page</p>
            <p className="mt-4 text-4xl font-bold"><Price value={8000} /></p>
            <ul className="mt-4 text-slate-300 space-y-2 text-sm">
              <li>1 page, responsive design, basic SEO, contact form</li>
              <li>1-month support, 3–5 day delivery</li>
            </ul>
            <div className="mt-4 text-slate-200 text-sm">
              <p className="font-semibold">Add AI Chatbot: +₹7,999 (Total ₹15,999)</p>
              <p>Smart chatbot trained for brand FAQs & lead handling.</p>
              <p>Integrated into landing page with custom branding & tone.</p>
              <p className="opacity-80">No voice bot available in Starter.</p>
            </div>
          </motion.div>
          {/* Professional */}
          <motion.div initial={{ rotateX: -45, opacity: 0 }} whileInView={{ rotateX: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative p-6 rounded-2xl bg-slate-800/60 border border-cyan-400/30 text-white backdrop-blur-md shadow-[0_0_40px_rgba(6,182,212,0.25)]">
            <div className="absolute -top-3 right-4 px-2 py-1 text-xs rounded-full bg-cyan-400/20 border border-cyan-300/30 text-cyan-200">Recommended</div>
            <h3 className="text-2xl font-semibold">Professional</h3>
            <p className="text-slate-300">5–6 Page Business Website</p>
            <p className="mt-4 text-4xl font-bold"><Price value={26999} /></p>
            <ul className="mt-4 text-slate-300 space-y-2 text-sm">
              <li>Multi-page site, responsive, SEO, WhatsApp integration</li>
              <li>Contact forms, 1-month support</li>
            </ul>
            <div className="mt-4 text-slate-200 text-sm space-y-1">
              <p><span className="font-semibold">Add AI Chatbot:</span> +₹8,000 (Total ₹35,000)</p>
              <p><span className="font-semibold">Add AI Voice Bot (Basic):</span> ₹18,000 one-time + ₹8/min usage</p>
              <p>Advanced Voice Bot: ₹30,000 — booking, CRM entry, emails.</p>
            </div>
          </motion.div>
          {/* Business */}
          <motion.div initial={{ rotateX: -45, opacity: 0 }} whileInView={{ rotateX: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="p-6 rounded-2xl bg-slate-800/40 border border-white/10 text-white backdrop-blur-md">
            <h3 className="text-2xl font-semibold">Business / Custom</h3>
            <p className="text-slate-300">Custom Quote</p>
            <p className="mt-4 text-slate-300 text-sm">Unlimited pages, advanced features, full automation & CRM integration. Includes custom AI chatbot + voice bot.</p>
          </motion.div>
        </div>
        <div className="mt-6 text-slate-300 text-sm p-4 rounded-xl bg-slate-800/30 border border-white/10">
          <p className="font-semibold text-white">Support Terms</p>
          <p>All websites include 1-month free support covering minor text/image updates, bug fixes & performance tuning, and basic technical assistance. After 1 month, optional paid maintenance is available.</p>
        </div>
      </div>
    </section>
  )
}

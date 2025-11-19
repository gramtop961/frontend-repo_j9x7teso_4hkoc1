import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', type: '', budget: '', details: '', timeline: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    const message = `Hi! I want to start a project.\n\nName: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nEmail: ${form.email}\nWebsite Type: ${form.type}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\nDetails: ${form.details}`
    const url = `https://wa.me/919315435356?text=${encodeURIComponent(message)}`
    setTimeout(() => {
      setStatus('sent')
      window.location.href = url
    }, 900)
  }

  return (
    <section id="contact" className="relative py-24" style={{ backgroundColor: '#0b0f19' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-10 text-center">Let’s Build Your Website.</h2>
        <motion.form onSubmit={handleSubmit} initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }} whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-4 p-6 rounded-2xl bg-slate-800/40 border border-white/10 text-white backdrop-blur-md">
          {[
            { name: 'name', label: 'Name' },
            { name: 'business', label: 'Business Name' },
            { name: 'phone', label: 'Phone' },
            { name: 'email', label: 'Email' },
            { name: 'type', label: 'Website Type' },
            { name: 'budget', label: 'Budget' },
          ].map((f, i) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <label className="text-slate-300 text-sm">{f.label}</label>
              <input required name={f.name} value={form[f.name]} onChange={handleChange} className="mt-1 w-full px-3 py-2 bg-slate-900/60 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </motion.div>
          ))}
          <div className="md:col-span-2">
            <label className="text-slate-300 text-sm">Project Details</label>
            <textarea required name="details" value={form.details} onChange={handleChange} rows={4} className="mt-1 w-full px-3 py-2 bg-slate-900/60 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <div className="md:col-span-2">
            <label className="text-slate-300 text-sm">Timeline</label>
            <input required name="timeline" value={form.timeline} onChange={handleChange} className="mt-1 w-full px-3 py-2 bg-slate-900/60 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <div className="md:col-span-2 flex items-center justify-center mt-2">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" className="px-6 py-3 rounded-full font-semibold text-white" style={{ background: 'linear-gradient(90deg,#06b6d4,#2563eb)' }}>
              {status === 'idle' && 'Submit'}
              {status === 'sending' && 'Redirecting to WhatsApp…'}
              {status === 'sent' && 'Sent!'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

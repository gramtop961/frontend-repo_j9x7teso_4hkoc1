import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiFirebase, SiGoogleanalytics, SiGit, SiVercel } from 'react-icons/si'

const icons = [SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb, SiFirebase, SiGoogleanalytics, SiGit, SiVercel]

export default function Technologies(){
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0,1], [0, 360])
  return (
    <section id="skills" className="relative py-24" style={{ backgroundColor: '#0b0f19' }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-10">Technologies & Skills</h2>
        <div className="relative h-64 flex items-center justify-center">
          <motion.div style={{ rotate }} className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
              {icons.map((I, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-4 rounded-xl bg-slate-800/40 border border-white/10 text-cyan-300">
                  <I className="w-8 h-8 mx-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

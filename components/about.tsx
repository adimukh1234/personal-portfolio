"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { User, Code, Database, Globe } from "lucide-react"

export default function About() {
  

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 md:py-28 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 bg-[#12100f] text-[#ffffff] overflow-hidden"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `
               linear-gradient(to right, rgba(255, 78, 66, 0.1) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255, 78, 66, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {/* Terminal-style header */}
          <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,78,66,0.3)] p-4 rounded-none mb-8 font-mono text-left max-w-md mx-auto backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <User className="h-4 w-4 text-[#ff4e42] mr-2" />
              <span className="text-[#ff4e42]">ABOUT.EXE</span>
            </div>
            <div className="text-[#c2b8b2] text-sm">
              <span className="text-[#ff4e42]">$</span> cat /dev/profile<br />
              <span className="text-[#ffffff]">LOADING...</span>
            </div>
          </div>

          <h2 className="text-[#ff4e42] font-mono font-bold uppercase tracking-tight text-[clamp(1.75rem,4vw,2.5rem)] mb-6">
            SYSTEM PROFILE
          </h2>
          <div className="h-px w-20 bg-[#ff4e42] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-[clamp(0.95rem,1.9vw,1.05rem)] leading-relaxed text-[#c2b8b2] mb-5">
                I architect and build modern, performant web experiences with a focus on scalability, accessibility, and delightful interactions.
              </p>
              <p className="text-[clamp(0.95rem,1.85vw,1.05rem)] leading-relaxed text-[#c2b8b2] mb-5">
                From interactive 3D visualizations to robust backend integrations, I love solving complex problems and refining the details that elevate a product.
              </p>
              <p className="text-[clamp(0.95rem,1.75vw,1.05rem)] leading-relaxed text-[#c2b8b2]">
                Current Focus: advancing real-time systems, AI-assisted developer tooling, and immersive interfaces.
              </p>
            </motion.div>
          </div>
          <div className="relative max-w-sm w-full mx-auto order-1 lg:order-2">
            <div className="aspect-square rounded-xl overflow-hidden border border-[#312b29]/60 bg-[#141212]">
              <Image
                src= "https://res.cloudinary.com/dbpvl1rnb/image/upload/f_auto,q_auto,w_900/v1754820795/adi_o8tjaw.jpg"
                alt="Profile"
                fill
                priority={false}
                sizes="(max-width:480px) 85vw, (max-width:768px) 70vw, (max-width:1024px) 48vw, (max-width:1400px) 420px, 480px"
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(.4,.25,.3,1)] hover:scale-[1.06] will-change-transform"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,78,66,0.18),transparent_60%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

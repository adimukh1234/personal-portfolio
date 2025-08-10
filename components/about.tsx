"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { User, Code, Database, Globe } from "lucide-react"

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Python",
    "Express",
    "TailwindCSS",
    "HTML/CSS",
    "Git"

  ]

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
    <section id="about" className="py-20 md:py-32 bg-[#12100f] text-[#ffffff] relative overflow-hidden">
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

          <h2 className="text-3xl font-bold tracking-tight mb-4 uppercase font-mono text-[#ff4e42]">
            SYSTEM PROFILE
          </h2>
          <div className="h-px w-20 bg-[#ff4e42] mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image
                src="/adi.JPG?height=600&width=600"
                alt="Aditya Mukherjee"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Building Fast, Scalable, and Thoughtful Web Experiences</h3>
            <p className="text-muted-foreground mb-6">
            I’m an engineering student building fast, clean, and user-first web apps with Next.js and the MERN stack. I focus on creating modern digital products that blend performance, design, and real-world utility.

From AI tools to Gen-Z-centric SaaS ideas, I want to build in public, ship fast, and learn out loud — always pushing for sharper UI and smarter UX.
            </p>
            <p className="text-muted-foreground mb-8">
              My approach combines clean code with thoughtful design to deliver exceptional user experiences. I'm
              constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>

            <div>
              <h4 className="font-medium mb-4">My Tech Stack & Tools</h4>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill) => (
                  <motion.div key={skill} variants={item}>
                    <Badge variant="secondary" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

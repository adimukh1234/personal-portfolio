"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "TailwindCSS",
    "HTML/CSS",
    "Git",
    "Figma",
    "REST API",
    "GraphQL",
    "Jest",
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
    <section id="about" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-950/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
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
                src="/placeholder.svg?height=600&width=600"
                alt="John Doe"
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
            <h3 className="text-2xl font-bold mb-4">Frontend Developer & UI/UX Enthusiast</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate frontend developer with 5+ years of experience creating responsive, user-friendly web
              applications. I specialize in React and Next.js, with a strong focus on performance and accessibility.
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

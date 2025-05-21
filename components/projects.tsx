"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Workout & Diet Generation through AI voice assistance",
      description:
        "A workout and diet generation application that uses AI voice assistance to provide personalized workout plans and meal recommendations.",
      image: "/code-flex.png?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Convex","Clerk", "Tailwind CSS"],
      demoUrl: "https://code-flex-ai-seven.vercel.app/",
      githubUrl: "https://github.com/adimukh1234/code-flex",
    },
    {
      id: 2,
      title: "Functional NGO Website",
      description:
        "A functional NGO website that provides information about the organization's mission, vision, and services.",
      image: "/soranova.png?height=400&width=600",
      tags: ["React", "Next", "Styled Components"],
      demoUrl: "https://ngo-website-rust-omega.vercel.app/",
      githubUrl: "https://github.com/adimukh1234/soranova-glow-web",
    }
    
  ]

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground">
            Here are some of my recent projects. Each one was built with a focus on solving real problems with clean,
            efficient code, efficient use of AI tools and delightful user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

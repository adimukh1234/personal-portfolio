"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Redux", "Firebase", "Styled Components"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that provides real-time forecasts, historical data, and interactive maps.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Chart.js", "Weather API", "CSS Modules"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A minimalist portfolio website template for developers and designers to showcase their work.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description: "A recipe discovery app that allows users to search for recipes based on ingredients they have.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Context API", "Food API", "CSS Grid"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A fitness application for tracking workouts, setting goals, and monitoring progress over time.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "TypeScript", "Firebase", "Expo"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
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
            efficient code and delightful user experiences.
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

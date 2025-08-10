"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"
import { Terminal, Folder } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 0,
      title: "Tech Startup Website",
      description:
        "A tech startup website showcasing innovative solutions and services.",
      image: "https://res.cloudinary.com/dbpvl1rnb/image/upload/v1754820798/bb_u5yl1e.png",
      tags: ["Next.js", "JavaScript", "Tailwind CSS"],
      demoUrl: "https://buzzbites-web.vercel.app/",
      githubUrl: "https://github.com/adimukh1234/buzzbites_web"
    },
    {
      id: 1,
      title: "Workout & Diet Generation through AI voice assistance",
      description:
        "A workout and diet generation application that uses AI voice assistance to provide personalized workout plans and meal recommendations.",
      image: "https://res.cloudinary.com/dbpvl1rnb/image/upload/v1754820796/code-flex_ejiae8.png",
      tags: ["Next.js", "TypeScript", "Convex","Clerk", "Tailwind CSS"],
      demoUrl: "https://code-flex-ai-seven.vercel.app/",
      githubUrl: "https://github.com/adimukh1234/code-flex",
    },
    {
      id: 2,
      title: "Functional NGO Website",
      description:
        "A functional NGO website that provides information about the organization's mission, vision, and services.",
      image: "https://res.cloudinary.com/dbpvl1rnb/image/upload/v1754820795/soranova_qxs6yh.png",
      tags: ["React", "Next", "Styled Components"],
      demoUrl: "https://ngo-website-rust-omega.vercel.app/",
      githubUrl: "https://github.com/adimukh1234/soranova-glow-web",
    }
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#12100f] text-[#ffffff] relative overflow-hidden">
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
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-16"
        >
          {/* Terminal-style header */}
          <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,78,66,0.3)] p-4 rounded-none mb-8 font-mono text-left max-w-md mx-auto backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <Folder className="h-4 w-4 text-[#ff4e42] mr-2" />
              <span className="text-[#ff4e42]">PROJECTS.DIR</span>
            </div>
            <div className="text-[#c2b8b2] text-sm">
              <span className="text-[#ff4e42]">$</span> ls -la projects/<br />
              <span className="text-[#ffffff]">SCANNING...</span>
            </div>
          </div>

          <h2 className="uppercase font-mono text-[#ff4e42] font-bold mb-4 tracking-tight text-[clamp(1.75rem,4.2vw,2.5rem)]">
            PROJECT ARCHIVE
          </h2>
          <div className="h-px w-20 bg-[#ff4e42] mx-auto mb-6"></div>
          <p className="text-[#c2b8b2] font-mono text-[clamp(0.75rem,1.9vw,0.875rem)] leading-relaxed">
            &gt; Recent deployments and builds<br />
            &gt; Focus: Real problem solving + clean code<br />
            &gt; Stack: AI tools + delightful UX
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
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

      {/* Sci-fi decorative elements */}
      <div className="absolute top-1/3 left-0 w-20 h-px bg-gradient-to-r from-[#ff4e42] to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-20 h-px bg-gradient-to-l from-[#ff4e42] to-transparent" />
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, CalendarIcon, MapPinIcon, Terminal, Activity } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
  current?: boolean
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "Webmaster",
      company: "Randomize MUJ",
      location: "Manipal University Jaipur, India",
      period: "June 2025 - Present",
      description: [
        "Developing full-stack applications using MERN stack",
        "Collaborating with cross-functional teams on software projects",
        "Implementing responsive UI designs and optimizing performance"
      ],
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      current: true,
    },
    {
      title: "Web Dev- Team Head",
      company: "MUJ ACM",
      location: "Jaipur, India",
      period: "June 2025 - Present",
      description: [
        "Leading web development initiatives",
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      current: true,
      
    },
    {
      title: "Web Developer Intern",
      company: "BuzzBites Media & Entertainment",
      location: "Kolkata, India",
      period: "May 2025 - Aug 2025",
      description: [
        "Exploring web technologies and frameworks",
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      
    },
    {
      title: "Junior Working Team- TECH",
      company: "Randomize MUJ",
      description: [
        "Worked on various technical projects and workshops",
        "Collaborated with team members on event planning",
        "Learned new technologies and development practices"
      ],
      skills: ["JavaScript", "React", "Team Collaboration", "Project Management"],
      location: "Manipal University Jaipur, India",
      period: "Oct 2024 - May 2025",
    }
  ]

  return (
    <section id="experience" className="relative py-20 sm:py-24 md:py-28 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-5"
           style={{
             backgroundImage: `
               linear-gradient(to right, rgba(255, 78, 66, 0.1) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255, 78, 66, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }} />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          {/* Terminal-style header */}
          <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,78,66,0.3)] p-4 rounded-none mb-8 font-mono text-left max-w-md mx-auto backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <Activity className="h-4 w-4 text-[#ff4e42] mr-2" />
              <span className="text-[#ff4e42]">EXPERIENCE.LOG</span>
            </div>
            <div className="text-[#c2b8b2] text-sm">
              <span className="text-[#ff4e42]">$</span> history --work<br />
              <span className="text-[#ffffff]">PROCESSING...</span>
            </div>
          </div>

          <h2 className="text-[#ff4e42] font-mono font-bold uppercase tracking-tight text-[clamp(1.65rem,4vw,2.5rem)] mb-5">
            WORK HISTORY
          </h2>
          <div className="h-px w-20 bg-[#ff4e42] mx-auto mb-8"></div>
          <p className="text-sm text-[#c2b8b2] max-w-2xl mx-auto font-mono">
            &gt; Professional journey and collaborations<br />
            &gt; Building experience through real-world projects<br />
            &gt; Status: <span className="text-[#ff4e42]">ACTIVELY CONTRIBUTING</span>
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-[rgba(255,78,66,0.3)] pl-4 sm:pl-8 ml-2 sm:ml-4 md:ml-8 space-y-6 sm:space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[37px] sm:-left-[41px] md:-left-[45px] top-0 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#ff4e42] flex items-center justify-center">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#12100f]"></div>
                </div>

                <Card className={`${experience.current ? 'border-[rgba(255,78,66,0.6)] shadow-lg shadow-[rgba(255,78,66,0.2)]' : 'border-[rgba(255,78,66,0.3)]'} bg-[rgba(0,0,0,0.3)] backdrop-blur-sm rounded-none`}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#ff4e42] uppercase font-mono">{experience.title}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 sm:gap-2 md:gap-4 mt-2 text-[#c2b8b2] text-xs sm:text-sm font-mono">
                          <div className="flex items-center gap-1">
                            <BriefcaseIcon className="h-3 w-3 sm:h-4 sm:w-4 text-[#ff4e42]" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4 text-[#ff4e42]" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-[#ff4e42]" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                      {experience.current && (
                        <Badge className="mt-2 md:mt-0 self-start md:self-center text-xs bg-[rgba(255,78,66,0.8)] text-[#ffffff] font-mono uppercase border-[#ff4e42]" variant="default">
                          ACTIVE
                        </Badge>
                      )}
                    </div>

                    <ul className="space-y-1 sm:space-y-2 mb-4 list-none pl-0 text-xs sm:text-sm">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-[#c2b8b2] font-mono">
                          <span className="text-[#ff4e42]">&gt;</span> {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                      {experience.skills.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="bg-[rgba(255,78,66,0.1)] text-[#ff4e42] border-[rgba(255,78,66,0.3)] text-xs font-mono uppercase hover:bg-[rgba(255,78,66,0.2)]"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Sci-fi decorative elements */}
      <div className="absolute top-1/3 left-0 w-20 h-px bg-gradient-to-r from-[#ff4e42] to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-20 h-px bg-gradient-to-l from-[#ff4e42] to-transparent" />
    </section>
  )
}
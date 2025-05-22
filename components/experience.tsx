"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react"

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
      title: "Web Developer Intern",
      company: "BuzzBites Media & Entertainment",
      location: "Kolkata, India",
      period: "May 2025 - Present",
      description: [
        "Exploring web technologies and frameworks",
      ],
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      current: true,
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
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with over the years.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary/30 pl-4 sm:pl-8 ml-2 sm:ml-4 md:ml-8 space-y-6 sm:space-y-10">
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
                <div className="absolute -left-[37px] sm:-left-[41px] md:-left-[45px] top-0 w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-white dark:bg-slate-900"></div>
                </div>

                <Card className={`${experience.current ? 'border-primary/30 shadow-lg' : ''}`}>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold">{experience.title}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 sm:gap-2 md:gap-4 mt-2 text-muted-foreground text-xs sm:text-sm">
                          <div className="flex items-center gap-1">
                            <BriefcaseIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPinIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{experience.period}</span>
                          </div>
                        </div>
                      </div>
                      {experience.current && (
                        <Badge className="mt-2 md:mt-0 self-start md:self-center text-xs" variant="default">
                          Current
                        </Badge>
                      )}
                    </div>

                    <ul className="space-y-1 sm:space-y-2 mb-4 list-disc pl-5 text-xs sm:text-sm">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
                      {experience.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/5 text-xs">
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
    </section>
  )
}
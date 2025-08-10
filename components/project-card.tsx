import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg bg-[rgba(0,0,0,0.3)] border-2 border-[rgba(255,78,66,0.3)] hover:border-[rgba(255,78,66,0.6)] backdrop-blur-sm rounded-none">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105 filter brightness-110 contrast-110"
        />
        {/* Scanner overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent" />
        <div className="absolute bottom-2 left-2 text-[#ff4e42] text-xs font-mono">
          PROJECT_{project.id.toString().padStart(2, '0')}
        </div>
      </div>
      <CardContent className="flex-grow pt-5 sm:pt-6 px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#ff4e42] uppercase font-mono">{project.title}</h3>
        <p className="text-[#c2b8b2] text-xs sm:text-sm mb-4 font-mono">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="text-xs bg-[rgba(255,78,66,0.1)] border border-[rgba(255,78,66,0.3)] text-[#ff4e42] hover:bg-[rgba(255,78,66,0.2)] font-mono"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
        <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm text-[#ff4e42] hover:bg-[rgba(255,78,66,0.1)] font-mono uppercase">
          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            DEPLOY
          </Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm text-[#ff4e42] hover:bg-[rgba(255,78,66,0.1)] font-mono uppercase">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            SOURCE
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

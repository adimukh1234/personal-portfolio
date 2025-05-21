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
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="flex-grow pt-5 sm:pt-6 px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0 px-4 sm:px-6 pb-4 sm:pb-6">
        <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Live Demo
          </Link>
        </Button>
        <Button asChild variant="ghost" size="sm" className="text-xs sm:text-sm">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

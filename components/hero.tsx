"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="text-primary">John Doe</span>
            <br />
            Frontend Developer
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building clean code & delightful digital experiences. Specializing in React, Next.js, and modern web
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    </section>
  )
}

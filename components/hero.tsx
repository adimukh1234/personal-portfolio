"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">
            Hi, I'm <span className="text-primary">Aditya Mukherjee</span>
            <br />
            Full Stack Web Developer
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
            Building clean code & delightful digital experiences. Specializing in MERN, Next.js, and modern web
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 md:gap-4 mb-8 md:mb-12">
            <Button asChild size="lg" className="rounded-full w-full sm:w-auto">
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full mt-3 sm:mt-0 w-full sm:w-auto">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <Link href="https://github.com/adimukh1234" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 sm:h-6 sm:w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/adityamukherjee100/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://x.com/adityamukh19" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6 hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/mainlyy.aditya" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 hover:text-primary transition-colors" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-last mb-6 md:mb-0"
        >
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-2 shadow-xl">
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
              <Image 
                src="/Neon__AM__Logo_Design-removebg-preview.png" 
                alt="Aditya Mukherjee"
                width={400} 
                height={400} 
                className="rounded-lg object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl" />
    </section>
  )
}

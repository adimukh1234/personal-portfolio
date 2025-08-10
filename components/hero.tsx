"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Terminal } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-[#12100f] text-[#ffffff]">
      {/* Space Background */}
      <div className="absolute inset-0 bg-[#12100f] opacity-90" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `
               linear-gradient(to right, rgba(255, 78, 66, 0.1) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255, 78, 66, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
           }} />

      <div className="container grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          {/* Terminal-style intro */}
          <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,78,66,0.3)] p-4 rounded-lg mb-6 font-mono text-sm backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <Terminal className="h-4 w-4 text-[#ff4e42] mr-2" />
              <span className="text-[#ff4e42]">SYSTEM.INIT</span>
            </div>
            <div className="text-[#c2b8b2]">
              <span className="text-[#ff4e42]">$</span> whoami<br />
              <span className="text-[#ffffff]">ADITYA.MUKHERJEE</span><br />
              <span className="text-[#ff4e42]">$</span> occupation<br />
              <span className="text-[#ffffff]">FULL_STACK_DEVELOPER</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 uppercase font-mono">
            <span className="text-[#ff4e42]">ADITYA MUKHERJEE</span>
            <br />
            <span className="text-[#ffffff]">FULL STACK</span>
            <br />
            <span className="text-[#c2b8b2]">WEB DEVELOPER</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#c2b8b2] mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 font-mono">
            &gt; Building clean code & delightful digital experiences<br />
            &gt; Specializing in MERN, Next.js, and modern web technologies<br />
            &gt; Status: <span className="text-[#ff4e42]">AVAILABLE FOR HIRE</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 md:gap-4 mb-8 md:mb-12">
            <Button asChild size="lg" className="rounded-none bg-[rgba(255,78,66,0.8)] hover:bg-[rgba(255,78,66,1)] border border-[#ff4e42] text-[#ffffff] uppercase font-mono w-full sm:w-auto">
              <Link href="#projects">
                VIEW PROJECTS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-none border-[#ff4e42] text-[#ff4e42] hover:bg-[rgba(255,78,66,0.1)] uppercase font-mono mt-3 sm:mt-0 w-full sm:w-auto">
              <Link href="#contact">CONTACT ME</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <Link href="https://github.com/adimukh1234" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 sm:h-6 sm:w-6 hover:text-[#ff4e42] transition-colors text-[#c2b8b2]" />
            </Link>
            <Link href="https://www.linkedin.com/in/adityamukherjee100/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 hover:text-[#ff4e42] transition-colors text-[#c2b8b2]" />
            </Link>
            <Link href="https://x.com/adityamukh19" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6 hover:text-[#ff4e42] transition-colors text-[#c2b8b2]" />
            </Link>
            <Link href="https://www.instagram.com/mainlyy.aditya" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 hover:text-[#ff4e42] transition-colors text-[#c2b8b2]" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-last mb-6 md:mb-0"
        >
          <div className="bg-[rgba(0,0,0,0.3)] border-2 border-[rgba(255,78,66,0.6)] rounded-none p-4 backdrop-blur-sm shadow-lg shadow-[rgba(255,78,66,0.2)]">
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
              <Image 
                src="/Neon__AM__Logo_Design-removebg-preview.png" 
                alt="Aditya Mukherjee"
                width={400} 
                height={400} 
                className="object-cover w-full h-full filter brightness-110 contrast-110"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sci-fi decorative elements */}
      <div className="absolute -bottom-24 -left-24 w-48 sm:w-72 h-48 sm:h-72 bg-[rgba(255,78,66,0.1)] rounded-full blur-3xl" />
      <div className="absolute -top-24 -right-24 w-48 sm:w-72 h-48 sm:h-72 bg-[rgba(255,78,66,0.1)] rounded-full blur-3xl" />
      
      {/* Scanner lines */}
      <div className="absolute left-0 top-1/2 w-20 h-px bg-gradient-to-r from-[#ff4e42] to-transparent" />
      <div className="absolute right-0 top-1/2 w-20 h-px bg-gradient-to-l from-[#ff4e42] to-transparent" />
    </section>
  )
}

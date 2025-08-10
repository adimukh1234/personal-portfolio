"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, ExternalLink, Terminal, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[#ff4e42]" />,
      title: "EMAIL",
      value: "adimukherjee100@gmail.com",
      href: "mailto:adimukherjee100@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-[#ff4e42]" />,
      title: "PHONE",
      value: "+91 7003908040",
      href: "tel:+917003908040",
    },
    {
      icon: <Github className="h-6 w-6 text-[#ff4e42]" />,
      title: "GITHUB",
      value: "adimukh1234",
      href: "https://github.com/adimukh1234",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-[#ff4e42]" />,
      title: "LINKEDIN",
      value: "Aditya Mukherjee",
      href: "https://www.linkedin.com/in/adityamukherjee100/",
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#12100f] text-[#ffffff] relative overflow-hidden">
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
              <Wifi className="h-4 w-4 text-[#ff4e42] mr-2" />
              <span className="text-[#ff4e42]">CONTACT.INIT</span>
            </div>
            <div className="text-[#c2b8b2] text-sm">
              <span className="text-[#ff4e42]">$</span> ping aditya.dev<br />
              <span className="text-[#ffffff]">ONLINE</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase font-mono text-[#ff4e42]">
            ESTABLISH CONNECTION
          </h2>
          <div className="h-px w-20 bg-[#ff4e42] mx-auto mb-8"></div>
          <p className="text-sm text-[#c2b8b2] max-w-2xl mx-auto font-mono">
            &gt; Have a project in mind or want to chat?<br />
            &gt; Always open to discussing new projects and creative ideas<br />
            &gt; Status: <span className="text-[#ff4e42]">ACCEPTING CONNECTIONS</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 bg-[rgba(0,0,0,0.3)] border-2 border-[rgba(255,78,66,0.3)] hover:border-[rgba(255,78,66,0.6)] backdrop-blur-sm rounded-none">
                <CardContent className="p-0">
                  <div className="bg-[rgba(255,78,66,0.1)] group-hover:bg-[rgba(255,78,66,0.2)] transition-colors p-4 sm:p-6 flex items-center justify-center">
                    <div className="bg-[rgba(0,0,0,0.5)] rounded-none p-3 sm:p-4 border border-[rgba(255,78,66,0.3)]">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 text-[#ff4e42] font-mono">{item.title}</h3>
                    <a
                      href={item.href}
                      className="text-sm text-[#c2b8b2] group-hover:text-[#ff4e42] transition-colors flex items-center justify-center gap-2 font-mono"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.value}
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button 
            size="lg" 
            className="rounded-none px-8 py-6 text-lg font-medium bg-[rgba(255,78,66,0.8)] hover:bg-[rgba(255,78,66,1)] border-2 border-[#ff4e42] text-[#ffffff] uppercase font-mono"
            asChild
          >
            <a href="mailto:adimukherjee100@gmail.com">
              INITIATE COLLABORATION
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Sci-fi decorative elements */}
      <div className="absolute top-1/4 left-0 w-20 h-px bg-gradient-to-r from-[#ff4e42] to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-20 h-px bg-gradient-to-l from-[#ff4e42] to-transparent" />
    </section>
  )
}

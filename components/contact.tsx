"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "adimukherjee100@gmail.com",
      href: "mailto:adimukherjee100@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+91 7003908040",
      href: "tel:+917003908040",
    },
    {
      icon: <Github className="h-6 w-6 text-primary" />,
      title: "GitHub",
      value: "adimukh1234",
      href: "https://github.com/adimukh1234",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary" />,
      title: "LinkedIn",
      value: "Aditya Mukherjee",
      href: "https://www.linkedin.com/in/adityamukherjee100/",
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950/80 dark:to-slate-950/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out. I'm always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
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
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardContent className="p-0">
                  <div className="bg-primary/5 group-hover:bg-primary/10 transition-colors p-4 sm:p-6 flex items-center justify-center">
                    <div className="bg-white dark:bg-slate-800 rounded-full p-3 sm:p-4 shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center justify-center gap-2"
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
            className="rounded-full px-8 py-6 text-lg font-medium"
            asChild
          >
            <a href="mailto:adimukherjee100@gmail.com">
              Let's Work Together
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

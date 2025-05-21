import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 sm:py-12 border-t">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href="/" className="text-xl font-bold">
              AM<span className="text-primary">.</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">Building clean code & delightful digital experiences.</p>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <Link
              href="https://github.com/adimukh1234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/adityamukherjee100/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://x.com/adityamukh19"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="mailto:adimukherjee100@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>

        <div className="text-center text-xs sm:text-sm text-muted-foreground mt-6">
          © {currentYear} Aditya Mukherjee. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SciFiNavbarWrapper } from "@/components/SciFiNavbarWrapper"
import { AudioProvider } from "@/components/AudioContext"
import Footer from "@/components/footer"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aditya Mukherjee | Software Developer and Student",
  description: "Portfolio of Aditya Mukherjee, a full stack developer specializing in MERN and Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://personal-portfolio-phi-self.vercel.app/",
    title: "Aditya Mukherjee | Full Stack Developer",
    description: "Portfolio of Aditya Mukherjee, a full stack developer specializing in MERN and Next.js",
    siteName: "Aditya Mukherjee Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Mukherjee | Full Stack Developer",
    description: "Portfolio of Aditya Mukherjee, a full stack developer specializing in MERN and Next.js",
    creator: "@AdityaMukh19",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange forcedTheme="dark">
          <AudioProvider>
            {/* Global Sci-Fi Navbar */}
            <div className="fixed top-5 left-5 right-5 z-50 pointer-events-none">
              <div className="pointer-events-auto">
                <SciFiNavbarWrapper />
              </div>
            </div>
            
            {/* Main Content */}
            {children}
            
            {/* Global Footer */}
            <Footer />
            
            {/* Custom Cursor removed */}
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aditya Mukherjee | Software Developer and Student",
  description: "Portfolio of Aditya Mukherjee, a full stack developer specializing in MERN and Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "Aditya Mukherjee | Full Stack Developer",
    description: "Portfolio of Aditya Mukherjee, a full stack developer specializing in MERN and Next.js",
    siteName: "John Doe Portfolio",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhishek Bhoyar - Full-Stack Developer",
  description:
    "Portfolio of Abhishek Bhoyar, a passionate Full-Stack Developer specializing in modern web development and artificial intelligence solutions.",
  keywords: "Full-Stack Developer, AI Enthusiast, React, Next.js, Node.js, Python, Machine Learning, Web Development, Mobile Development",
  authors: [{ name: "Abhishek Bhoyar" }],
  openGraph: {
    title: "Abhishek Bhoyar - Full-Stack Developer",
    description: "Portfolio showcasing innovative web development and AI solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

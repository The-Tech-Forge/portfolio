"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                <img
                  src="/photo.jpeg?height=120&width=120"
                  alt="Abhishek Bhoyar "
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Abhishek Bhoyar
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-6 h-8">
              {text}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              I’m a focused and driven Software Developer who thrives on intensity over balance—pushing limits, embracing discomfort, and striving for excellence in every project. With 1+ year of experience, I’ve built scalable backend systems using Node.js with TypeScript, developed cross-platform mobile apps using Flutter, and contributed to Web3 solutions. I
              combine strong technical skills with clear communication and a relentless mindset to deliver high-impact, innovative results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            {/* <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Download Resume
            </Button> */}
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com/anon576" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-blue-600">
                <Github className="h-6 w-6" />
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/abhishek-bhoyar-a28617229/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:text-blue-600">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>

            <a href="mailto:abhibhoyar141@gmail.com">
              <Button variant="ghost" size="icon" className="hover:text-blue-600">
                <Mail className="h-6 w-6" />
              </Button>
            </a>

          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button variant="ghost" size="icon" onClick={() => scrollToSection("about")}>
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

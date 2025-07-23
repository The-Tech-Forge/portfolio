import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Educational Institute ERP System",
      description:
        "A comprehensive ERP system tailored for educational institutes with modules for HR, academic heads, admission teams, teachers, and exam managers. Features complete workflow management for educational operations.",
      image: "/erp.jpg?height=300&width=500",
      technologies: ["NestJS", "PostgreSQL", "Redis", "TypeORM", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Training and Placement Management System",
      description:
        "Comprehensive system handling student training, internships, and placement workflows. Includes student profiles, company coordination, placement drives scheduling, and detailed analytics for career services.",
      image: "/placemnt.png?height=300&width=500",
      technologies: ["Node.js", "React", "PostgreSQL", "Express.js", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Digital Advertising System",
      description:
        "Advanced digital advertising platform for managing and displaying advertisements, especially optimized for Android TVs. Features daily media syncing, full-screen playback, and comprehensive user registration system.",
      image: "/ads.jpg?height=300&width=500",
      technologies: ["Node.js", "Android", "React Native", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Learning Management System (LMS)",
      description:
        "Complete LMS designed for content delivery, assessments, and progress tracking. Features video content management, interactive quizzes, automated grading, course management, and student-teacher interaction tools.",
      image: "/lms.png?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Real-world applications and systems I've built for educational institutions and businesses
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {/* <div className="flex gap-3">
                    <Button size="sm" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    {/* <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </div> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

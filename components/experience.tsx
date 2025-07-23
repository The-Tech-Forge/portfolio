import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "Mumbai, India",
      period: "2022 - Present",
      description:
        "Leading development of enterprise-scale applications using modern web technologies. Implemented AI-powered features that improved user engagement by 40%.",
      achievements: [
        "Led a team of 5 developers in building a microservices architecture",
        "Reduced application load time by 60% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
      title: "Full-Stack Developer",
      company: "InnovateLab",
      location: "Pune, India",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects ranging from e-commerce platforms to SaaS applications. Specialized in React and Node.js development.",
      achievements: [
        "Built 15+ production applications serving 100k+ users",
        "Mentored 3 junior developers",
        "Improved code quality by implementing automated testing",
      ],
      technologies: ["React", "Express.js", "MongoDB", "Redux", "Jest"],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Bangalore, India",
      period: "2019 - 2020",
      description:
        "Focused on creating responsive and interactive user interfaces. Collaborated closely with designers to implement pixel-perfect designs.",
      achievements: [
        "Increased user engagement by 35% through UI/UX improvements",
        "Implemented responsive design across all platforms",
        "Reduced bundle size by 45% through code optimization",
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Work{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              My professional journey and key contributions
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">{exp.company}</div>
                      <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

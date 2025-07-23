import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Express.js",  "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
    },
    // {
    //   title: "AI & Machine Learning",
    //   skills: ["TensorFlow", "PyTorch", "OpenAI API", "Langchain", "Hugging Face", "Computer Vision", "NLP", "MLOps"],
    // },
    // {
    //   title: "DevOps & Tools",
    //   skills: ["Docker", "AWS", "Vercel", "Git", "GitHub Actions", "Linux", "Nginx", "Kubernetes"],
    // },
    {
      title: "Mobile Development",
      skills: ["Flutter", "iOS", "Android","Firebase"],
    },
    {
      title: "Other Technologies",
      skills: ["Blockchain", "Web3", "Solidity", "REST APIs", "Microservices", "Testing", "Agile", "Scrum"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
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

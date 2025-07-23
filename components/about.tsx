import { Card, CardContent } from "@/components/ui/card"
import { Code, Brain, Rocket, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Brain,
      title: "AI Innovation",
      description: "Leveraging AI to solve complex business problems",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in cross-functional teams",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              I'm a passionate developer who loves turning ideas into reality through code and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  With a strong foundation in both frontend and backend technologies, I specialize in creating
                  end-to-end solutions that deliver exceptional user experiences. My journey in tech began with a
                  curiosity about how things work, which evolved into a passion for building them.
                </p>
                <p>
                  I'm particularly fascinated by the intersection of web development and artificial intelligence,
                  constantly exploring how AI can enhance user experiences and solve complex problems in innovative
                  ways.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                <img
                  src="/j.jpg?height=400&width=400"
                  alt="Abhishek working"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

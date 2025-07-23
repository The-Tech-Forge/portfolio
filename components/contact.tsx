"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abhibhoyar141@gmail.com",
      link: "mailto:abhibhoyar141@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mumbai, India",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Let's discuss your next project or collaboration opportunity
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              I'm always interested in hearing about new opportunities, interesting projects, or just having a chat
              about technology and innovation. Feel free to reach out!
            </p>

            <div className="flex flex-col items-center justify-center gap-8 mb-12">
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-1">Email Me</h4>
                  <a
                    href="mailto:abhibhoyar141@gmail.com"
                    className="text-xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                  >
                    abhibhoyar141@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="text-center">
              <h4 className="font-semibold mb-6 text-lg">Follow Me</h4>
              <div className="flex justify-center gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 bg-transparent"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300 bg-transparent"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Location
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

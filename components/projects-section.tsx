"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "MediPredict",
      description:
        "AI-powered disease prediction system using machine learning algorithms to analyze symptoms and provide accurate health insights.",
      image: "/medical-ai-prediction-dashboard.jpg",
      tags: ["Python", "TensorFlow", "Flask", "Machine Learning"],
      github: "#",
      demo: "#",
    },
    {
      title: "Drowsy Driver Detection",
      description:
        "Real-time safety application using OpenCV and computer vision to detect driver drowsiness and prevent accidents.",
      image: "/driver-monitoring-system-dashboard.jpg",
      tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
      github: "#",
      demo: "#",
    },
    {
      title: "ZedBlogger",
      description:
        "Modern blogging platform built with React and Django, featuring rich text editing, user authentication, and responsive design.",
      image: "/modern-blog-platform.png",
      tags: ["React", "Django", "PostgreSQL", "REST API"],
      github: "#",
      demo: "#",
    },
    {
      title: "Gesture Volume Control",
      description:
        "Innovative AI-based system that uses hand gesture recognition to control system volume, showcasing human-computer interaction.",
      image: "/hand-gesture-recognition-interface.jpg",
      tags: ["Python", "MediaPipe", "OpenCV", "AI"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden h-full flex flex-col group">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

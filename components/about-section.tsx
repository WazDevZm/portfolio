"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Code2, Lightbulb, Users } from "lucide-react"

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: Code2,
      title: "Problem Solving",
      description: "Passionate about solving complex problems with elegant solutions",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and pushing boundaries",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong believer in teamwork and knowledge sharing",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">About Me</h2>

          <div className="mb-12 text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground">
              WM
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-balance">
              I'm a passionate Software Engineer with a strong foundation in Computer Science from Copperbelt
              University. My journey in technology is driven by curiosity and a desire to create intelligent systems
              that make a real impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              With expertise spanning AI/ML, full-stack development, and computer vision, I thrive on transforming
              complex challenges into innovative solutions. I believe in writing clean, efficient code and continuously
              learning to stay at the forefront of technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <highlight.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

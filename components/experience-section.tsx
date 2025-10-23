"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

export function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Tech Solutions Ltd",
      period: "2023 - Present",
      description:
        "Developing and maintaining web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built responsive web applications using React and Next.js",
        "Implemented RESTful APIs with Python and Django",
        "Improved application performance by 40% through optimization",
        "Mentored junior developers and conducted code reviews",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="mb-8 last:mb-0"
              >
                <Card className="p-8 relative">
                  <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-accent border-4 border-background hidden md:block" />

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
                      <p className="text-accent font-medium mb-2">{experience.company}</p>
                      <p className="text-muted-foreground mb-4">{experience.period}</p>
                    </div>
                  </div>

                  <div className="ml-16">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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

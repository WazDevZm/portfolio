"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Education</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 relative">
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Bachelor of Science in Computer Science</h3>
                    <p className="text-primary font-medium mb-2">Copperbelt University</p>
                    <p className="text-muted-foreground mb-4">2019 - 2023</p>
                  </div>
                </div>

                <div className="space-y-4 ml-16">
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Outstanding Academic Performance</p>
                      <p className="text-sm text-muted-foreground">Maintained excellent GPA throughout the program</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Machine Learning",
                        "Database Systems",
                        "Software Engineering",
                        "Computer Vision",
                        "Web Development",
                      ].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

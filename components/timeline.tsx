'use client'

import { motion } from 'framer-motion'
import { GlassCard } from './glass-card'

const timelineData = [
  {
    year: '2022',
    title: 'Started CS Degree',
    organization: 'Universitas Muhammadiyah',
    description: 'Began computer science journey with focus on web development and algorithms.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Web Development Lead',
    organization: 'Campus Tech Club',
    description: 'Led a team of 5 developers in building campus management applications.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'Fullstack Developer Intern',
    organization: 'TechStartup Inc',
    description: 'Developed and deployed 3 production applications using React and Node.js.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'AI/ML Project Lead',
    organization: 'University Research Lab',
    description: 'Leading research project on machine learning for educational applications.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Open Source Contributor',
    organization: 'GitHub Community',
    description: 'Contributing to major open-source projects and mentoring junior developers.',
    type: 'work',
  },
  {
    year: '2025',
    title: 'Senior Developer Focus',
    organization: 'Professional Growth',
    description: 'Pursuing advanced AI/ML specialization and architecting scalable systems.',
    type: 'education',
  },
]

export function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground" style={{ fontFamily: 'Sora' }}>
              Experience & Education
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A timeline of my journey in technology, from education to professional achievements.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent transform md:-translate-x-1/2" />

            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Content */}
                <div className="flex-1 md:basis-1/2">
                  <GlassCard accentColor="green" className="md:text-right">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-primary uppercase tracking-wider">{item.year}</p>
                      <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Sora' }}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">{item.organization}</p>
                      <p className="text-muted-foreground leading-relaxed mt-3">{item.description}</p>
                    </div>
                  </GlassCard>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-4 h-4 rounded-full border-2 ${
                      item.type === 'work'
                        ? 'bg-primary border-primary'
                        : 'bg-primary/20 border-primary'
                    }`}
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1 md:basis-1/2" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

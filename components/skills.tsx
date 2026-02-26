'use client'

import { motion } from 'framer-motion'
import { KnowledgeGraph, type Skill } from './knowledge-graph'

const skillsData: Skill[] = [
  // Expert Level
  { name: 'React', level: 'expert' },
  { name: 'TypeScript', level: 'expert' },
  { name: 'Next.js', level: 'expert' },
  { name: 'Tailwind CSS', level: 'expert' },
  { name: 'JavaScript', level: 'expert' },
  { name: 'Python', level: 'expert' },
  { name: 'Problem Solving', level: 'expert' },

  // Proficient Level
  { name: 'Node.js', level: 'proficient' },
  { name: 'PostgreSQL', level: 'proficient' },
  { name: 'MongoDB', level: 'proficient' },
  { name: 'REST APIs', level: 'proficient' },
  { name: 'Git & GitHub', level: 'proficient' },
  { name: 'Framer Motion', level: 'proficient' },
  { name: 'Docker', level: 'proficient' },
  { name: 'AWS', level: 'proficient' },
  { name: 'GraphQL', level: 'proficient' },

  // Learning Level
  { name: 'Machine Learning', level: 'learning' },
  { name: 'TensorFlow', level: 'learning' },
  { name: 'Kubernetes', level: 'learning' },
  { name: 'Rust', level: 'learning' },
  { name: 'Web3', level: 'learning' },
]

export function Skills() {
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
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A comprehensive overview of my technical skills organized by proficiency level, from expert to actively learning.
            </p>
          </div>

          {/* Knowledge Graph */}
          <KnowledgeGraph skills={skillsData} />
        </motion.div>
      </div>
    </section>
  )
}

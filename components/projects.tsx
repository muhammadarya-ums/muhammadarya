'use client'

import { motion } from 'framer-motion'
import { ProjectAccordion, type ProjectItem } from './project-accordion'

const projectsData: ProjectItem[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    tagline: 'Full-stack marketplace solution',
    description: 'Built a scalable e-commerce platform with React and Node.js',
    fullDescription:
      'A comprehensive e-commerce platform designed for modern online retailers. Features include real-time inventory management, secure payment processing, advanced product filtering, and an intuitive admin dashboard for store management.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed',
  },
  {
    id: '2',
    title: 'AI Chat Assistant',
    tagline: 'Conversational AI powered by LLMs',
    description: 'Intelligent chatbot with context awareness and natural language processing',
    fullDescription:
      'An advanced conversational AI assistant that leverages large language models to understand and respond to user queries intelligently. The system maintains context across conversations and is optimized for multiple domains including customer support and information retrieval.',
    technologies: ['Python', 'OpenAI API', 'Flask', 'PostgreSQL', 'React'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Real-time Analytics Dashboard',
    tagline: 'Data visualization and monitoring tool',
    description: 'Interactive dashboard for tracking metrics and analytics',
    fullDescription:
      'A real-time analytics dashboard that aggregates data from multiple sources and presents actionable insights through beautiful visualizations. Includes custom chart builders, export functionality, and scheduled reports.',
    technologies: ['React', 'D3.js', 'WebSocket', 'Express.js', 'InfluxDB'],
    github: 'https://github.com',
    status: 'in-progress',
  },
  {
    id: '4',
    title: 'Mobile Task Manager',
    tagline: 'Productivity app with offline support',
    description: 'Cross-platform task management application',
    fullDescription:
      'A feature-rich task management app that works seamlessly across iOS and Android with offline capabilities. Includes task prioritization, recurring reminders, team collaboration features, and cloud synchronization.',
    technologies: ['React Native', 'Firebase', 'Expo', 'Redux', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://example.com',
    status: 'completed',
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground" style={{ fontFamily: 'Sora' }}>
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A selection of projects I've built to solve real problems and explore new technologies. Click to expand for
              more details.
            </p>
          </div>

          {/* Projects Accordion */}
          <ProjectAccordion projects={projectsData} />
        </motion.div>
      </div>
    </section>
  )
}

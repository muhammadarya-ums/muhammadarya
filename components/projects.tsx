'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projectsData = [
  {
    title: 'EduFlow',
    description: 'An intelligent learning management system with AI-powered course recommendations and progress tracking.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'TensorFlow'],
    github: '#',
    demo: '#',
    gridSpan: 'md:col-span-2',
  },
  {
    title: 'TaskMaster Pro',
    description: 'Real-time collaborative task management with WebSocket integration and team analytics.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: '#',
    demo: '#',
    gridSpan: 'md:col-span-1',
  },
  {
    title: 'DataViz Dashboard',
    description: 'Interactive data visualization platform with machine learning insights and custom analytics.',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    github: '#',
    demo: '#',
    gridSpan: 'md:col-span-1',
  },
  {
    title: 'Neural Art Generator',
    description: 'Style transfer and generative art application using deep learning and real-time image processing.',
    tags: ['Python', 'PyTorch', 'FastAPI', 'React'],
    github: '#',
    demo: '#',
    gridSpan: 'md:col-span-1',
  },
  {
    title: 'CloudSync',
    description: 'End-to-end encrypted file synchronization platform with AWS integration and version control.',
    tags: ['Next.js', 'AWS', 'Encryption', 'TypeScript'],
    github: '#',
    demo: '#',
    gridSpan: 'md:col-span-1',
  },
  {
    title: 'AI Chatbot Suite',
    description: 'Multi-model conversational AI platform with fine-tuning capabilities and natural language understanding.',
    tags: ['Python', 'LLMs', 'OpenAI API', 'FastAPI'],
    github: '#',
    demo: '#',
    gridSpan: 'md:col-span-2',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my most impactful work, showcasing full-stack development and AI integration
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group ${project.gridSpan}`}
            >
              <div className="h-full bg-card/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/50 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 overflow-hidden relative">
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 rounded-full text-xs font-medium group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 rounded-lg transition-all border border-emerald-400/30 hover:border-emerald-400/60"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 rounded-lg transition-all border border-cyan-400/30 hover:border-cyan-400/60"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

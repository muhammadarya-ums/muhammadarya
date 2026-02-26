'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ExternalLink, Github } from 'lucide-react'
import { GlassCard } from './glass-card'

export interface ProjectItem {
  id: string
  title: string
  description: string
  tagline: string
  fullDescription: string
  technologies: string[]
  github?: string
  demo?: string
  status?: 'completed' | 'in-progress'
}

interface ProjectAccordionProps {
  projects: ProjectItem[]
}

export function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <motion.div key={project.id} layout>
          <button
            onClick={() => toggleExpand(project.id)}
            className="w-full text-left"
          >
            <GlassCard
              className="cursor-pointer hover:bg-secondary/40 transition-colors group"
              accentColor="green"
              withBorder
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{project.tagline}</p>
                  {expandedId !== project.id && project.technologies.length > 0 && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <motion.div
                  animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </div>
            </GlassCard>
          </button>

          <AnimatePresence>
            {expandedId === project.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-2 ml-4 pl-4 border-l-2 border-primary/30 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">About</h4>
                    <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.status && (
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Status:{' '}
                        <span className="text-primary capitalize">{project.status}</span>
                      </p>
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors text-sm font-medium"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { GlassCard } from './glass-card'

export interface Fact {
  label: string
  value: string
  icon?: React.ReactNode
}

interface QuickFactsProps {
  facts: Fact[]
}

export function QuickFacts({ facts }: QuickFactsProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {facts.map((fact) => (
        <motion.div key={fact.label} variants={item}>
          <GlassCard className="h-full flex flex-col justify-center text-center" accentColor="green">
            {fact.icon && <div className="flex justify-center mb-3 text-primary text-3xl">{fact.icon}</div>}
            <p className="text-3xl md:text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Sora' }}>
              {fact.value}
            </p>
            <p className="text-sm text-muted-foreground">{fact.label}</p>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  )
}

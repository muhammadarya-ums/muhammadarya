'use client'

import { motion } from 'framer-motion'

export interface Skill {
  name: string
  level: 'expert' | 'proficient' | 'learning'
}

interface KnowledgeGraphProps {
  skills: Skill[]
}

export function KnowledgeGraph({ skills }: KnowledgeGraphProps) {
  const expertSkills = skills.filter((s) => s.level === 'expert')
  const proficientSkills = skills.filter((s) => s.level === 'proficient')
  const learningSkills = skills.filter((s) => s.level === 'learning')

  const SkillBadge = ({ skill, index, total }: { skill: Skill; index: number; total: number }) => {
    const isExpert = skill.level === 'expert'
    const colors = isExpert
      ? 'bg-primary text-primary-foreground border-primary'
      : skill.level === 'proficient'
        ? 'bg-primary/20 text-primary border-primary/50'
        : 'bg-muted text-muted-foreground border-muted'

    return (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ scale: 1.05 }}
        className="relative group"
      >
        <div className={`px-4 py-2 rounded-full border ${colors} font-medium text-sm transition-all hover:shadow-lg`}>
          {skill.name}
        </div>
      </motion.div>
    )
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <div className="space-y-8">
      {/* Expert Level */}
      {expertSkills.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            Expert
          </h4>
          <motion.div variants={container} initial="hidden" whileInView="show" className="flex flex-wrap gap-3">
            {expertSkills.map((skill, i) => (
              <SkillBadge key={skill.name} skill={skill} index={i} total={expertSkills.length} />
            ))}
          </motion.div>
        </div>
      )}

      {/* Proficient Level */}
      {proficientSkills.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/50" />
            Proficient
          </h4>
          <motion.div variants={container} initial="hidden" whileInView="show" className="flex flex-wrap gap-3">
            {proficientSkills.map((skill, i) => (
              <SkillBadge key={skill.name} skill={skill} index={i} total={proficientSkills.length} />
            ))}
          </motion.div>
        </div>
      )}

      {/* Learning Level */}
      {learningSkills.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-muted-foreground mb-4 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-muted-foreground" />
            Learning
          </h4>
          <motion.div variants={container} initial="hidden" whileInView="show" className="flex flex-wrap gap-3">
            {learningSkills.map((skill, i) => (
              <SkillBadge key={skill.name} skill={skill} index={i} total={learningSkills.length} />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  )
}

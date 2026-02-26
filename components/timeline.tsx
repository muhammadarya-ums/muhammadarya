'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const timelineData = [
  {
    year: '2022',
    title: 'Started CS Degree',
    organization: 'Universitas Muhammadiyah',
    description: 'Began computer science journey with focus on web development and algorithms.',
    color: 'emerald',
  },
  {
    year: '2023',
    title: 'Web Development Lead',
    organization: 'Campus Tech Club',
    description: 'Led a team of 5 developers in building campus management applications.',
    color: 'cyan',
  },
  {
    year: '2023',
    title: 'Fullstack Developer Intern',
    organization: 'TechStartup Inc',
    description: 'Developed and deployed 3 production applications using React and Node.js.',
    color: 'emerald',
  },
  {
    year: '2024',
    title: 'AI/ML Project Lead',
    organization: 'University Research Lab',
    description: 'Leading research project on machine learning for educational applications.',
    color: 'cyan',
  },
  {
    year: '2024',
    title: 'Open Source Contributor',
    organization: 'GitHub Community',
    description: 'Contributing to major open-source projects and mentoring junior developers.',
    color: 'emerald',
  },
  {
    year: '2025',
    title: 'Senior Developer',
    organization: 'Current Focus',
    description: 'Pursuing advanced AI/ML specialization and architecting scalable systems.',
    color: 'cyan',
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export function Timeline() {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Experience & </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-gray-400 text-lg">My journey from student to developer</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500 opacity-30" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}
              >
                {/* Content */}
                <div className="flex-1 md:pr-8">
                  <motion.div
                    whileHover={{ x: idx % 2 === 0 ? 10 : -10 }}
                    className={`bg-card/50 backdrop-blur-sm border ${
                      item.color === 'emerald' ? 'border-emerald-500/30' : 'border-cyan-500/30'
                    } rounded-xl p-6 hover:border-${item.color}-400/60 transition-all hover:shadow-xl hover:shadow-${item.color}-500/10`}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <CheckCircle2
                        size={24}
                        className={`text-${item.color}-400 mt-1 flex-shrink-0`}
                        color={item.color === 'emerald' ? '#4ade80' : '#22d3ee'}
                      />
                      <div>
                        <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                          {item.year}
                        </div>
                        <h3 className={`text-xl font-bold text-${item.color}-300`}>{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{item.organization}</p>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  className={`w-6 h-6 rounded-full border-4 ${
                    item.color === 'emerald'
                      ? 'bg-emerald-500 border-emerald-300'
                      : 'bg-cyan-500 border-cyan-300'
                  } flex-shrink-0 shadow-lg`}
                />

                {/* Empty space for alternating layout */}
                <div className="flex-1 md:pl-8" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-6"
        >
          {[
            { value: '10+', label: 'Projects Completed' },
            { value: '2+', label: 'Years Experience' },
            { value: '50+', label: 'Skills Mastered' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-card/30 backdrop-blur-sm border border-emerald-400/20 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const skillsData = [
  {
    category: 'Frontend',
    color: 'from-cyan-400 to-blue-400',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
  },
  {
    category: 'Backend',
    color: 'from-emerald-400 to-teal-400',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'RESTful APIs', 'Authentication'],
  },
  {
    category: 'AI/ML',
    color: 'from-purple-400 to-pink-400',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Data Analysis', 'Neural Networks', 'NLP'],
  },
  {
    category: 'Tools & DevOps',
    color: 'from-orange-400 to-red-400',
    skills: ['Git/GitHub', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Skills() {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I've mastered
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group"
            >
              <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full mb-4 group-hover:w-24 transition-all duration-300`} />
              <h3 className="text-2xl font-bold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-medium cursor-pointer shadow-lg hover:shadow-xl transition-all`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid with Icons Representation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {['React', 'Python', 'PostgreSQL', 'TypeScript', 'Next.js', 'TensorFlow', 'Docker', 'AWS'].map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="aspect-square bg-card/30 backdrop-blur-sm border border-emerald-400/20 rounded-xl flex items-center justify-center hover:border-cyan-400/50 transition-all cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {tech.charAt(0)}
                </div>
                <p className="text-xs text-gray-400 group-hover:text-gray-300">{tech}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

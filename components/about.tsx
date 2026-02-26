'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate Computer Science student at <span className="text-emerald-400 font-semibold">Universitas Muhammadiyah</span>, driven by a love for technology and problem-solving. With a foundation in both frontend and backend development, I strive to create impactful digital solutions.
              </p>
              <p className="text-lg leading-relaxed">
                My journey in tech has taught me that the best applications aren't just functional—they're intuitive, performant, and accessible. I'm particularly interested in exploring how AI and machine learning can solve real-world problems while maintaining ethical standards.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, learning new technologies, or mentoring fellow students. I believe in continuous learning and sharing knowledge within our community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/50 transition-all">
              <h3 className="text-emerald-400 font-bold mb-2 text-lg">Education</h3>
              <p className="text-gray-300">
                <strong>Universitas Muhammadiyah</strong><br />
                Computer Science (Informatics)<br />
                <span className="text-sm text-gray-400">Expected Graduation: 2025</span>
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all">
              <h3 className="text-cyan-400 font-bold mb-2 text-lg">Focus Areas</h3>
              <ul className="space-y-1 text-gray-300">
                <li>✓ Full-Stack Web Development</li>
                <li>✓ Machine Learning & AI</li>
                <li>✓ Cloud Technologies</li>
                <li>✓ System Design & Architecture</li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-400/50 transition-all">
              <h3 className="text-emerald-400 font-bold mb-2 text-lg">Philosophy</h3>
              <p className="text-gray-300">
                "Technology should serve humanity. I'm committed to building solutions that are not just innovative, but also accessible and ethically responsible."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

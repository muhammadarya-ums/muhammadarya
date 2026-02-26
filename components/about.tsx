'use client'

import { motion } from 'framer-motion'
import { GlassCard } from './glass-card'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground" style={{ fontFamily: 'Sora' }}>
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Passionate Computer Science student exploring the intersection of code, design, and innovation.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  I'm a passionate Computer Science student at <span className="text-primary font-semibold">Universitas Muhammadiyah</span>, driven by a love for technology and problem-solving. With a foundation in both frontend and backend development, I strive to create elegant solutions that make a real impact.
                </p>
                <p>
                  My journey in tech has taught me that the best applications aren't just functional—they're intuitive, performant, and accessible. I'm particularly interested in exploring how AI and machine learning can solve real-world problems while maintaining ethical standards.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, learning new technologies, or mentoring fellow students. I believe in continuous learning and sharing knowledge within our community.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Quick Facts */}
            <motion.div variants={itemVariants} className="space-y-4">
              <GlassCard accentColor="green" className="space-y-3">
                <h3 className="font-semibold text-primary uppercase text-sm tracking-wider">Location</h3>
                <p className="text-foreground">Indonesia</p>
              </GlassCard>

              <GlassCard accentColor="green" className="space-y-3">
                <h3 className="font-semibold text-primary uppercase text-sm tracking-wider">Education</h3>
                <p className="text-foreground">BS Computer Science</p>
                <p className="text-sm text-muted-foreground">Universitas Muhammadiyah</p>
              </GlassCard>

              <GlassCard accentColor="green" className="space-y-3">
                <h3 className="font-semibold text-primary uppercase text-sm tracking-wider">Focus</h3>
                <p className="text-foreground">Full-Stack Development</p>
                <p className="text-foreground">AI & Machine Learning</p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Sora' }}>
              Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Learning',
                  description: 'Constantly exploring new technologies and methodologies to stay at the forefront of development.',
                },
                {
                  title: 'Impact',
                  description: 'Creating solutions that solve real problems and improve the lives of users.',
                },
                {
                  title: 'Excellence',
                  description: 'Delivering clean, maintainable code with attention to detail and performance.',
                },
              ].map((value) => (
                <GlassCard key={value.title} accentColor="green">
                  <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

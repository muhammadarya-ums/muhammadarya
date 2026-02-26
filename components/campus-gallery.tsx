'use client'

import { motion } from 'framer-motion'

const galleryItems = [
  {
    id: 1,
    caption: 'Coding Workshop',
    description: 'Hands-on learning session',
    aspectRatio: 'aspect-square',
  },
  {
    id: 2,
    caption: 'Team Collaboration',
    description: 'Building projects together',
    aspectRatio: 'aspect-video',
  },
  {
    id: 3,
    caption: 'Innovation Challenge',
    description: 'Problem-solving hackathon',
    aspectRatio: 'aspect-square',
  },
  {
    id: 4,
    caption: 'Campus Life',
    description: 'Growing as a developer',
    aspectRatio: 'aspect-video',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

export function CampusGallery() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`group cursor-pointer ${
                  idx === 1 || idx === 3 ? 'md:col-span-2' : ''
                }`}
              >
                <div
                  className={`${item.aspectRatio} bg-gradient-to-br from-muted to-muted/50 rounded-lg overflow-hidden relative border border-border/50 hover:border-primary/30 transition-all duration-300`}
                >
                  {/* Placeholder with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-background/80 via-transparent to-transparent group-hover:from-background/90 transition-all duration-300">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-1"
                    >
                      <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: 'Sora' }}>
                        {item.caption}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

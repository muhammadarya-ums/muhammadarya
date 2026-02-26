'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { OrganicBg } from './organic-bg'

const roles = ['Fullstack Developer', 'AI Enthusiast', 'Informatics Student']

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20 px-4 md:px-8">
      <OrganicBg />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right Side: Profile Photo (Mobile - shown first on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first md:order-last flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Organic blob background */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 w-full h-full text-primary/20"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
                  </filter>
                </defs>
                <circle cx="100" cy="100" r="80" fill="currentColor" filter="url(#noise)" />
              </svg>

              {/* Profile image placeholder with hover effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-8 rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary/60 transition-colors shadow-2xl"
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 flex items-center justify-center cursor-pointer relative group"
                  whileHover="hover"
                >
                  {/* Placeholder content */}
                  <div className="text-center">
                    <div className="text-5xl mb-2">👨‍💻</div>
                    <p className="text-sm text-foreground/60 font-medium">Your Photo</p>
                  </div>

                  {/* B&W to Color overlay on hover */}
                  <motion.div
                    variants={{
                      hover: { opacity: 0 },
                    }}
                    className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-all duration-300"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-last md:order-first"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground"
                style={{ fontFamily: 'Sora' }}
              >
                Building the <span className="text-primary">future</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="h-16 flex items-end"
              >
                <div className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Computer Science student at Universitas Muhammadiyah. Passionate about creating elegant solutions to complex problems through code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Glassmorphic Card */}
              <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-secondary/20 border border-primary/30 overflow-hidden">
                <OrganicBg />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 px-8">
                    <div className="text-5xl font-bold text-primary" style={{ fontFamily: 'Sora' }}>
                      &lt; /&gt;
                    </div>
                    <p className="text-sm text-muted-foreground">Code • Design • Innovation</p>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 w-16 h-16 rounded-lg border border-primary/50 bg-primary/5"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-8 left-4 w-12 h-12 rounded-lg border border-primary/30 bg-primary/5"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">Scroll to explore</p>
          <svg
            className="w-5 h-5 mx-auto text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}

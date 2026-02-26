'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 bg-background border-t border-emerald-500/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Ahmad
            </h3>
            <p className="text-gray-400">
              Computer Science student crafting elegant solutions with modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Tutorials', 'Documentation', 'Contact'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-emerald-500/10 mb-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm"
        >
          <p>
            © {currentYear} Ahmad's Portfolio. All rights reserved. Built with Next.js & Framer Motion.
          </p>
          <p className="text-xs text-gray-500 mt-4 md:mt-0">
            Universitas Muhammadiyah • Indonesia
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

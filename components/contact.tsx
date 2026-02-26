'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactFormSchema, type ContactFormInput } from '@/lib/validation'
import { GlassCard } from './glass-card'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website_url: '', // Honeypot field
  })
  const [errors, setErrors] = useState<Partial<ContactFormInput>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    // Sanitize input: trim whitespace and remove potential XSS characters
    let sanitizedValue = value.trim()
    if (name === 'message') {
      // Allow basic text but remove script-like patterns
      sanitizedValue = sanitizedValue.replace(/<script[^>]*>.*?<\/script>/gi, '')
    }
    
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormInput]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    // Check honeypot - if filled, silently ignore (prevent spam bots)
    if (formData.website_url) {
      console.log('[Security] Honeypot field filled - likely spam bot')
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '', website_url: '' })
      setTimeout(() => setSubmitted(false), 3000)
      setIsSubmitting(false)
      return
    }

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        website_url: formData.website_url,
      })

      // Here you would typically send to your backend API
      console.log('[Contact Form] Validated submission:', validatedData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '', website_url: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error: any) {
      // Handle Zod validation errors
      if (error.errors) {
        const newErrors: Partial<ContactFormInput> = {}
        error.errors.forEach((err: any) => {
          const field = err.path[0] as keyof ContactFormInput
          newErrors[field] = err.message
        })
        setErrors(newErrors)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:hello@example.com',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground" style={{ fontFamily: 'Sora' }}>
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible">
              <GlassCard className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input/50 border rounded-lg text-foreground placeholder-muted-foreground transition-colors ${
                        errors.name ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'
                      } focus:outline-none focus:ring-2`}
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-input/50 border rounded-lg text-foreground placeholder-muted-foreground transition-colors ${
                        errors.email ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'
                      } focus:outline-none focus:ring-2`}
                      placeholder="your@email.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-input/50 border rounded-lg text-foreground placeholder-muted-foreground transition-colors resize-none ${
                        errors.message ? 'border-destructive focus:ring-destructive' : 'border-border focus:ring-primary'
                      } focus:outline-none focus:ring-2`}
                      placeholder="Your message..."
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot Field (hidden from users) */}
                  <input
                    type="text"
                    name="website_url"
                    value={formData.website_url}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {/* Success Message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-primary/20 border border-primary rounded-lg flex items-center gap-2 text-primary"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="space-y-8">
              {/* Info Cards */}
              <GlassCard accentColor="green">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Email
                    </h3>
                    <a href="mailto:hello@example.com" className="text-lg text-primary hover:underline">
                      hello@example.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Location
                    </h3>
                    <p className="text-lg text-foreground">Indonesia</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Availability
                    </h3>
                    <p className="text-lg text-foreground">Open to opportunities</p>
                  </div>
                </div>
              </GlassCard>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  Follow Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit my ${social.label}`}
                        className="p-4 rounded-lg border border-primary/30 bg-secondary/30 text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 group"
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">{social.label}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

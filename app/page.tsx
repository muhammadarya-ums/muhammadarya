import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Timeline } from '@/components/timeline'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="overflow-hidden">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <Projects />
        <section id="experience">
          <Timeline />
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

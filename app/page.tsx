import Contact from '@/components/contact/contact'
import Hero from '@/components/hero/hero'
import Projects from '@/components/projects/projects'
import Skills from '@/components/skills/skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Hero />
      {/* <Goals /> */}
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

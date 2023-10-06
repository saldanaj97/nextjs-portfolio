import Goals from '@/components/goals/goals'
import Hero from '@/components/hero/hero'
import Skills from '@/components/skills/skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between md:p-24">
      <Hero />
      <Goals />
      <Skills />
    </main>
  )
}

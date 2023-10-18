'use client'

import Lenis from '@studio-freight/lenis'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface Project {
  description: string
  image: string
  name: string
}

const TestProjects = [
  {
    description: 'This is a test description for project 1',
    image: 'iracingweekly.png',
    name: 'Project 1',
  },
  {
    description: 'This is a test description for project 2',
    image: 'iracingweekly.png',
    name: 'Project 2',
  },
  {
    description: 'This is a test description for project 3',
    image: 'iracingweekly.png',
    name: 'Project 3',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ offset: ['end end', 'start start'], target: ref })
  const scaleX = useSpring(scrollYProgress, { damping: 30, stiffness: 100 })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div ref={ref} className="relative bg-primary">
      <div className="sticky left-0 top-8 z-50 px-24">
        <h1 className="mb-2 text-center text-4xl font-extrabold text-white md:text-7xl">Projects</h1>
        <motion.div style={{ scaleX }} className="mx-8 h-3 bg-accent" />
      </div>
      {TestProjects.map((item) => (
        <SingleProject item={item} key={item.name} />
      ))}
    </div>
  )
}

const SingleProject = ({ item }: { item: Project }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], ['-300', '300'])

  return (
    <section ref={ref}>
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <div className="m-auto flex h-full max-w-[1366px] items-center justify-center gap-8 ">
          <div className="h-1/2 flex-1">
            <Image
              src={`/images/${item.image}`}
              alt={'project-img'}
              height={1000}
              width={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div className="flex flex-col gap-10" style={{ y }}>
            <h2 className="text-4xl font-bold text-white">{item.name}</h2>
            <p className="text-xl text-gray-500">{item.description}</p>
            <button className="mx-4 w-1/2 rounded-md bg-accent p-3 text-lg font-semibold text-white">
              View Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

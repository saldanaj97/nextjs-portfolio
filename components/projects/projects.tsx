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
      <div className="sticky left-0 top-4 z-50 lg:px-24">
        <h1 className="mb-2 text-center text-2xl font-extrabold text-white md:text-3xl lg:text-4xl xl:text-5xl">
          Projects
        </h1>
        <motion.div style={{ scaleX }} className="mx-8 mb-8 h-3 bg-accent" />
      </div>
      <div className="flex flex-col">
        {TestProjects.map((item) => (
          <SingleProject item={item} key={item.name} />
        ))}
      </div>
    </div>
  )
}

const SingleProject = ({ item }: { item: Project }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useTransform(scrollYProgress, [0, 1], ['-300', '300'])

  return (
    <div ref={ref} className="h-[65vh] md:h-[75vh] lg:h-[80vh]">
      <div className="flex w-full items-center justify-center overflow-hidden">
        <div className="m-auto flex h-full max-w-[1366px] flex-col items-center justify-center gap-5 lg:flex-row ">
          <div className="md:h-1/2 md:flex-1">
            <Image
              src={`/images/${item.image}`}
              alt={'project-img'}
              height={600}
              width={600}
              className="object-cover md:h-full md:w-full"
            />
          </div>
          <motion.div className="flex flex-col gap-3 md:gap-5 xl:gap-7" style={{ y }}>
            <h2 className="text-center text-xl font-bold text-white lg:text-left">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.description}</p>
            <div className="flex flex-row justify-center">
              <button className="mx-4 mb-8 rounded-md bg-accent p-2 text-sm font-semibold text-white lg:text-base xl:w-1/2">
                View Project
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

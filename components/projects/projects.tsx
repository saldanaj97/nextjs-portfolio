'use client'

import Lenis from '@studio-freight/lenis'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef } from 'react'

import { deployedProjects } from '../portfolioData'

interface Project {
  description: string
  screenshot: StaticImageData
  name: string
}

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
      <div className="sticky left-0 top-4 z-50 lg:px-8">
        <h1 className="mb-2 text-center text-2xl font-extrabold text-white md:text-3xl lg:text-4xl xl:text-5xl">
          Projects
        </h1>
        <motion.div style={{ scaleX }} className="mb-8 h-3 bg-accent" />
      </div>
      <div className="flex flex-col">
        {deployedProjects.projects.map((project) => (
          <SingleProject item={project} key={project.name} />
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
          <div className="w-1/2">
            <Image src={item.screenshot} alt={'project-img'} className="object-cover" />
          </div>
          <motion.div className="flex w-1/2 flex-col gap-3 md:gap-5 xl:gap-7" style={{ y }}>
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

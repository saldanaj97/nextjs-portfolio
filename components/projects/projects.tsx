'use client'

import Lenis from '@studio-freight/lenis'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

import useDimension from '@/hooks/useDimension'

import styles from './page.module.scss'

const images = [
  'iracingweekly.png',
  'chattyio.png',
  'chattyio.png',
  'chattyio.png',
  'chattyio.png',
  'chattyio.png',
  'chattyio.png',
  'chattyio.png',
  'chattyio.png',
  'chattyio.png',
  'chattyio.png',
  'chattyio.png',
]

export default function Projects() {
  const container = useRef(null)
  const { height } = useDimension()
  const { scrollYProgress } = useScroll({ offset: ['start end', 'end start'], target: container })
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 0.95])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5])

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <div className="flex flex-row">
      <div ref={container} className={`${styles.gallery} w-1/2`}>
        <Column images={[images[0], images[1], images[2], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11], images[11]]} y={y4} />
      </div>
      <div className="flex w-1/2 flex-col bg-primary p-24 text-white">
        <h1 className="mb-2 text-4xl font-extrabold text-white md:text-7xl">Projects</h1>
      </div>
    </div>
  )
}

interface ColumnProps {
  images: string[]
  y?: MotionValue<number>
}

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={`/images/${src}`} alt="project-image" fill />
          </div>
        )
      })}
    </motion.div>
  )
}

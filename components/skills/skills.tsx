'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { BsFiletypeScss } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { SiAdobexd, SiChakraui, SiDaisyui, SiFigma, SiGithub, SiGraphql, SiTrpc } from 'react-icons/si'
import {
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandMongodb,
  TbBrandPrisma,
  TbBrandPython,
  TbBrandTypescript,
  TbFileTypeSql,
} from 'react-icons/tb'

import ProgrammerImg from '../../public/images/hero-img.svg'

export default function Skills() {
  const languages = [
    { icon: <TbBrandTypescript size={50} className="text-white" />, text: 'Typescript' },
    { icon: <TbBrandJavascript size={50} className="text-white" />, text: 'Javascript' },
    { icon: <FaReact size={50} className="text-white" />, text: 'React' },
    { icon: <TbBrandHtml5 size={50} className="text-white" />, text: 'HTML' },
    { icon: <TbBrandPython size={50} className="text-white" />, text: 'Python' },
  ]

  const databases = [
    { icon: <TbFileTypeSql size={50} className="text-white" />, text: 'SQL' },
    { icon: <TbBrandPrisma size={50} className="text-white" />, text: 'Prisma' },
    { icon: <TbBrandMongodb size={50} className="text-white" />, text: 'MongoDB' },
  ]

  const uiTechnologies = [
    { icon: <TbBrandCss3 size={50} className="text-white" />, text: 'CSS' },
    { icon: <BsFiletypeScss size={50} className="text-white" />, text: 'SCSS' },
    { icon: <BiLogoTailwindCss size={50} className="text-white" />, text: 'Tailwind' },
    { icon: <SiDaisyui size={50} className="text-white" />, text: 'Daisy UI' },
    { icon: <SiChakraui size={50} className="text-white" />, text: 'Chakra UI' },
  ]

  const otherTechnologies = [
    { icon: <SiTrpc size={50} className="text-white" />, text: 'TRPC' },
    { icon: <SiGraphql size={50} className="text-white" />, text: 'GraphQL' },
    { icon: <SiGithub size={50} className="text-white" />, text: 'Github' },
    { icon: <SiFigma size={50} className="text-white" />, text: 'Figma' },
    { icon: <SiAdobexd size={50} className="text-white" />, text: 'Adobe XD' },
  ]

  const container = {
    hidden: { rotate: 90 },
    show: {
      rotate: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const skillVarients = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, transition: { delay: 0.2 }, y: 0 },
  }

  return (
    <section id="skills">
      <div className="flex h-screen flex-row">
        <motion.div className="mt-8 flex w-1/2 flex-col bg-primary px-24 text-white">
          <h1 className="mb-2 text-4xl font-extrabold text-white md:text-7xl">Skills</h1>
          <p className="mb-2 text-xl text-white">
            Below are the different languages/frameworks, technologies, and UI libraries I have worked with.
          </p>

          <div className="mb-4 flex flex-col">
            <p className="mb-4 w-[315px] text-xl font-semibold">Languages/Frameworks</p>
            <ul className=" flex-wrap justify-center">
              <motion.div className="mb-4 flex flex-row" variants={skillVarients}>
                {languages.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 }, translateY: 0 }}
                    className="mx-4 flex w-[100px] flex-col items-center"
                  >
                    {skill.icon}
                    <p>{skill.text}</p>
                  </motion.li>
                ))}
              </motion.div>
            </ul>
          </div>

          <div className="mb-4 flex flex-col">
            <p className="mb-4 w-[315px] text-xl font-semibold">Databases and ORMS</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <motion.div className="mb-4 flex flex-row" variants={skillVarients}>
                {databases.map((db, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 }, translateY: 0 }}
                    className="mx-4 flex w-[100px] flex-col items-center"
                  >
                    {db.icon}
                    <p>{db.text}</p>
                  </motion.li>
                ))}
              </motion.div>
            </ul>
          </div>

          <div className="mb-4 flex flex-col">
            <p className="mb-4 w-[315px] text-xl font-semibold">UI Technologies</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <motion.div className="mb-4 flex flex-row" variants={skillVarients}>
                {uiTechnologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 }, translateY: 0 }}
                    className="mx-4 flex w-[100px] flex-col items-center"
                  >
                    {tech.icon}
                    <p>{tech.text}</p>
                  </motion.li>
                ))}
              </motion.div>
            </ul>
          </div>

          <div className="mb-4 flex flex-col">
            <p className="mb-4 w-[315px] text-xl font-semibold">Other Technologies</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <motion.div className="mb-4 flex flex-row" variants={skillVarients}>
                {otherTechnologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 }, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-4 flex w-[100px] flex-col items-center"
                  >
                    {tech.icon}
                    <p>{tech.text}</p>
                  </motion.li>
                ))}
              </motion.div>
            </ul>
          </div>
        </motion.div>
        <Image alt="dev-activity-img" src={ProgrammerImg} width={700} height={700} className="w-1/2 px-12" />
      </div>
    </section>
  )
}

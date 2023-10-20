'use client'

import './skills.scss'

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
    { icon: <TbBrandTypescript className="dynamic-icon text-white" />, text: 'Typescript' },
    { icon: <TbBrandJavascript className="dynamic-icon text-white" />, text: 'Javascript' },
    { icon: <FaReact className="dynamic-icon text-white" />, text: 'React' },
    { icon: <TbBrandHtml5 className="dynamic-icon text-white" />, text: 'HTML' },
    { icon: <TbBrandPython className="dynamic-icon text-white" />, text: 'Python' },
  ]

  const databases = [
    { icon: <TbFileTypeSql className="dynamic-icon text-white" />, text: 'SQL' },
    { icon: <TbBrandPrisma className="dynamic-icon text-white" />, text: 'Prisma' },
    { icon: <TbBrandMongodb className="dynamic-icon text-white" />, text: 'MongoDB' },
  ]

  const uiTechnologies = [
    { icon: <TbBrandCss3 className="dynamic-icon text-white" />, text: 'CSS' },
    { icon: <BsFiletypeScss className="dynamic-icon text-white" />, text: 'SCSS' },
    { icon: <BiLogoTailwindCss className="dynamic-icon text-white" />, text: 'Tailwind' },
    { icon: <SiDaisyui className="dynamic-icon text-white" />, text: 'Daisy UI' },
    { icon: <SiChakraui className="dynamic-icon text-white" />, text: 'Chakra UI' },
  ]

  const otherTechnologies = [
    { icon: <SiTrpc className="dynamic-icon text-white" />, text: 'TRPC' },
    { icon: <SiGraphql className="dynamic-icon text-white" />, text: 'GraphQL' },
    { icon: <SiGithub className="dynamic-icon text-white" />, text: 'Github' },
    { icon: <SiFigma className="dynamic-icon text-white" />, text: 'Figma' },
    { icon: <SiAdobexd className="dynamic-icon text-white" />, text: 'Adobe XD' },
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
    <div id="skills">
      <div className="flex h-full flex-col md:flex-row ">
        <motion.div className="flex w-full flex-col bg-primary p-8 text-white lg:w-1/2 xl:px-8">
          <Image alt="dev-activity-img" src={ProgrammerImg} className="w-full md:hidden" />

          <h1 className="mb-2 text-center text-2xl font-extrabold text-white md:text-left md:text-3xl lg:text-4xl xl:text-5xl">
            Skills
          </h1>
          <p className="mb-4 text-center text-sm text-white md:text-left lg:text-base xl:text-xl">
            Below are the different languages/frameworks, technologies, and UI libraries I have worked with.
          </p>

          <div className="flex flex-col lg:mb-4">
            <p className="mb-4 text-base font-semibold md:w-[315px] xl:text-xl">Languages/Frameworks</p>
            <ul className="flex flex-row justify-center lg:w-[500px] xl:lg:w-[600px]">
              <motion.div className="mb-4 flex flex-row flex-wrap justify-center" variants={skillVarients}>
                {languages.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 }, translateY: 0 }}
                    className="flex w-[75px] flex-col items-center lg:mx-4"
                  >
                    {skill.icon}
                    <p className="text-sm lg:text-lg">{skill.text}</p>
                  </motion.li>
                ))}
              </motion.div>
            </ul>
          </div>

          <div className="flex flex-col lg:mb-4">
            <p className="mb-4 text-base font-semibold md:w-[315px] xl:text-xl">Databases and ORMS</p>
            <ul className="flex flex-row justify-center lg:w-[500px] xl:lg:w-[600px]">
              <motion.div className="mb-4 flex flex-row flex-wrap justify-center" variants={skillVarients}>
                {databases.map((db, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 }, translateY: 0 }}
                    className="flex w-[75px] flex-col items-center md:w-[100px] lg:mx-4 "
                  >
                    {db.icon}
                    <p className="text-sm lg:text-lg">{db.text}</p>
                  </motion.li>
                ))}
              </motion.div>
            </ul>
          </div>

          <div className="flex flex-col lg:mb-4">
            <p className="mb-4 text-base font-semibold md:w-[315px] xl:text-xl">UI Technologies</p>
            <ul className="flex flex-row justify-center lg:w-[500px] xl:lg:w-[600px]">
              <motion.div className="mb-4 flex flex-row flex-wrap justify-center" variants={skillVarients}>
                {uiTechnologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 }, translateY: 0 }}
                    className="flex w-[75px] flex-col items-center md:w-[100px] lg:mx-4 "
                  >
                    {tech.icon}
                    <p className="text-sm lg:text-lg">{tech.text}</p>
                  </motion.li>
                ))}
              </motion.div>
            </ul>
          </div>

          <div className="flex flex-col lg:mb-4">
            <p className="mb-4 text-base font-semibold md:w-[315px] xl:text-xl">Other Technologies</p>
            <ul className="flex flex-row justify-center lg:w-[500px] xl:lg:w-[600px]">
              <motion.div className="mb-4 flex flex-row flex-wrap justify-center" variants={skillVarients}>
                {otherTechnologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.5 }, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex w-[75px] flex-col items-center md:w-[100px] lg:mx-4"
                  >
                    {tech.icon}
                    <p className="text-sm lg:text-lg">{tech.text}</p>
                  </motion.li>
                ))}
              </motion.div>
            </ul>
          </div>
        </motion.div>
        <Image
          alt="dev-activity-img"
          src={ProgrammerImg}
          width={700}
          height={700}
          className="hidden md:w-1/2 lg:flex lg:px-12"
        />
      </div>
    </div>
  )
}

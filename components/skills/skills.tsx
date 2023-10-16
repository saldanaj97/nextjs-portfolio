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

import ProgrammerImg from '@/public/images/hero-img.svg'

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex h-screen flex-row">
        <Image alt="dev-activity-img" src={ProgrammerImg} width={700} height={700} className="w-1/2 px-12" />
        <div className="flex w-1/2 flex-col bg-primary p-24 text-white">
          <h1 className="mb-2 text-4xl font-extrabold text-white md:text-7xl">Skills</h1>
          <p className="mb-2 text-xl text-white">
            Below are the different languages/framworks, technologies, and UI libraries I have worked with.
          </p>
          <div className="mb-4 flex flex-col">
            <p className="mb-4 w-[315px] text-xl font-semibold">Languages/Frameworks</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandTypescript size={50} className="text-white" />
                <p>Typescript</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center ">
                <TbBrandJavascript size={50} className="text-white" />
                <p>Javascript</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <FaReact size={50} className="text-white" />
                <p>React</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandHtml5 size={50} className="text-white" />
                <p>HTML</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandPython size={50} className="text-white" />
                <p>Python</p>
              </li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col">
            <p className="mb-4 w-[315px] text-xl font-semibold">Databases and ORMS</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbFileTypeSql size={50} className="text-white" />
                <p>SQL</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandPrisma size={50} className="text-white" />
                <p>Prisma</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandMongodb size={50} className="text-white" />
                <p>MongoDB</p>
              </li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col">
            <p className="mb-4 w-[315px] text-xl font-semibold">UI Technologies</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <li className="mx-4 flex w-[100px]  flex-col items-center">
                <TbBrandCss3 size={50} className="text-white" />
                <p>CSS</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <BsFiletypeScss size={50} className="text-white" />
                <p>SCSS</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <BiLogoTailwindCss size={50} className="text-white" />
                <p>Tailwind</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiDaisyui size={50} className="text-white" />
                <p>Daisy UI</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiChakraui size={50} className="text-white" />
                <p>Chakra UI</p>
              </li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col">
            <p className="mb-4 w-[315px] text-xl font-semibold">Other Technologies</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <li className="mx-4 flex  w-[100px] flex-col items-center">
                <SiTrpc size={50} className="text-white" />
                <p>TRPC</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiGraphql size={50} className="text-white" />
                <p>GraphQL</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiGithub size={50} className="text-white" />
                <p>Github</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiFigma size={50} className="text-white" />
                <p>Figma</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiAdobexd size={50} className="text-white" />
                <p>Adobe XD</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

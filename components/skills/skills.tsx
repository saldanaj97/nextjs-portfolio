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

import ProgrammerImg from '../../app/assets/images/programmer.svg'

export default function Skills() {
  return (
    <div className='md:h-screen"'>
      <div className="my-4 flex flex-row">
        <Image alt="dev-activity-img" src={ProgrammerImg} width={700} height={700} className="w-1/2" />
        <div className="mx-8 flex w-1/2 flex-col">
          <h1 className="mb-4 text-4xl font-extrabold text-primary md:text-7xl">Skills</h1>
          <p className="mb-4 text-xl">
            Below are the different languages/framworks, technologies, and UI libraries I have worked with.
          </p>
          <div className="mb-4 flex flex-col">
            <p className="w-[315px] text-xl font-semibold">Languages/Frameworks</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandTypescript size={50} className="text-secondary" />
                <p>Typescript</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center ">
                <TbBrandJavascript size={50} className="text-secondary" />
                <p>Javascript</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <FaReact size={50} className="text-secondary" />
                <p>React</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandHtml5 size={50} className="text-secondary" />
                <p>HTML</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandPython size={50} className="text-secondary" />
                <p>Python</p>
              </li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col">
            <p className="w-[315px] text-xl font-semibold ">Databases and ORMS</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbFileTypeSql size={50} className="text-secondary" />
                <p>SQL</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandPrisma size={50} className="text-secondary" />
                <p>Prisma</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <TbBrandMongodb size={50} className="text-secondary" />
                <p>MongoDB</p>
              </li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col">
            <p className="w-[315px] text-xl font-semibold ">UI Technologies</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <li className="mx-4 flex w-[100px]  flex-col items-center">
                <TbBrandCss3 size={50} className="text-secondary" />
                <p>CSS</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <BsFiletypeScss size={50} className="text-secondary" />
                <p>SCSS</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <BiLogoTailwindCss size={50} className="text-secondary" />
                <p>Tailwind</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiDaisyui size={50} className="text-secondary" />
                <p>Daisy UI</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiChakraui size={50} className="text-secondary" />
                <p>Chakra UI</p>
              </li>
            </ul>
          </div>
          <div className="mb-4 flex flex-col">
            <p className="w-[315px] text-xl font-semibold ">Other Technologies</p>
            <ul className="flex flex-row flex-wrap justify-center">
              <li className="mx-4 flex  w-[100px] flex-col items-center">
                <SiTrpc size={50} className="text-secondary" />
                <p>TRPC</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiGraphql size={50} className="text-secondary" />
                <p>GraphQL</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiGithub size={50} className="text-secondary" />
                <p>Github</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiFigma size={50} className="text-secondary" />
                <p>Figma</p>
              </li>
              <li className="mx-4 flex w-[100px] flex-col items-center">
                <SiAdobexd size={50} className="text-secondary" />
                <p>Adobe XD</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

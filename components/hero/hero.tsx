import Image from 'next/image'
import React from 'react'
import emoji from 'react-easy-emoji'

import heroImg from '@/public/images/hero-img.jpg'

import HeroButton from '../buttons/heroButton'
import { greeting } from '../portfolioData'

export default function Hero() {
  return (
    <div id="hero" className="bg-primary">
      <div className="flex flex-col lg:flex-row">
        <div className="m-auto flex w-3/5 flex-row justify-center lg:h-screen lg:w-1/2">
          <Image
            src={heroImg}
            alt="computer-image"
            className="overflow-hidden object-cover pt-16 md:h-full md:w-full lg:pt-0"
          />
        </div>
        <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:px-24">
          <div className="mb-2 flex flex-row text-xl">
            <p className="mb-2 text-2xl font-extrabold text-white lg:text-4xl xl:text-5xl">
              Hi, I&apos;m <span className="text-accent">Juan</span>
              <span className="inline-block animate-hello">{emoji('👋')}</span>
            </p>
          </div>
          <p className="mb-2 text-base text-white lg:text-lg xl:text-xl">{greeting.jobTitle}</p>
          <p className="mb-4 text-sm text-white lg:text-base xl:text-lg">{greeting.subTitle}</p>
          <div className="flex flex-row justify-center ">
            <HeroButton buttonText="Contact Me" href="" />
            <HeroButton buttonText="View Résumé" href={greeting.resumeLink} />
          </div>
        </div>
      </div>
    </div>
  )
}

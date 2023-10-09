import Image from 'next/image'
import React from 'react'
import emoji from 'react-easy-emoji'

import heroImg from '../../app/assets/images/hero-img.jpg'
import HeroButton from '../buttons/heroButton'
import { greeting } from '../portfolioData'

export default function Hero() {
  return (
    <div id="greeting" className="px-12 md:h-screen">
      <div className="flex flex-col justify-center md:flex-row">
        <div className="md:flex md:w-1/2">
          {/* Overlay */}
          <Image
            alt="computer-image"
            width="550"
            height="550"
            src={heroImg}
            className="absolute z-0 translate-y-1 scale-110 rounded-full object-fill opacity-50 blur-xl saturate-150 filter"
          />
          {/* Image */}
          <Image alt="computer-image" width="550" height="550" src={heroImg} className="z-20 rounded-full" />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 ">
          <div className="mb-4 flex flex-row text-xl">
            <p className="text-4xl font-extrabold text-primary md:text-7xl">
              {greeting.title} <span className="inline-block animate-hello">{emoji('👋')}</span>
            </p>
          </div>
          <p className="mb-4 text-lg md:text-xl">{greeting.subTitle}</p>
          <div className="flex flex-row justify-center">
            <HeroButton buttonText="Contact Me" href="" />
            <HeroButton buttonText="View Résumé" href={greeting.resumeLink} />
          </div>
        </div>
      </div>
    </div>
  )
}
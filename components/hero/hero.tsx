import Image from 'next/image'
import React from 'react'
import emoji from 'react-easy-emoji'

import heroImg from '../../app/assets/images/hero-img.jpg'
import HeroButton from '../buttons/heroButton'
import { greeting } from '../portfolioData'

export default function Hero() {
  return (
    <div id="greeting" className="min-h-screen bg-primary">
      <div className="flex flex-col md:flex-row">
        <div className="flex-row md:flex md:h-screen md:w-1/2">
          <Image src={heroImg} alt="computer-image" className="h-full w-full overflow-hidden object-cover" />
        </div>
        <div className="flex flex-col justify-center px-24 md:w-1/2">
          <div className="mb-2 flex flex-row text-xl">
            <p className="text-4xl font-extrabold text-white md:text-7xl">
              {greeting.title} <span className="inline-block animate-hello">{emoji('👋')}</span>
            </p>
          </div>
          <p className="mb-2 text-4xl text-white ">{greeting.jobTitle}</p>
          <p className="mb-4 text-lg text-white md:text-xl">{greeting.subTitle}</p>
          <div className="flex flex-row justify-center">
            <HeroButton buttonText="Contact Me" href="" />
            <HeroButton buttonText="View Résumé" href={greeting.resumeLink} />
          </div>
        </div>
      </div>
    </div>
  )
}

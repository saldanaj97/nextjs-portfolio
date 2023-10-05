import Link from 'next/link'
import React from 'react'
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr'

import { socialMediaLinks } from '../portfolioData'

export default function socialMedia() {
  return (
    <div className="flex flex-row justify-center">
      {socialMediaLinks.github ? (
        <Link href={socialMediaLinks.github}>
          <GrGithub />
          <span></span>
        </Link>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <Link href={socialMediaLinks.linkedin}>
          <GrLinkedin />
          <span></span>
        </Link>
      ) : null}

      {socialMediaLinks.gmail ? (
        <Link href={`mailto:${socialMediaLinks.gmail}`}>
          <GrMail />
          <span></span>
        </Link>
      ) : null}
    </div>
  )
}

import Image from 'next/image'

import DevActivityImg from '../../app/assets/images/developerActivity.svg'
import { aboutMe } from '../portfolioData'

export default function Goals() {
  return (
    <div className="px-12 md:h-screen" id="about-me">
      <div className="mb-8 flex flex-row">
        <div className="mx-8 flex flex-col">
          <h1 className="mb-4 text-4xl font-extrabold text-primary md:text-7xl">{aboutMe.title}</h1>
          <div>
            <p className="text-xl" key={aboutMe.goals[0]}>
              {aboutMe.goals[0]}
            </p>
            <p className="text-xl" key={aboutMe.goals[1]}>
              {aboutMe.goals[1]}
            </p>
            <p className="text-xl" key={aboutMe.goals[2]}>
              {aboutMe.goals[2]}
            </p>
          </div>
        </div>
        <Image alt="dev-activity-img" src={DevActivityImg} width={800} height={800} />
      </div>
    </div>
  )
}

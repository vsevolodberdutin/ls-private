import React from 'react'
import {
  EducationBlock,
  IntroductionBlock,
  PublicationBlock,
  ConferenceBlock,
} from '@/app/components/AboutBlocks'

const AboutSection = () => {
  return (
    <section className="flex w-svw flex-col items-center section-odd">
      <div className="w-screen h-fit flex flex-col items-center">
        <IntroductionBlock />
        <EducationBlock />
        <PublicationBlock />
        <ConferenceBlock />
      </div>
    </section>
  )
}

export default AboutSection

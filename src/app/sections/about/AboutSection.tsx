import React from 'react'
import * as about from '@/data/about.json'
import Image from 'next/image'
import {
  CompaniesBlock,
  EducationBlock,
  IntroductionBlock,
  PublicationBlock,
} from '@/app/components/aboutBlocks/AboutBlocks'

const AboutSection = () => {
  return (
    <section className="flex min-h-screen w-svw flex-col items-center">
      <div className="w-screen h-fit flex flex-col items-center">
        <IntroductionBlock />
        <EducationBlock />
        <PublicationBlock />
        <CompaniesBlock />
      </div>
    </section>
  )
}

export default AboutSection

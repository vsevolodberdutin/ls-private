import React from 'react'
import { TabContainer, TabConfig } from '@/app/components/TabSystem/TabContainer'
import {
  IntroductionContent,
  PublicationContent,
  ConferenceContent,
} from '@/app/components/TabSystem/TabContent'
import { PhilosophyContent } from '@/app/components/TabSystem/PhilosophyContent'
import { UserCircle, BookOpen, Presentation, Lightbulb } from 'lucide-react'

const AboutSection = () => {
  const tabs: TabConfig[] = [
    {
      id: 'introduction',
      label: 'Будем\nзнакомы!',
      icon: <UserCircle className="w-full h-full" />,
      content: <IntroductionContent />,
    },
    {
      id: 'publications',
      label: 'Научные\nпубликации',
      icon: <BookOpen className="w-full h-full" />,
      content: <PublicationContent />,
    },
    {
      id: 'conferences',
      label: 'Доклады на конференциях',
      icon: <Presentation className="w-full h-full" />,
      content: <ConferenceContent />,
    },
    {
      id: 'philosophy',
      label: 'Философия\nметодики',
      icon: <Lightbulb className="w-full h-full" />,
      content: <PhilosophyContent />,
    },
  ]

  return (
    <section className="flex w-svw flex-col items-center section-odd">
      <div className="w-screen h-fit flex flex-col items-center">
        <TabContainer tabs={tabs} defaultActiveTab="introduction" />
      </div>
    </section>
  )
}

export default AboutSection

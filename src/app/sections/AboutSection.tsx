import React from 'react'
import {
  TabContainer,
  TabConfig,
} from '@/app/components/TabSystem/TabContainer'
import {
  IntroductionContent,
  PublicationContent,
  ConferenceContent,
} from '@/app/components/TabSystem/TabContent'
import { PhilosophyContent } from '@/app/components/TabSystem/PhilosophyContent'
import {
  UserCircle,
  BookOpen,
  Presentation,
  Lightbulb,
  Shapes,
} from 'lucide-react'

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
      icon: <Shapes className="w-full h-full" />,
      content: <PhilosophyContent />,
    },
  ]

  return (
    <section id="about" className="section-odd">
      <TabContainer tabs={tabs} defaultActiveTab="introduction" />
    </section>
  )
}

export default AboutSection

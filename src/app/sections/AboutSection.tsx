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
  Shapes,
} from 'lucide-react'

const AboutSection = () => {
  const tabs: TabConfig[] = [
    {
      id: 'introduction',
      label: 'Будем знакомы!',
      icon: <UserCircle className="w-full h-full" />,
      content: <IntroductionContent />,
    },
    {
      id: 'publications',
      label: 'Научные публикации',
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
      label: 'Философия методики',
      icon: <Shapes className="w-full h-full" />,
      content: <PhilosophyContent />,
    },
  ]

  return (
    <section
      id="about"
      className="section-odd"
      style={{ scrollMarginTop: 'var(--scroll-margin-top)' }}
    >

      <TabContainer tabs={tabs} defaultActiveTab="introduction" />
    </section>
  )
}

export default AboutSection

import dynamic from 'next/dynamic'
import Navigation from './sections/Navigation'
import MainPage from './sections/MainSection'
import { DynamicIsland } from './components/DynamicIsland'

// Lazy load sections below the fold for better initial load performance
const AboutPage = dynamic(() => import('./sections/AboutSection'), {
  loading: () => <div className="min-h-screen" />,
})
const PrivateSession = dynamic(() => import('./sections/PrivateSection'), {
  loading: () => <div className="min-h-screen" />,
})
const TeachingSection = dynamic(() => import('./sections/TeachingSection'), {
  loading: () => <div className="min-h-screen" />,
})
const FamilySection = dynamic(() => import('./sections/FamilySection'), {
  loading: () => <div className="min-h-screen" />,
})
const SchoolSection = dynamic(() => import('./sections/SchoolSection'), {
  loading: () => <div className="min-h-screen" />,
})
const Footer = dynamic(() => import('./sections/Footer'), {
  loading: () => <div className="min-h-screen" />,
})

export default function Home() {
  return (
    <div className="scroll-container">
      <Navigation />
      <DynamicIsland />
      <MainPage />
      <AboutPage />
      <PrivateSession />
      <TeachingSection />
      <FamilySection />
      <SchoolSection />
      <Footer />
    </div>
  )
}

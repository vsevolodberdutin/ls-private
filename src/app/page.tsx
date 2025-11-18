import Navigation from './sections/Navigation'
import AboutPage from './sections/AboutSection'
import MainPage from './sections/MainSection'
import FamilySection from './sections/FamilySection'
import SchoolSection from './sections/SchoolSection'
import TeachingSection from './sections/TeachingSection'
import PrivateSession from './sections/PrivateSession'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <div className="scroll-container">
      <Navigation />
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

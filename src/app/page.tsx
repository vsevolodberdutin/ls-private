import Navigation from './sections/Navigation'
import AboutPage from './sections/about/AboutSection'
import MainPage from './sections/main/MainSection'

export default function Home() {
  return (
    <div className="scroll-container">
      <Navigation />
      <MainPage />
      <AboutPage />
    </div>
  )
}

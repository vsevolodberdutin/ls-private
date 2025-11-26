import React from 'react'
import { Separator } from '../uiElements/Separator'
import { ContactInfoCard } from '../components/footer/ContactInfoCard'
import { SocialChannelsCard } from '../components/footer/SocialChannelsCard'
import { CorporateClients } from '../components/footer/CorporateClients'
import { FooterCopyright } from '../components/footer/FooterCopyright'

const Footer: React.FC = () => {
  return (
    <footer className="relative text-amber-50 pt-16 pb-8">
      {/* Gradient transition from main content to footer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, var(--footer-start-rgb) 0%, var(--footer-mid-rgb) 25%, var(--footer-end-rgb) 100%)',
        }}
      />
      <div className="relative w-full px-5 lg:px-10 py-4 pb-10">
        <Separator />

        {/* Main Footer Content Grid */}
        <div className="h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-stretch gap-8 pt-10 mb-12 max-w-[1300px] mx-auto">
          <ContactInfoCard />
          <SocialChannelsCard />
        </div>

        <CorporateClients />

        <FooterCopyright />
      </div>
    </footer>
  )
}

export default Footer

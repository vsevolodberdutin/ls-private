import React from 'react'
import { SectionWrapper } from '../uiElements/wrappers/SectionWrapper'
import { Heart, Users, Home, Lightbulb } from 'lucide-react'
import { FAMILY_SERVICES } from '@/constants/services'
import { CONTACTS } from '@/constants/contacts'

const FamilySection: React.FC = () => {
  return (
    <section id="family" className="section-even py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Семейная консультация</h2>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto px-4">
          Улучшение отношений в семье, с партнером, детско — родительские отношения, примирение при конфликтах
        </p>
      </div>
      <SectionWrapper>
        {/* Session Types Card */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-6 mx-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              {FAMILY_SERVICES.personalSession.title}
            </h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            <strong>Продолжительность: {FAMILY_SERVICES.personalSession.duration}</strong>
          </p>

          <h3 className="text-md font-semibold text-gray-800 mb-3">
            Типы консультаций:
          </h3>
          <ul className="space-y-3 text-sm text-gray-800 leading-relaxed mb-4">
            {FAMILY_SERVICES.personalSession.types.map((type, index) => (
              <li key={index}>
                <strong>{type.name}</strong>
                {'description' in type && ` (${type.description})`} — <strong>{type.priceFormatted}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas Card */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              Области консультирования
            </h2>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex gap-2">
              <Home className="w-4 h-4 text-orange-500" />
              {FAMILY_SERVICES.personalSession.areas[0]}
            </li>
            <li className="flex gap-2">
              <Heart className="w-4 h-4 text-orange-500" />
              {FAMILY_SERVICES.personalSession.areas[1]}
            </li>
            <li className="flex gap-2">
              <Users className="w-4 h-4 text-orange-500" />
              {FAMILY_SERVICES.personalSession.areas[2]}
            </li>
            <li className="flex gap-2">
              <Lightbulb className="w-4 h-4 text-orange-500" />
              {FAMILY_SERVICES.personalSession.areas[3]}
            </li>
          </ul>
        </div>
      </SectionWrapper>

      {/* Contact Buttons */}
      <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
        <a
          href={CONTACTS.viber.url}
          className="px-5 py-3 rounded-xl border border-orange-300 text-orange-700 hover:bg-orange-50 transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          aria-label={`Связаться через ${CONTACTS.viber.label}`}
          rel="noopener noreferrer"
        >
          {CONTACTS.viber.label}
        </a>
        <a
          href={CONTACTS.whatsapp.url}
          className="px-5 py-3 rounded-xl border border-orange-300 text-orange-700 hover:bg-orange-50 transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          aria-label={`Связаться через ${CONTACTS.whatsapp.label}`}
          rel="noopener noreferrer"
        >
          {CONTACTS.whatsapp.label}
        </a>
        <a
          href={CONTACTS.telegram.url}
          className="px-5 py-3 rounded-xl border border-orange-300 text-orange-700 hover:bg-orange-50 transition text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          aria-label={`Связаться через ${CONTACTS.telegram.label}`}
          rel="noopener noreferrer"
        >
          {CONTACTS.telegram.label}
        </a>
      </div>
    </section>
  )
}

export default FamilySection
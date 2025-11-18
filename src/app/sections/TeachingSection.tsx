import React from 'react'
import { SectionWrapper } from '../uiElements/wrappers/SectionWrapper'
import { GraduationCap, Users, TrendingUp, Award } from 'lucide-react'
import { TEACHING_SERVICES } from '@/constants/services'
import { CONTACTS } from '@/constants/contacts'

const TeachingSection: React.FC = () => {
  return (
    <section id="learn" className="section-odd py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Обучение соционике</h2>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto px-4">
          Изучение основ соционики, с акцентом на практики определения психотипов
        </p>
      </div>
      <SectionWrapper>
        {/* Group Training Card */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-6 mx-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              {TEACHING_SERVICES.groupTraining.title}
            </h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>{TEACHING_SERVICES.groupTraining.format}</strong>
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            {TEACHING_SERVICES.groupTraining.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {TEACHING_SERVICES.groupTraining.levels.map((level) => (
              <span
                key={level}
                className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
              >
                {level}
              </span>
            ))}
          </div>
          <p className="text-lg font-semibold text-gray-800">
            {TEACHING_SERVICES.groupTraining.priceFormatted}
          </p>
        </div>

        {/* Strategic Coaching Card */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              {TEACHING_SERVICES.strategicCoaching.title}
            </h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            <strong>{TEACHING_SERVICES.strategicCoaching.duration}</strong>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed mb-4">
            <li className="flex gap-2">
              <GraduationCap className="w-4 h-4 text-orange-500" />
              {TEACHING_SERVICES.strategicCoaching.description}
            </li>
            <li className="flex gap-2">
              <Award className="w-4 h-4 text-orange-500" />
              {TEACHING_SERVICES.strategicCoaching.target}
            </li>
          </ul>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            {TEACHING_SERVICES.strategicCoaching.priceFormatted}
          </p>
          <p className="text-xs text-gray-500">
            * {TEACHING_SERVICES.strategicCoaching.bonus}
          </p>
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

export default TeachingSection
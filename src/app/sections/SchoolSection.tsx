import React from 'react'
import { SectionWrapper } from '../uiElements/wrappers/SectionWrapper'
import { BookOpen, Video, FileText, Award } from 'lucide-react'
import { SCHOOL_SERVICES } from '@/constants/services'
import { CONTACTS } from '@/constants/contacts'

const SchoolSection: React.FC = () => {
  return (
    <section id="school" className="section-odd py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Школа осознанных родителей</h2>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto px-4">
          Изучение методик направленных на лучшее понимание своего ребенка и раскрытие его талантов
        </p>
      </div>
      <SectionWrapper>
        {/* Online Course Card */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-6 mx-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              {SCHOOL_SERVICES.onlineCourse.title}
            </h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            <strong>{SCHOOL_SERVICES.onlineCourse.format}</strong>
          </p>

          <h3 className="text-md font-semibold text-gray-800 mb-3">Модули:</h3>
          <ul className="space-y-3 text-sm text-gray-800 leading-relaxed mb-4">
            {SCHOOL_SERVICES.onlineCourse.modules.map((module, index) => (
              <li key={index} className="flex gap-2 items-start">
                <Video className="w-4 h-4 text-orange-500 mt-0.5" />
                <div>
                  <strong>{module.name}</strong> ({module.lessons} уроков) — <strong>{module.priceFormatted}</strong>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
            <p className="text-sm text-gray-800">
              <strong>Полный пакет:</strong> {SCHOOL_SERVICES.onlineCourse.fullPackage.totalLessons} уроков — {' '}
              <strong className="text-orange-700">{SCHOOL_SERVICES.onlineCourse.fullPackage.priceFormatted}</strong>
            </p>
          </div>
        </div>

        {/* Psychotype Assessment Card */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              {SCHOOL_SERVICES.psychotypeAssessment.title}
            </h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            <strong>{SCHOOL_SERVICES.psychotypeAssessment.format}</strong>
          </p>

          <h3 className="text-md font-semibold text-gray-800 mb-3">
            Вы получите:
          </h3>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed mb-4">
            {SCHOOL_SERVICES.psychotypeAssessment.deliverables.map((item, index) => (
              <li key={index} className="flex gap-2">
                <Award className="w-4 h-4 text-orange-500" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-lg font-semibold text-gray-800 mt-4">
            {SCHOOL_SERVICES.psychotypeAssessment.priceFormatted}
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

export default SchoolSection
import React from 'react'
import { SectionWrapper } from '../uiElements/wrappers/SectionWrapper'
import { Sparkles, Heart, Waves, Briefcase } from 'lucide-react'
import { CONTACTS, PRICING } from '@/constants/contacts'

const PrivateSession: React.FC = () => {
  return (
    <section id="private" className="section-even py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Личная сессия</h2>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto px-4">
          Разберем сильные и слабые стороны вашего психотипа, профориентирование, понимание мотивации и развитие потенциала личности
        </p>
      </div>
      <SectionWrapper>
        {/* Pricing Card */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-6 mx-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Варианты сессий
          </h3>
          <ul className="space-y-3 text-sm text-gray-800 leading-relaxed">
            <li>
              <strong>{PRICING.online.label}</strong> — <strong>{PRICING.online.formatted}</strong>
            </li>
            <li>
              <strong>{PRICING.inPerson.label}</strong> ({PRICING.inPerson.locations}) —{' '}
              <strong>{PRICING.inPerson.formatted}</strong>
            </li>
            <li>
              <strong>{PRICING.otherCities.label}</strong> ({PRICING.otherCities.locations}) —{' '}
              <strong>{PRICING.otherCities.formatted}</strong>
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            * Для зарубежных клиентов — повышающий коэффициент. Оплата: PayPal /
            WU
          </p>
        </div>

        {/* Info Card */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md ">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              Личная консультация
            </h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Продолжительность 2 часа</strong> <br />
            После консультации вы получаете отчет и лист профориентации (по
            запросу).
          </p>

          <ul className="mt-4 space-y-2 text-sm text-gray-700 leading-relaxed">
            <li className="flex gap-2">
              <Briefcase className="w-4 h-4 text-orange-500" /> Как развить
              потенциал и построить карьеру
            </li>
            <li className="flex gap-2">
              <Heart className="w-4 h-4 text-orange-500" /> Какие отношения
              подходят для гармоничной жизни
            </li>
            <li className="flex gap-2">
              <Waves className="w-4 h-4 text-orange-500" /> Как восстанавливать
              энергию и ресурс
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

export default PrivateSession

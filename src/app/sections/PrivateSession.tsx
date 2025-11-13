import React from 'react'
import { SectionWrapper } from '../uiElements/wrappers/SectionWrapper'
import { Sparkles, Heart, Users, Waves, Briefcase } from 'lucide-react'

const PrivateSession = () => {
  return (
    <section className="section-even py-12">
      <SectionWrapper>
        {/* Pricing Card */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-6 mx-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Варианты сессий
          </h3>
          <ul className="space-y-3 text-sm text-gray-800 leading-relaxed">
            <li>
              <strong>Online</strong>  —{' '}
              <strong>10 000 ₽</strong>
            </li>
            <li>
              <strong>Личная встреча</strong> (Москва/Нижний Новгород) —{' '}
              <strong>15 000 ₽</strong>
            </li>
            <li>
             <strong>Личная встреча</strong> (другие города) —{' '}
              <strong>от 50 000 ₽</strong>
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
      <div className="mt-8 flex flex-wrap gap-4 items-center">
        <a
          href="viber://chat?number=%2B79103811250"
          className="px-5 py-3 rounded-xl border border-orange-300 text-orange-700 hover:bg-orange-50 transition text-sm"
        >
          Viber
        </a>
        <a
          href="whatsapp://send?phone=79103811250&text="
          className="px-5 py-3 rounded-xl border border-orange-300 text-orange-700 hover:bg-orange-50 transition text-sm"
        >
          WhatsApp
        </a>
        <a
          href="tg://resolve?domain=eleanor_live"
          className="px-5 py-3 rounded-xl border border-orange-300 text-orange-700 hover:bg-orange-50 transition text-sm"
        >
          Telegram
        </a>
      </div>
    </section>
  )
}

export default PrivateSession

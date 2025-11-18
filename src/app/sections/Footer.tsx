import React from 'react'
import Image from 'next/image'
import { CONTACTS } from '@/constants/contacts'
import { ABOUT } from '@/constants/about'

const Footer: React.FC = () => {
  return (
    <footer className="relative text-amber-50 pt-16 pb-8">
      {/* Gradient transition from main content to footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ffd9aa] via-[#f78e74] to-[#D77D72]" />

      <div className="relative w-svw px-10 py-4 pb-10">
        {/* Main Footer Content Grid */}
        <div className="h-fit grid grid-cols-1 lg:grid-cols-[450px_850px] justify-center items-start gap-12 mb-12">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold text-amber-100 mb-6 border-b border-amber-700/50 pb-3">
              Связаться со мной
            </h3>

            {/* Phone */}
            <div className="mb-6">
              <p className="text-sm text-amber-200/70 mb-2">Телефон:</p>
              <a
                href={`tel:${CONTACTS.phone}`}
                className="text-lg font-semibold text-amber-100 hover:text-amber-50 transition-colors"
              >
                {CONTACTS.phoneFormatted}
              </a>
            </div>

            {/* Email */}
            <div className="mb-6">
              <p className="text-sm text-amber-200/70 mb-2">Email:</p>
              <a
                href="mailto:livesocionics@gmail.com"
                className="text-lg font-semibold text-amber-100 hover:text-amber-50 transition-colors break-all"
              >
                livesocionics@gmail.com
              </a>
            </div>

            {/* YouTube */}
            <div className="mb-6">
              <p className="text-sm text-amber-200/70 mb-2">YouTube:</p>
              <a
                href="https://www.youtube.com/user/LiveSocionicsStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-amber-100 hover:text-amber-50 transition-colors inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                LiveSocionicsStudio
              </a>
            </div>

            {/* VK */}
            <div className="mb-6">
              <p className="text-sm text-amber-200/70 mb-2">VK:</p>
              <a
                href="http://vk.com/club43658401"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-amber-100 hover:text-amber-50 transition-colors inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.406.44-.406h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                </svg>
                Живая соционика
              </a>
            </div>

            {/* Messengers */}
            <div>
              <p className="text-sm text-amber-200/70 mb-3">Мессенджеры:</p>
              <div className="flex flex-col gap-3">
                <a
                  href={CONTACTS.whatsapp.url}
                  className="flex items-center gap-3 px-4 py-3 bg-amber-900/30 hover:bg-amber-900/50 rounded-lg border border-amber-700/30 hover:border-amber-600/50 transition-all duration-200 hover:scale-[102%] group"
                  aria-label={`Связаться через ${CONTACTS.whatsapp.label}`}
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-medium text-amber-100 group-hover:text-amber-50">
                    {CONTACTS.whatsapp.label}
                  </span>
                </a>

                <a
                  href={CONTACTS.viber.url}
                  className="flex items-center gap-3 px-4 py-3 bg-amber-900/30 hover:bg-amber-900/50 rounded-lg border border-amber-700/30 hover:border-amber-600/50 transition-all duration-200 hover:scale-[102%] group"
                  aria-label={`Связаться через ${CONTACTS.viber.label}`}
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/viber.svg"
                    alt="Viber"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-medium text-amber-100 group-hover:text-amber-50">
                    {CONTACTS.viber.label}
                  </span>
                </a>

                <a
                  href={CONTACTS.telegram.url}
                  className="flex items-center gap-3 px-4 py-3 bg-amber-900/30 hover:bg-amber-900/50 rounded-lg border border-amber-700/30 hover:border-amber-600/50 transition-all duration-200 hover:scale-[102%] group"
                  aria-label={`Связаться через ${CONTACTS.telegram.label}`}
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/telegram.svg"
                    alt="Telegram"
                    width={24}
                    height={24}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-medium text-amber-100 group-hover:text-amber-50">
                    {CONTACTS.telegram.label}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Scientific Publications Section */}
          <div>
            <h3 className="text-xl font-bold text-amber-100 mb-6 border-b border-amber-700/50 pb-3">
              Научные публикации
            </h3>
            <div className="space-y-4">
              {ABOUT.articles.map((article, index) => (
                <div
                  key={index}
                  className="group hover:bg-amber-900/20 p-3 rounded-lg transition-all duration-200"
                >
                  <h4 className="text-sm font-semibold text-amber-100 mb-1 group-hover:text-amber-50 transition-colors">
                    {article.name}
                  </h4>
                  <p className="text-xs text-amber-200/70 italic">
                    {article.data}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Clients Section */}
        <div className="border-t border-amber-700/50 pt-12 mb-12 w-full">
          <div className="h-fit grid grid-cols-1 justify-center items-start max-w-[1300px] mx-auto">
            <div className="flex items-center gap-11 mb-6">
              <h3 className="text-xl font-bold text-amber-100 whitespace-nowrap">
                Мои клиенты
              </h3>
              <div className="w-2 h-2 rounded-full bg-amber-100 opacity-50 flex-shrink-0 hidden lg:block"></div>
              <p className="text-xl font-light text-amber-100 opacity-50 hidden lg:block">
                компании, прошедшие соционическую диагностику и формирование
                эффективных команд
              </p>
            </div>
            <div className="flex flex-wrap gap-4 items-center justify-start">
              {ABOUT.companies.map((company, index) => (
                <div key={index} className="group relative">
                  <div className="w-[60px] h-[60px] rounded-full bg-white/100 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-200 p-1 border border-amber-700/30 hover:border-amber-600/50 flex items-center justify-center overflow-hidden">
                    <Image
                      src={`/companies/${company.data}_logo.png`}
                      alt={company.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-amber-900/95 backdrop-blur-sm text-amber-50 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                    {company.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-900/95"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-amber-700/50 pt-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1300px] mx-auto">
            <p className="text-sm text-amber-200/60">
              © {new Date().getFullYear()} Элеонора Бердутина. Школа «Живая
              соционика». Все права защищены.
            </p>
            <p className="text-xs text-amber-200/50">
              Designed with ❤️ for understanding human nature
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

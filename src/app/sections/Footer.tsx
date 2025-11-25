import React from 'react'
import Image from 'next/image'
import { Book, FileText, BookOpen } from 'lucide-react'
import { CONTACTS } from '@/constants/contacts'
import { ARTICLES } from '@/constants/articles'
import { COMPANIES } from '@/constants/companies'
import { FooterSeparator, Separator } from '../uiElements/Separator'

/**
 * Type definition for publication types
 */
type PublicationType = 'монография' | 'статья' | 'учебное пособие' | null

/**
 * Extract publication type from the name field
 * @param name - Publication name with type in parentheses
 * @returns Publication type or null if not found
 */
const extractPublicationType = (name: string): PublicationType => {
  const match = name.match(/\((монография|статья|учебное пособие)\)/)
  return match ? (match[1] as PublicationType) : null
}

const Footer: React.FC = () => {
  const iconSize = 'w-5 h-5'
  const iconColor = 'text-amber-100'

  const iconMap = {
    монография: <Book className={`${iconSize} ${iconColor}`} />,
    статья: <FileText className={`${iconSize} ${iconColor}`} />,
    'учебное пособие': <BookOpen className={`${iconSize} ${iconColor}`} />,
  }
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
      <div className="relative w-svw px-10 py-4 pb-10">
        <Separator />
        {/* Main Footer Content Grid */}
        <div className="h-fit grid grid-cols-1 lg:grid-cols-2 justify-center items-stretch gap-8 pt-10 mb-12 max-w-[1300px] mx-auto">
          {/* LEFT COLUMN - Contact Information */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
            <h3
              className="text-2xl font-bold mb-6
                bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent"
            >
              Связаться со мной
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="group">
                <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-2">
                  Телефон:
                </p>
                <a
                  href={`tel:${CONTACTS.phone}`}
                  className="text-lg font-semibold text-amber-100 block
                    transition-all duration-200
                    hover:text-amber-300 hover:translate-x-1"
                >
                  {CONTACTS.phoneFormatted}
                </a>
              </div>

              {/* Email */}
              <div className="group">
                <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-2">
                  Email:
                </p>
                <a
                  href="mailto:livesocionics@gmail.com"
                  className="text-lg font-semibold text-amber-100 break-all block
                    transition-all duration-200
                    hover:text-amber-300 hover:translate-x-1"
                >
                  livesocionics@gmail.com
                </a>
              </div>

              {/* Messengers */}
              <div>
                <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-3">
                  Мессенджеры:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={CONTACTS.whatsapp.url}
                    className="flex items-center gap-2 px-4 py-2.5
                      rounded-full border border-emerald-400/30 bg-emerald-500/10
                      shadow-xl shadow-white/10
                      transition-all duration-200
                      hover:border-emerald-400/60 hover:bg-emerald-500/20 hover:scale-105"
                    aria-label={`Связаться через ${CONTACTS.whatsapp.label}`}
                  >
                    <Image
                      src="/whatsapp.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-medium text-amber-100">
                      WhatsApp
                    </span>
                  </a>

                  <a
                    href={CONTACTS.viber.url}
                    className="flex items-center gap-2 px-4 py-2.5
                      rounded-full border border-violet-400/30 bg-violet-500/10
                                          shadow-xl shadow-white/10
                      transition-all duration-200
                      hover:border-violet-300/60 hover:bg-violet-400/30 hover:scale-105"
                    aria-label={`Связаться через ${CONTACTS.viber.label}`}
                  >
                    <Image
                      src="/viber.svg"
                      alt="Viber"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-medium text-amber-100">
                      Viber
                    </span>
                  </a>

                  <a
                    href={CONTACTS.telegram.url}
                    className="flex items-center gap-2 px-4 py-2.5
                      rounded-full border border-sky-400/30 bg-sky-500/10
                                          shadow-xl shadow-white/10
                      transition-all duration-200
                      hover:border-sky-400/60 hover:bg-sky-500/20 hover:scale-105"
                    aria-label={`Связаться через ${CONTACTS.telegram.label}`}
                  >
                    <Image
                      src="/telegram.svg"
                      alt="Telegram"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-medium text-amber-100">
                      Telegram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Social Channels */}
          <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
            <h3
              className="text-2xl font-bold mb-6
                bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent"
            >
              Подписаться на мои обучающие каналы
            </h3>

            <div className="space-y-4">
              {/* Telegram Channel */}
              <a
                href="https://t.me/livesocionics"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4
                  rounded-xl border border-white/20 bg-white/5
                  transition-all duration-200
                  hover:border-sky-400/50 hover:bg-sky-500/10 hover:scale-[102%]"
              >
                <div className="flex-shrink-0">
                  <Image
                    src="/telegram.svg"
                    alt="Telegram"
                    width={32}
                    height={32}
                    className="group-hover:scale-110 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-1">
                    Телеграм
                  </p>
                  <p className="text-base font-semibold text-amber-100 group-hover:text-amber-300">
                    @livesocionics
                  </p>
                </div>
              </a>

              {/* VK */}
              <a
                href="http://vk.com/club43658401"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4
                  rounded-xl border border-white/20 bg-white/5
                  transition-all duration-200
                  hover:border-blue-400/50 hover:bg-blue-500/10 hover:scale-[102%]"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-amber-100 group-hover:text-amber-300 group-hover:scale-110 transition-all"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.406.44-.406h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-1">
                    ВКонтакте
                  </p>
                  <p className="text-base font-semibold text-amber-100 group-hover:text-amber-300">
                    Живая соционика
                  </p>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/user/LiveSocionicsStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4
                  rounded-xl border border-white/20 bg-white/5
                  transition-all duration-200
                  hover:border-red-400/50 hover:bg-red-500/10 hover:scale-[102%]"
              >
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-amber-100 group-hover:text-amber-300 group-hover:scale-110 transition-all"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-1">
                    YouTube
                  </p>
                  <p className="text-base font-semibold text-amber-100 group-hover:text-amber-300">
                    LiveSocionicsStudio
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Corporate Clients Section */}
        <div className="border-t border-white/50 pt-12 mb-12 w-full">
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
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {COMPANIES.map((company, index) => (
                <div key={index} className="group relative">
                  <div
                    className="flex items-center justify-center w-[60px] h-[60px] overflow-hidden
                    rounded-full border-4 border-white bg-white/100 backdrop-blur-sm
                    transition-all duration-200
                    hover:border-amber-600/50 hover:bg-white hover:scale-110"
                  >
                    <Image
                      src={`/companies/${company.data}_logo.png`}
                      alt={company.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  {/* Tooltip */}
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 pointer-events-none whitespace-nowrap z-10 text-xs text-amber-50
                    rounded-lg bg-amber-900/95 backdrop-blur-sm
                    opacity-0
                    transition-opacity duration-200
                    group-hover:opacity-100"
                  >
                    {company.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-900/95"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        {/* <div className="border-t border-amber-700/50 pt-8 w-full"> */}
        <FooterSeparator/>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1300px] mx-auto">
            <p className="text-sm text-amber-100/60">
              © {new Date().getFullYear()} Элеонора Бердутина. Школа «Живая
              соционика». Все права защищены.
            </p>
            <p className="text-xs text-amber-100/50">
              Designed with ❤️ for understanding human nature
            </p>
          </div>
        </div>
        {/* </div> */}
    </footer>
  )
}

export default Footer

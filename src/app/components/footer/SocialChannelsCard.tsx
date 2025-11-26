import React from 'react'
import { SocialChannelLink } from './SocialChannelLink'

export const SocialChannelsCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
        Подписаться на мои обучающие каналы
      </h3>

      <div className="space-y-4">
        {/* Telegram Channel */}
        <SocialChannelLink
          href="https://t.me/livesocionics"
          label="Телеграм"
          username="@livesocionics"
          hoverColorClasses="hover:border-sky-400/50 hover:bg-sky-500/10"
          icon={
            <svg
              className="w-8 h-8 text-amber-100 group-hover:text-amber-300 group-hover:scale-110 transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.563 7.353c-.117.535-.424.663-.857.413l-2.372-1.748-1.144 1.102c-.126.126-.233.233-.479.233l.171-2.421 4.408-3.982c.192-.171-.042-.266-.297-.095l-5.447 3.429-2.348-.735c-.511-.161-.521-.511.106-.756l9.188-3.54c.425-.161.798.1.659.756z" />
            </svg>
          }
        />

        {/* VK */}
        <SocialChannelLink
          href="http://vk.com/club43658401"
          label="ВКонтакте"
          username="Живая соционика"
          hoverColorClasses="hover:border-blue-400/50 hover:bg-blue-500/10"
          icon={
            <svg
              className="w-8 h-8 text-amber-100 group-hover:text-amber-300 group-hover:scale-110 transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.406.44-.406h2.744c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.78 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
            </svg>
          }
        />

        {/* YouTube */}
        <SocialChannelLink
          href="https://www.youtube.com/user/LiveSocionicsStudio"
          label="YouTube"
          username="LiveSocionicsStudio"
          hoverColorClasses="hover:border-red-400/50 hover:bg-red-500/10"
          icon={
            <svg
              className="w-8 h-8 text-amber-100 group-hover:text-amber-300 group-hover:scale-110 transition-all"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          }
        />
      </div>
    </div>
  )
}

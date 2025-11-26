import React from 'react'
import { CONTACTS } from '@/constants/contacts'
import { MessengerButton } from './MessengerButton'

export const ContactInfoCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
        Связаться со мной
      </h3>

      <div className="space-y-6">
        {/* Phone */}
        <div className="group">
          <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-2">
            Телефон:
          </p>
          <p className="text-lg font-semibold text-amber-100 block">
            {CONTACTS.phoneFormatted}
          </p>
        </div>

        {/* Email */}
        <div className="group">
          <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-2">
            Email:
          </p>
          <p className="text-lg font-semibold text-amber-100 break-all block">
            livesocionics@gmail.com
          </p>
        </div>

        {/* Messengers */}
        <div>
          <p className="text-xs font-medium text-amber-200/50 uppercase tracking-wider mb-3">
            Мессенджеры:
          </p>
          <div className="flex flex-wrap gap-3">
            <MessengerButton
              href={CONTACTS.whatsapp.url}
              icon="/whatsapp.svg"
              label="WhatsApp"
              colorClasses="border-emerald-400/30 bg-emerald-500/10
                hover:border-emerald-400/60 hover:bg-emerald-500/20"
            />
            <MessengerButton
              href={CONTACTS.viber.url}
              icon="/viber.svg"
              label="Viber"
              colorClasses="border-violet-400/30 bg-violet-500/10
                hover:border-violet-300/60 hover:bg-violet-400/30"
            />
            <MessengerButton
              href={CONTACTS.telegram.url}
              icon="/telegram.svg"
              label="Telegram"
              colorClasses="border-sky-400/30 bg-sky-500/10
                hover:border-sky-400/60 hover:bg-sky-500/20"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | Live Socionics',
  description:
    'Политика обработки персональных данных в соответствии с Федеральным законом № 152-ФЗ',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fff0dc] to-[#b9b9b9] py-24 px-6">
      <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4c0519] mb-2">
          Как мы обрабатываем данные
        </h1>
        <p className="text-sm text-black/50 mb-8">
          Действует с {new Date().toLocaleDateString('ru-RU')} года
        </p>

        <section className="space-y-6 text-black/80 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-[#4c0519] mb-2">
              1. Общие положения
            </h2>
            <p>
              Настоящий документ определяет порядок обработки персональных
              данных на сайте <strong>berdutina.online</strong> (зеркало{' '}
              <strong>berdutina.vercel.app</strong>) (далее — Сайт). Оператор
              персональных данных — <strong>Бердутина Элеонора</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#4c0519] mb-2">
              2. Какие данные мы обрабатываем
            </h2>
            <p>
              На Сайте нет форм сбора данных. Мы получаем персональные данные
              только когда вы сами обращаетесь к нам через мессенджер:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>текст сообщения.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#4c0519] mb-2">
              3. Цели обработки
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>связь с клиентом по вопросам консультаций и обучения;</li>
              <li>
                предоставление информации об услугах Школы «Живая соционика»;
              </li>
              <li>заключение и исполнение договора об оказании услуг.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#4c0519] mb-2">
              4. Передача данных третьим лицам
            </h2>
            <p>
              Мы не передаём ваши данные третьим лицам. При переходе в
              мессенджер (WhatsApp, Telegram, Max) ваши данные обрабатываются
              оператором соответствующего сервиса.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#4c0519] mb-2">
              5. Сроки хранения
            </h2>
            <p>
              Данные хранятся до достижения цели обработки либо до вашего отзыва
              согласия. По истечении срока они уничтожаются или обезличиваются.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#4c0519] mb-2">
              6. Ваши права
            </h2>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                получать информацию о том, какие ваши данные обрабатываются;
              </li>
              <li>требовать уточнения, блокирования или уничтожения данных;</li>
              <li>отозвать согласие на обработку.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#4c0519] mb-2">
              7. Контакты оператора
            </h2>
            <p className="mt-1">
              <strong>Бердутина Элеонора</strong>
            </p>
            <p className="mt-1">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:livesocionics@gmail.com"
                className="underline hover:text-[#4c0519]"
              >
                livesocionics@gmail.com
              </a>
            </p>
            <p className="mt-1">
              <strong>Телефон:</strong>{' '}
              <a
                href="tel:+79103811250"
                className="underline hover:text-[#4c0519]"
              >
                +7 910 381-12-50
              </a>
            </p>
          </div>
        </section>

        <div className="mt-10 pt-6 border-t border-black/10 text-center">
          <a
            href="/"
            className="inline-block text-sm font-medium text-[#4c0519] underline hover:text-black/70 transition-colors"
          >
            ← Вернуться на главную
          </a>
        </div>
      </div>
    </main>
  )
}

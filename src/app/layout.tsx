import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Live Socionics Ltd | private ',
  description: 'Private & Family socionic consulting by Eleanor Berdutina',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#fff0dc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <head>
        {/* DNS prefetch and preconnect for faster resource loading */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* Inline critical CSS for faster rendering */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --foreground-rgb: 0, 0, 0;
                --background-start-rgb: #fff0dc;
                --background-end-rgb: #b9b9b9;
                --navigation-rgb: #282934;
                --header-text-rgb: #4c0519;
                --subheader-text-rgb: #000000;
              }
              body { margin: 0; }
              .scroll-container {
                height: 100vh;
                overflow-y: scroll;
                scrollbar-width: none;
              }
              .scroll-container::-webkit-scrollbar { display: none; }
            `,
          }}
        />
        <link
          rel="preload"
          as="image"
          href="/main.svg"
          fetchPriority="high"
        />
      </head>
      {/* <!-- Dark mode enabled -->
          <html class="dark"></html> */}
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

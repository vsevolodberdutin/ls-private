import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: 'Live Socionics Ltd | private ',
  description: 'Private & Family socionic consulting by Eleonor Berdutina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <head>
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

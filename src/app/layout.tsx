import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LSD Lottery',
  description: 'lsd lottery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full min-h-screen bg-[#EEFDFF]">
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Header } from './components/Header'

const sansilk = localFont({
  src: '../font/Sansilk.otf',
  display: 'fallback',
  variable: '--font-sansilk'
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'fallback'
})

export const metadata: Metadata = {
  title: 'Isaac S.Silva',
  description: 'Portfolio do Isaac S Silva, desenvolvedor Front-end'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${sansilk.variable} ${lato.className} bg-neutral-950`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

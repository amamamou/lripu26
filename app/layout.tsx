import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: 'RIPU26 | Rencontre Internationale de la Pédagogie Universitaire',
  description: 'Rejoignez RIPU26 à Sousse, Tunisie - 30-31 Octobre 2026. Enseigner et évaluer à l\'ère de l\'IA et de l\'APC. Colloque international sur la recherche et l\'innovation en pédagogie universitaire.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-[#F8F6F3]">
      <body className={`${montserrat.className} antialiased bg-[#F8F6F3]`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

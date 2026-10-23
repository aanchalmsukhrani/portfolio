import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aanchal Sukhrani | Software Engineer',
  description: 'Aanchal Sukhrani is a software engineer building reliable backend systems, distributed services, and cloud infrastructure.',
  openGraph: {
    title: 'Aanchal Sukhrani | Software Engineer',
    description: 'Backend systems, distributed computing, and cloud infrastructure.',
    type: 'website',
  },
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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

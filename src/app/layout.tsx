import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Soham | M.Sc. AI Student & Software Engineer',
  description: 'Personal portfolio of Soham - M.Sc. AI student at OTH Amberg-Weiden and Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}

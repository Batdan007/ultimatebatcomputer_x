import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Batcomputer Entertainment',
  description: 'Your AI-powered entertainment system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}

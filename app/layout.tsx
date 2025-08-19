import './globals.css'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <title>Frontend Mentor | FAQ accordion</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

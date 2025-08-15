import React from 'react'
import './styles.css'
import HeaderServer from '@/blocks/header/Server'
import FooterServer from '@/blocks/footer/Server'
import { Provider } from '@/app/components/ui/provider'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <HeaderServer />
          <main>{children}</main>
          <FooterServer />
        </Provider>
      </body>
    </html>
  )
}

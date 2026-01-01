import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Header from '@/app/components/ui/header'

export default async function HeaderServer() {
  const payload = await getPayload({ config })
  const header = await payload.findGlobal({
    slug: 'header',
  })

  return <Header items={header.items} />
}

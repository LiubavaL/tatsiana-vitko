import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import TestimonialsCarousel from '@/app/components/testimonials/carousel/index'

export default async function TestimonialsServer() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const testimonials = await payload.find({
    collection: 'testimonials',
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
  })

  return <TestimonialsCarousel testimonials={testimonials} />
}

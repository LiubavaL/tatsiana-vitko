import TestimonialsList from '@/app/components/testimonials/testimonials-list'
import config from '@/payload.config'
import { getPayload } from 'payload'

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

  return <TestimonialsList testimonials={testimonials} />
}

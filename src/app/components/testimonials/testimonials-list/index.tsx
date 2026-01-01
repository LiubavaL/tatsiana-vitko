import { Testimonial } from '@/payload-types'
import { Grid } from '@chakra-ui/react'
import { PaginatedDocs } from 'payload'
import TestimonialCard from '../testimonial-card'

export default function TestimonialsList(props: { testimonials: PaginatedDocs<Testimonial> }) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="6" margin={6}>
      {props.testimonials.docs.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </Grid>
  )
}

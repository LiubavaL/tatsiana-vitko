import { Button, Text } from '@chakra-ui/react'
import styles from './TestimonialItem.module.css'
import { Testimonial } from '@/payload-types'
import TestimonialAvatar from '../testimonial-avatar'
import TestimonialVideo from '../testimonial-video'

export default function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div>
      {testimonial.testimony.includes('kinescope.io') ? (
        <div className={styles.authorVideoContainer}>
          <TestimonialVideo testimonial={testimonial} />
        </div>
      ) : (
        <>
          <Text className={styles.authorQuote} fontWeight="light" textStyle="3xl" lineClamp="5">
            {testimonial.testimony}
          </Text>

          <Button variant="subtle" rounded="full">
            Читать полностью
          </Button>
        </>
      )}
      <TestimonialAvatar testimonial={testimonial} />
    </div>
  )
}

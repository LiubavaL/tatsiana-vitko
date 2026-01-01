import { Card, Flex, Text } from '@chakra-ui/react'
import TestimonialAvatar from '../testimonial-avatar'
import { Testimonial } from '@/payload-types'
import TestimonialVideo from '../testimonial-video'
import { useMemo } from 'react'
import TestimonialDetails from './TestimonialDetails'

export default function TestimonialCard(props: { testimonial: Testimonial }) {
  const isVideo = useMemo(
    () => props.testimonial.testimony.includes('kinescope.io'),
    [props.testimonial],
  )
  return (
    <Card.Root>
      <Card.Body gap="2">
        <Card.Description>
          {isVideo ? (
            <TestimonialVideo testimonial={props.testimonial} />
          ) : (
            <>
              <Text fontWeight="light" textStyle="xl" lineClamp="10">
                {props.testimonial.testimony}
              </Text>
              {!isVideo && (
                <Flex marginTop={2}>
                  <TestimonialDetails testimonial={props.testimonial} />
                </Flex>
              )}
              <Flex justifyContent="center" marginTop={6}>
                <TestimonialAvatar testimonial={props.testimonial} />
              </Flex>
            </>
          )}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  )
}

import { Button, CloseButton, Dialog, Flex, Portal, Text } from '@chakra-ui/react'
import TestimonialAvatar from '../testimonial-avatar'
import { Testimonial } from '@/payload-types'

export default function TestimonialDetails(props: { testimonial: Testimonial }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="subtle" rounded="full">
          Читать полностью
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body paddingTop={12}>
              <Text>{props.testimonial.testimony}</Text>
            </Dialog.Body>
            <Dialog.Footer>
              <Flex justifyContent="center">
                <TestimonialAvatar testimonial={props.testimonial} />
              </Flex>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

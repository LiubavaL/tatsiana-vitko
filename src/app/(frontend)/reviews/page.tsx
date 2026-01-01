import HeaderPanel from '@/app/components/ui/header-panel'
import TestimonialsList from '@/blocks/testimonials/Server'
import { Flex } from '@chakra-ui/react'

export default function page() {
  return (
    <Flex direction="column" marginBottom={12}>
      <HeaderPanel
        title="Отзывы клиентов"
        heading="Истории успеха моих клиентов"
        description="Каждый отзыв на этой странице — это личная история перемен. О внимательной работе, бережном сопровождении и внутренней опоре, которая остаётся надолго."
      />
      <TestimonialsList />
    </Flex>
  )
}

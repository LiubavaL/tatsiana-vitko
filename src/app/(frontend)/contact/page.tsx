import ContactForm from '@/app/components/contact/contact-form'
import SectionHeading from '../../components/ui/section-heading'
import { Flex, Box } from '@chakra-ui/react'
import PageHeading from '@/app/components/ui/page-heading'
import PageDescription from '@/app/components/ui/page-description'

export default function page() {
  return (
    <Flex marginTop={24}>
      <Box width={'33%'}>
        <SectionHeading>Записаться на консультацию</SectionHeading>
      </Box>
      <Box>
        <PageHeading title="Давайте обсудим, как я могу вам помочь" />
        <Box marginTop={2}>
          <PageDescription description="Заполните форму ниже и я свяжусь с вами в течение 24 часов" />
        </Box>
        <Box marginTop={6} marginBottom={4} width={'80%'}>
          <ContactForm />
        </Box>
      </Box>
    </Flex>
  )
}

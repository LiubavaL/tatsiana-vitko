import HeaderPanel from '@/app/components/ui/header-panel'
import Certificates from '@/blocks/certificates/Server'
import { Flex } from '@chakra-ui/react'

export default function page() {
  return (
    <Flex direction="column" marginBottom={12}>
      <HeaderPanel
        title="Дипломы и сертификаты"
        heading="Профессиональное образование и квалификация"
        description="Мой профессиональный путь обучения: программы, сертификаты и квалификации, которые я регулярно прохожу, чтобы углублять экспертизу и расширять управленческое мышление."
      />
      <Certificates />
    </Flex>
  )
}

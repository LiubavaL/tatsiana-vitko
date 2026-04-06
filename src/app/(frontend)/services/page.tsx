import Services from '@/app/components/services'
import HeaderPanel from '@/app/components/ui/header-panel'
import { Flex } from '@chakra-ui/react'

export default function page() {
  return (
    <Flex direction="column" marginBottom={12}>
      <HeaderPanel
        title="Услуги"
        heading="Профессиональное образование и квалификация"
        description="Я работаю с предпринимателями, командами и семьями, помогая находить стратегические решения, улучшать коммуникацию и справляться со сложными жизненными и бизнес-ситуациями."
      />

      <Services />
    </Flex>
  )
}

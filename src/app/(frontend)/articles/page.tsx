import ArticlesList from '@/blocks/articles/Server'
import HeaderPanel from '@/app/components/ui/header-panel'
import { Flex } from '@chakra-ui/react'

export default function page() {
  return (
    <Flex direction="column" marginBottom={12}>
      <HeaderPanel
        title="Блог"
        heading="Статьи, заметки и истории успеха"
        description="В этом блоге я делюсь историями, размышлениями о психологической работе и наблюдениями о том, как формируется внутренняя опора и ясность в жизни."
      />
      <ArticlesList />
    </Flex>
  )
}

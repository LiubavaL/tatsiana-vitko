import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import style from './ServiceCard.module.css'

type ServiceCardProps = {
  order: string
  title: string
  description: string
  className?: string
}

export default function ServiceCard({ order, title, description, className }: ServiceCardProps) {
  const combinedClassName = [style.serviceCard, className].filter(Boolean).join(' ')

  return (
    <Flex direction="column" className={combinedClassName}>
      <Text textStyle="sm">{order}</Text>
      <Heading size="2xl" fontWeight="normal" className={style.heading}>
        {title}
      </Heading>
      <Box className={style.bottom}>
        <Text fontWeight="light" className={style.description}>
          {description}
        </Text>
        <Button className={style.moreBtn} rounded="2xl">
           Узнать больше
        </Button>
      </Box>
    </Flex>
  )
}

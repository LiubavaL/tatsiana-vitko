import { Box, Center, Flex, Heading, Icon, Text, Wrap } from '@chakra-ui/react'
import { ReactElement } from 'react'
import style from './PricingListItem.module.css'

type PricingListItemProps = {
  icon: ReactElement
  title: string
  description: string
  price: number
}

export default function PricingListItem({ icon, title, description, price }: PricingListItemProps) {
  return (
    <Flex className={style.listItem}>
      <Center className={style.icon}>
        <Icon size="lg">{icon}</Icon>
      </Center>
      <Box className={style.content}>
        <Heading size="2xl" fontWeight="light">
          {title}
        </Heading>
        <Text fontWeight="extralight" className={style.description}>
          {description}
        </Text>
      </Box>
      <Flex>
        <Heading size="2xl" fontWeight="light" as="span">
          {price}$
        </Heading>
        <Text className={style.per}>/час</Text>
      </Flex>
    </Flex>
  )
}

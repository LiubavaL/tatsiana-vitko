import { Flex } from '@chakra-ui/react'
import { ReactElement } from 'react'
import PricingListItem from '../pricing-list-item'
import style from './PridingList.module.css'

type PricingListEntry = {
  icon: ReactElement
  title: string
  description: string
  price: number
}

type PricingListProps = {
  items: PricingListEntry[]
  className?: string
}

export default function PricingList({ items, className }: PricingListProps) {
  const classes = [style.list, className].filter(Boolean).join(' ')

  return (
    <Flex direction="column" className={classes}>
      {items.map((item) => (
        <PricingListItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </Flex>
  )
}

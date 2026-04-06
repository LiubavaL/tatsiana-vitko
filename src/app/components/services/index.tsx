import { Box, Flex, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import style from './Services.module.css'
import { pricingItems, services } from './constants'
import ServiceCard from '../ui/service-card'
import SectionHeading from '../ui/section-heading'
import PricingList from '../ui/pricing-list/pricing-list'
import { generateKey } from './helpers'

export default function Service() {
  return (
    <Box>
      <Heading size="4xl" fontWeight="light" className={style.heading}>
        Коучинговая поддержка для людей, команд и организаций, которая помогает разобраться в
        сложных ситуациях, выстроить стратегию и двигаться к целям.
      </Heading>

      <Wrap gap="4" justify="center" className={style.services}>
        {services.map((service, index) => {
          const order = generateKey(index)

          return (
            <WrapItem key={order}>
              <ServiceCard
                key={service.key}
                order={order}
                title={service.title}
                description={service.description}
                className={style.serviceCard}
              />
            </WrapItem>
          )
        })}
      </Wrap>

      <Flex className={style.pricing}>
        <Box className={style.pricingLabel}>
          <SectionHeading>Ценник</SectionHeading>
        </Box>
        <Box>
          <Heading size="4xl" fontWeight="light">
            Чёткое и прозрачное ценообразование для ваших нужд
          </Heading>
          <PricingList className={style.pricingList} items={pricingItems} />
        </Box>
      </Flex>
    </Box>
  )
}

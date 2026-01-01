import { Heading, Text } from '@chakra-ui/react'
import style from './Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.heroText}>
        <div>
          <Heading size="5xl" fontWeight="light">
            Коучинг для предпринимателей и&nbsp;лидеров
          </Heading>
          <Text textStyle="sm" className={style.heroDescription}>
            Моя цель — помочь раскрыть потенциал вашего бизнеса, улучшить эффективность и выстроить
            успешные стратегии для роста
          </Text>
        </div>
        <Image src="/logo.png" width="1024" height="768" alt="Hero Banner" />
      </div>
      <div className={style.heroImage}>
        <Image
          src="/hero_image.jpeg"
          width="1024"
          height="768"
          alt="Hero Banner"
          className={style.image}
        />
      </div>
    </section>
  )
}

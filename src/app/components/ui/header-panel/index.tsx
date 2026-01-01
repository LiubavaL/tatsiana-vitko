import { Heading, Text } from '@chakra-ui/react'
import styles from './HeaderPanel.module.css'
import SectionHeading from '../section-heading'

export default function HeaderPanel(props: {
  title: string
  heading?: string
  description?: string
}) {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <SectionHeading className={styles.title}>{props.title}</SectionHeading>
        <Heading className={styles.heading} size="5xl" fontWeight="light">
          {props.heading}
        </Heading>
        <Text className={styles.description} fontWeight="extralight">
          {props.description}
        </Text>
      </div>
    </section>
  )
}

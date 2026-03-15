import { Heading } from '@chakra-ui/react'
import styles from './PageHeading.module.css'

export default function PageHeading(props: { title: string }) {
  return (
    <Heading className={styles.heading} size="5xl" fontWeight="light">
      {props.title}
    </Heading>
  )
}

import { Heading } from '@chakra-ui/react'
import styles from './SectionHeading.module.css'
import clsx from 'clsx'

export default function SectionHeading(props) {
  return (
    <Heading
      as="h3"
      className={clsx(props.className, styles.heading)}
      textStyle="md"
      fontWeight="light"
    >
      {props.children}
    </Heading>
  )
}

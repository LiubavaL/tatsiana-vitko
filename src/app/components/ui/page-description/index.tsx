import { Text } from '@chakra-ui/react'
import styles from './PageDescription.module.css'

export default function PageDescription(props: { description: string }) {
  return (
    <Text className={styles.description} fontWeight="extralight">
      {props.description}
    </Text>
  )
}

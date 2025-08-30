import { Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './Logo.module.css'

export default function Logo() {
  return (
    <Flex>
      <Image src="/logo.png" alt="Лого" width="24" height="24" className={styles.logo} />
      <Heading size="md" className={styles.logoTitle}>
        Татьяна Витко
      </Heading>
    </Flex>
  )
}

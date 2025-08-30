import React from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { getPayload } from 'payload'
import config from '@payload-config'
import Logo from '../logo/Server'
import styles from './Header.module.css'

export default async function HeaderServer() {
  const payload = await getPayload({ config })
  const header = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <nav className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <Logo />
          <span className={styles.caption}>коучинг, стратегия, лидерство</span>
        </div>

        <Flex gap="2.5rem" marginLeft="auto">
          <ul className={styles.links}>
            {header.items.map((item) => (
              <li key={item.id}>
                <Button variant="ghost" size="xs" className={styles.link}>
                  <a href={item.link}> {item.label}</a>
                </Button>
              </li>
            ))}
          </ul>

          <Button size="xs" className={styles.action} rounded="2xl">
            Записаться
          </Button>
        </Flex>
      </div>
    </nav>
  )
}

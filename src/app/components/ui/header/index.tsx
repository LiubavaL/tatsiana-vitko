'use client'

import { Flex, Button } from '@chakra-ui/react'
import Link from 'next/link'
import Logo from '../logo/Server'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function Header(props: {
  items: {
    link: string
    label: string
    id?: string | null | undefined
  }[]
}) {
  const pathname = usePathname()

  function isActive(linkPathname = '') {
    return pathname === linkPathname
  }

  return (
    <nav className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <Logo />
          <span className={styles.caption}>коучинг, стратегия, лидерство</span>
        </div>

        <Flex gap="2.5rem" marginLeft="auto">
          <ul className={styles.links}>
            {props.items.map((item) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  size="xs"
                  fontWeight={400}
                  className={clsx(styles.link, isActive(item.link) && styles['link--active'])}
                >
                  <Link href={item.link}> {item.label}</Link>
                </Button>
              </li>
            ))}
          </ul>

          <Button size="xs" className={styles.action} rounded="2xl">
            <Link href="/contact"> Записаться</Link>
          </Button>
        </Flex>
      </div>
    </nav>
  )
}

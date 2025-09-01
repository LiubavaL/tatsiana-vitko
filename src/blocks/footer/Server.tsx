import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { resolveSocialIconName } from '@/helpers'
import Logo from '../logo/Server'
import Icon from '@/app/components/ui/icon'
import style from './Footer.module.css'

export default async function FooterServer() {
  const payload = await getPayload({ config })
  const footer = await payload.findGlobal({
    slug: 'footer',
  })
  const socials = await payload.findGlobal({
    slug: 'socials',
  })

  return (
    <div className={style.footer}>
      <div className={style.footer__content}>
        <div className={style.footer__col}>
          <Logo />
          <Text fontWeight="light" fontSize="sm" className={style.summary}>
            Помогаю предпринимателям раскрывать потенциал, повышать эффективность и находить
            стратегии роста.
          </Text>
        </div>
        <nav className={style.footer__col}>
          <ul>
            {footer.items.map((item) => (
              <li key={item.id}>
                <Button variant="ghost" size="2xs" className={style.link}>
                  <a href={item.link}> {item.label}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className={style.footer__col}>
          <Heading size="lg">Свяжитесь со мной</Heading>
          <ul className={style.footer__social}>
            <li>
              <Button
                rounded="full"
                variant="outline"
                size="xl"
                className={style.footer__socialLink}
              >
                <a href="mailto:tanyavitko71@gmail.com">
                  <Icon name="email" />
                </a>
              </Button>
            </li>
            {socials.items.map((item) => (
              <li key={item.id}>
                <Button
                  rounded="full"
                  variant="outline"
                  size="xl"
                  className={style.footer__socialLink}
                >
                  <a href={item.link}>
                    <Icon name={resolveSocialIconName(item.link)} />
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Text fontWeight="light" className={style.copyright}>
        © Татьяна Витко. Все права защищены.
      </Text>
    </div>
  )
}

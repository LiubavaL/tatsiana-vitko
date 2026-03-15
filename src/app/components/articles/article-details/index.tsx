'use client'

import { formatDate } from '@/helpers/date'
import { Post } from '@/payload-types'
import { Heading, IconButton, Text } from '@chakra-ui/react'
import { IoArrowBack } from 'react-icons/io5'
import styles from './ArticleDetails.module.css'
import Image from 'next/image'
import { Prose } from '@/app/components/prose'
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html'
import { useRouter } from 'next/navigation'

export default function ArticleDetails(props: { article: Post }) {
  const { title, createdAt, backgroundImage, content } = props.article
  const htmlContent = convertLexicalToHTML({ data: content })

  const router = useRouter()

  return (
    <section className={styles.article}>
      <article className={styles.content}>
        <IconButton
          className={styles.back}
          aria-label="Search database"
          variant="outline"
          rounded="full"
          onClick={() => router.push('/blog')}
        >
          <IoArrowBack />
        </IconButton>
        <Text className={styles.datetime} fontSize="sm">
          {formatDate(createdAt)}
        </Text>
        {title && (
          <Heading size="5xl" className={styles.heading}>
            {title}
          </Heading>
        )}
        {backgroundImage?.url && (
          <Image src={backgroundImage.url} alt="Обложка статьи" width={1280} height={200} />
        )}
        <Prose className={styles.prose} dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </section>
  )
}

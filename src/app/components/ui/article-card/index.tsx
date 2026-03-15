import { formatDate } from '@/helpers/date'
import { Post } from '@/payload-types'
import { Card, Button, Text, Image } from '@chakra-ui/react'
import Link from 'next/link'

export default function ArticleCard(props: { article: Post }) {
  const { title, description, updatedAt, backgroundImage, id } = props.article

  return (
    <Link href={`/articles/${id}`}>
      <Card.Root maxW="sm" overflow="hidden">
        {backgroundImage?.url && <Image src={backgroundImage.url} alt="Обложка статьи" />}
        <Card.Body gap="2">
          <Text color="fg.muted" textStyle="sm">
            {formatDate(updatedAt)}
          </Text>
          {title && (
            <Card.Title lineHeight="1.5" fontSize="xl" fontWeight="normal">
              {title}
            </Card.Title>
          )}
          <Card.Description>
            {description && (
              <Text fontWeight="light" lineHeight="1.5">
                {description}
              </Text>
            )}
          </Card.Description>
        </Card.Body>
        <Card.Footer gap="2">
          <Button as="div" variant="solid" rounded="4xl" textTransform="uppercase">
            Читать
          </Button>
        </Card.Footer>
      </Card.Root>
    </Link>
  )
}

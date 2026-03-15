import ArticleDetails from '@/app/components/articles/article-details'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function ArticleDetailsServer({ id }: { id: string }) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const article = await payload.findByID({
    collection: 'posts',
    id,
    depth: 2,
  })

  return <ArticleDetails article={article} />
}

import ArticlesList from '@/app/components/articles/articles-list'
import config from '@/payload.config'
import { getPayload } from 'payload'

export default async function ArticlesServer() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const articles = await payload.find({
    collection: 'posts',
    depth: 2,
    page: 1,
    limit: 10,
    pagination: false,
  })

  return <ArticlesList articles={articles.docs} />
}

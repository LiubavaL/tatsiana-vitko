import ArticleDetails from '@/blocks/article-details/Server'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return <ArticleDetails id={id} />
}

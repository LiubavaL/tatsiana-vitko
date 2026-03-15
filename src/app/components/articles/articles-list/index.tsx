import { Post } from '@/payload-types'
import { Grid } from '@chakra-ui/react'
import ArticleCard from '../../ui/article-card'

export default function ArticlesList(props: { articles: Post[] }) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap="6" margin={6}>
      {props.articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Grid>
  )
}

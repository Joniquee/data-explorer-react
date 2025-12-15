import { NewsArticle } from '../types/NewsArticle'

export async function getNews(): Promise<NewsArticle[]> {
  const res = await fetch(
    'https://api.spaceflightnewsapi.net/v4/articles/?limit=5'
  )
  const data = await res.json()
  return data.results
}

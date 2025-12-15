import { useEffect, useState } from 'react'
import { getNews } from '../api/newsApi'
import { NewsArticle } from '../types/NewsArticle'

export default function News() {
  const [news, setNews] = useState<NewsArticle[]>([])

  useEffect(() => {
    getNews().then(setNews)
  }, [])

  return (
    <div>
      <h1>📰 Новости</h1>
      {news.map((n, i) => (
        <div key={i}>
          <h3>{n.title}</h3>
          <p>{n.description}</p>
          <a href={n.url} target="_blank">Читать далее</a>
        </div>
      ))}
    </div>
  )
}

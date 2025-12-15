import { useState } from 'react'
import { getCatFact } from '../api/catsApi'
import { CatFact } from '../types/CatFact'

export default function Cats() {
  const [fact, setFact] = useState<CatFact | null>(null)
  const [loading, setLoading] = useState(false)

  const loadFact = async () => {
    setLoading(true)
    const data = await getCatFact()
    setFact(data)
    setLoading(false)
  }

  return (
    <div>
      <h1>🐈 Факты о кошках</h1>
      <button onClick={loadFact}>Получить факт</button>

      {loading && <p>Загрузка...</p>}
      {fact && <p>{fact.fact}</p>}
    </div>
  )
}

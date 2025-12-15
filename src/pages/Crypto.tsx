import { useEffect, useState } from 'react'
import { getCrypto } from '../api/cryptoApi'
import { CryptoCoin } from '../types/CryptoCoin'

export default function Crypto() {
  const [coins, setCoins] = useState<CryptoCoin[]>([])

  useEffect(() => {
    getCrypto().then(setCoins)
  }, [])

  return (
    <div>
      <h1>🪙 Криптовалюты</h1>
      <ul>
        {coins.slice(0, 5).map(c => (
          <li key={c.id}>
            {c.name} ({c.symbol.toUpperCase()}) — ${c.current_price}
          </li>
        ))}
      </ul>
    </div>
  )
}

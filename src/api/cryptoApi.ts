import { CryptoCoin } from '../types/CryptoCoin'

export async function getCrypto(): Promise<CryptoCoin[]> {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
  )
  return res.json()
}

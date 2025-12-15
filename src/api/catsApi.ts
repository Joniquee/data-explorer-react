import { CatFact } from '../types/CatFact'

export async function getCatFact(): Promise<CatFact> {
  const res = await fetch('https://catfact.ninja/fact')
  return res.json()
}
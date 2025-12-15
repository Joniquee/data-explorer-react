import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cats from './pages/Cats'
import Crypto from './pages/Crypto'
import News from './pages/News'

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Главная</Link> |{' '}
        <Link to="/cats">Кошки</Link> |{' '}
        <Link to="/crypto">Криптовалюты</Link> |{' '}
        <Link to="/news">Новости</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  )
}

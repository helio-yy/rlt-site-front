import { Content } from 'components/Content'
import GameCardSlider from 'components/GameCardSlider'

const items = [
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1616768804761.jpeg',
    price: ' 1.367',
    promotionalPrice: 'R$ 1.367'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1618408664114.jpeg',
    price: ' 2.287'
  },
  {
    title: 'Diárias a partir de',
    developer: 'Rockstar Games',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982644528.jpeg',
    price: ' 235,00'
  },
  {
    title: 'Diárias a partir de',
    developer: 'Rockstar Games',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982523961.jpeg',
    price: ' 235,00'
  },
  {
    title: 'Diárias a partir de',
    developer: 'Rockstar Games',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982677521.jpeg',
    price: ' 235,00'
  },
  {
    title: 'Diárias a partir de',
    developer: 'Rockstar Games',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982775977.jpeg',
    price: ' 235,00'
  }
]
export const Newsletter = () => (
  <Content>
    <GameCardSlider items={items} />
    <h1>teste</h1>
  </Content>
)

export default Newsletter

import Button from 'components/Button'
import { Content } from 'components/Content'
import MediaMatch from 'components/MediaMatch'
import PromotionCardSlider from 'components/PromotionCardSlider'
import { useEffect, useState } from 'react'

const items = [
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1616768804761.jpeg',
    price: '2.544'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1618408664114.jpeg',
    price: '1.099'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982644528.jpeg',
    price: '1.123'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982523961.jpeg',
    price: '1.221'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982737904.jpeg',
    price: '844'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982775977.jpeg',
    price: '1.774'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1637982677521.jpeg ',
    price: '1.194'
  }
]

// console.log(items.slice(2))

export const Newsletter = () => {
  return (
    <Content>
      <PromotionCardSlider items={items} />

      <MediaMatch lessThan="medium">
        <Button textColor="white"> Ver mais </Button>
      </MediaMatch>
    </Content>
  )
}

export default Newsletter

import { Wrapper } from 'components/Banner/styles'
import BannerSlider from 'components/BannerSlider'
import Button from 'components/Button'
import { Content } from 'components/Content'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import PromotionCardSlider from 'components/PromotionCardSlider'
import { useEffect, useState } from 'react'

const items = [
  {
    title: 'Diárias a partir de',
    img: 'https://s3.sa-east-1.amazonaws.com/cms.resortlatorre.com.br/Imagens/2021/Banner+Home_Julho+21.jpg',
    price: '2.544'
  },
  {
    title: 'Diárias a partir de',
    img: 'https://s3.sa-east-1.amazonaws.com/cms.resortlatorre.com.br/Imagens/2021/Banner+Home_Julho+21.jpg',
    // img: 'https://d2wiap78u3ex1b.cloudfront.net/capas/1618408664114.jpeg',
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
    <Wrapper>
      <Heading color="blueLight1">
        Momentos <span>marcantes</span>... <span>Com</span> ofertas incríveis
      </Heading>
      {/* <PromotionCardSlider items={items} /> */}
      <BannerSlider items={items} />

      <MediaMatch lessThan="medium">
        <Button textColor="white"> Ver mais </Button>
      </MediaMatch>
    </Wrapper>
  )
}

export default Newsletter

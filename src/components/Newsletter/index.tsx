import Button from 'components/Button'
import { Content } from 'components/Content'
import GameCardSlider from 'components/GameCardSlider'
import { useState } from 'react'

const items = [
  {
    title: 'Diárias a partir de'
  },
  {
    title: 'Diárias a partir de'
  },
  {
    title: 'Diárias a partir de'
  },
  {
    title: 'Diárias a partir de'
  },
  {
    title: 'Diárias a partir de'
  }
]

// console.log(slice(1))

export const Newsletter = () => {
  // const [items, setItems] = useState(false)

  // const getPromotions = (hasLimit = false) => {
  //   if (hasLimit) {
  //     items.slice(0, 3)
  //   }

  //   return items
  // }

  return (
    <Content>
      <GameCardSlider items={items} />
      <Button textColor="white">Mostrar mais</Button>
    </Content>
  )
}

export default Newsletter

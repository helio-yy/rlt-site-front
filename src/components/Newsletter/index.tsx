import Button from 'components/Button'
import { Content } from 'components/Content'
import GameCardSlider from 'components/GameCardSlider'
import { useEffect, useState } from 'react'

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

console.log(items.slice(2))

export const Newsletter = () => {
  const [show, setShow] = useState(false)

  // const show = array.filter((items) => {
  //   return number > 3
  // })

  // useEffect((hasLimit = false) => {
  //   const getPromotions = () => {
  //     if (hasLimit) {
  //       items.slice(0, 3)
  //     }
  //     console.log(items)

  //     return items
  //   }
  // }, [])

  // useEffect(() => {
  //   const scrollListener = () => {
  //     if (window.scrollY) {
  //       setIsSticky(true)
  //     } else {
  //       setIsSticky(false)
  //     }
  //   }
  //   window.addEventListener('scroll', scrollListener)

  //   return () => {
  //     window.removeEventListener('scroll', scrollListener)
  //   }
  // }, [])

  // const getPromotions = (hasLimit = false) => {
  //   if (hasLimit) {
  //     items.slice(0, 3)
  //   }

  //   return items
  // }

  return (
    <Content>
      <GameCardSlider items={items} show={show} />
      <Button textColor="white">
        <a onClick={() => setShow(true)}> read more</a>
      </Button>
    </Content>
  )
}

export default Newsletter

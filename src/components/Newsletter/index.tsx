import Banner from 'components/Banner'

const props = {
  img: 'https://s3.sa-east-1.amazonaws.com/cms.resortlatorre.com.br/Imagens/2021/Banner+Home_Julho+21.jpg',
  title: '555',
  subtitle: 'subtitulos ',
  buttonLabel: 'Buy NOw',
  buttonLink: '/games'
}

export const Newsletter = () => <Banner {...props} />

export default Newsletter

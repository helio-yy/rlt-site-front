import TextField from 'components/TextField'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import Button from 'components/Button'
import * as S from './styles'
import { Content } from 'components/Content'
import Slider from 'react-slick'
import Banner from 'components/Banner'

const FormSubscribeNew = () => (
  <Content>
    <S.Wrapper>
      <S.SubscribeTitle>
        <img
          src="https://d2odosjtfeb3gl.cloudfront.net/website/global/images/Icon-news-blue.svg"
          width="50"
        />

        <span>
          <p>Seja o primeiro a receber</p>
          <h3>Notícias, descontos e ofertas</h3>
        </span>
      </S.SubscribeTitle>

      <form>
        <TextField
          type="name"
          placeholder="Nome"
          id="Field"
          icon={<EmailOutlinedIcon />}
        />

        <TextField
          type="email"
          placeholder="E-mail"
          id="Field"
          icon={<EmailOutlinedIcon />}
        />

        <Button size={'medium'}>ENVIAR</Button>
      </form>
    </S.Wrapper>
  </Content>
)

export default FormSubscribeNew

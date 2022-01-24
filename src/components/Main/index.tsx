import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    {/* <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    /> */}
    <MediaMatch greaterThan="medium">
      <S.Title>Resort La Torre - desk</S.Title>
    </MediaMatch>
    <MediaMatch lessThan="medium">
      <S.Title>Resort La Torre - mobile</S.Title>
    </MediaMatch>
    <p>
      m Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five c
    </p>
    {/* <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    /> */}
  </S.Wrapper>
)

export default Main

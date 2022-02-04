import Link from 'next/link'
import Button from 'components/Button'

import * as S from './styles'

const IntroSection = () => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Column>
            <S.subTitle>
              <p>Um novo</p>
              <img src="https://d2odosjtfeb3gl.cloudfront.net/images/Logo-solo-LTR-white.svg" />
              <strong>[renasceu]</strong>
            </S.subTitle>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <Button size="small">VENHA CONHECER</Button>
          </S.Column>
          <S.Column>
            <S.CardImages>
              <Link href="/">
                <a>
                  <S.PhotosWrapper>
                    <h1>Fotos</h1>
                    <div className="Element"></div>
                  </S.PhotosWrapper>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <S.VideosWrapper>
                    <h1>Vídeos</h1>
                    <div className="Element"></div>
                  </S.VideosWrapper>
                </a>
              </Link>
            </S.CardImages>

            <S.Stamps>
              <img
                src="https://s3.sa-east-1.amazonaws.com/assets.resortlatorre.com.br/images/escolhemos-ser-pets-friendly.png"
                className="hoverEffect"
              />
              <img
                src="https://s3.sa-east-1.amazonaws.com/assets.resortlatorre.com.br/images/selo-turismo-responsavel.png"
                className="hoverEffect"
              />
            </S.Stamps>
          </S.Column>
        </S.Content>
      </S.Container>
    </>
  )
}

export default IntroSection

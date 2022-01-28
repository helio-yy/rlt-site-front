import Link from 'next/link'

import * as S from './styles'

const IntroSection = () => {
  return (
    <>
      <S.Section>
        <S.WrapperTeste>
          <S.Column>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>

            <button>VENHA CONHECER</button>
          </S.Column>
          <S.Column>
            <S.Aside>
              {/* <S.PhotosWrapper isOpen={isOpen}>

                <h2>Fotos</h2>
                <S.ImageBack onClick={() => setIsOpen(!isOpen)}></S.ImageBack>
                <S.Element aria-hidden={!isOpen}></S.Element>
              </S.PhotosWrapper> */}

              <Link href="/">
                <a>
                  <S.PhotosWrapper>
                    <h1>Fotos</h1>
                    <div className="ImageBackOps"></div>
                    <div className="Element"></div>
                  </S.PhotosWrapper>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <S.VideosWrapper>
                    <h1>Vídeos</h1>
                    <div className="ImageBackOps"></div>
                    <div className="Element"></div>
                  </S.VideosWrapper>
                </a>
              </Link>
            </S.Aside>
            <S.Stamps>
              <img src="https://s3.sa-east-1.amazonaws.com/assets.resortlatorre.com.br/images/escolhemos-ser-pets-friendly.png" />
              <img src="https://s3.sa-east-1.amazonaws.com/assets.resortlatorre.com.br/images/selo-turismo-responsavel.png" />
            </S.Stamps>
          </S.Column>
        </S.WrapperTeste>
      </S.Section>
    </>
  )
}

export default IntroSection

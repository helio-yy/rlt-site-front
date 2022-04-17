import HeroOfficeCardSlider from 'components/HeroOfficeCardSlider'

import * as S from './styles'

const SectionHeroOffice = () => {
  return (
    <>
      <S.Container>
        <h1>HERO OFFICE</h1>

        <S.Content>
          <S.Column>
            <HeroOfficeCardSlider />
          </S.Column>
          <S.Column>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </S.Column>
        </S.Content>
      </S.Container>
    </>
  )
}

export default SectionHeroOffice

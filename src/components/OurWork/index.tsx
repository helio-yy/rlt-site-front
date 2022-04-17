import * as S from './styles'

const OurWork = () => {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.Column>
            <p>
              <h1>RED BULL - PITAYA EDITION</h1>
              <br></br>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </S.Column>
          <S.Column>
            <S.Infor>
              <div>
                <strong>CLIENT</strong> <span>RED BULL</span>
              </div>
              <div>
                <strong>SERVICE</strong> <span>CUSTOM MAP CREATION</span>
              </div>
              <div>
                <strong>YEAR</strong> <span>MARCH 2022</span>
              </div>
            </S.Infor>
          </S.Column>
        </S.Content>
      </S.Container>
    </>
  )
}

export default OurWork

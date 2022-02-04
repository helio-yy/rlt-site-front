import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import TextField from 'components/TextField'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import FormSubscribeNew from 'components/FormSubscribeNew'

import * as S from './styles'
import Button from 'components/Button'

export const Newsletter = () => (
  <S.Container>
    <S.Content>
      <br></br>
      {/* <Checkbox label="primeiro" labelFor="primeiro" />
      <Checkbox label="segundo" labelFor="segundo" />
      <Radio label="Radio" labelFor="Radio" />
      <Radio label="Radio" labelFor="Radio" value="anyValue" />
      <Radio label="Radio" labelFor="check" value="anyValue" /> */}
      <br></br>

      <FormSubscribeNew />
    </S.Content>
  </S.Container>
)

export default Newsletter

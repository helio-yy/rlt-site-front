import React, { useState } from 'react'

//Styles
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

import * as locales from 'react-date-range/dist/locale'
import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'

import { Content } from 'components/Content'
import TextField from 'components/TextField'
import * as S from './styles'
import MediaMatch from 'components/MediaMatch'
import Button from 'components/Button'
import ModalCalendar from 'components/ModalCalendar'
import InputQuantity from 'components/InputQuantity'

import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'

export const SearchAaccommodationForm = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  return (
    <Content>
      <S.Wrapper>
        <ModalCalendar
          title={
            <>
              <TextField
                placeholder="00/00/0000 - 00/00/0000"
                icon={<EmailOutlinedIcon />}
              />
            </>
          }
        >
          <DateRangePicker
            locale={locales['pt']}
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            editableDateInputs={true}
            ranges={state}
            direction="horizontal"
          />
        </ModalCalendar>

        <ModalCalendar
          title={
            <>
              <TextField placeholder="1 Hóspedes" />
            </>
          }
        >
          <span className="textTest">Adulto</span>
          <InputQuantity
            defaultValue="0"
            name="minAdults"
            placeholder="0"
          ></InputQuantity>
          <span className="textTest">Crianças(Idade 2 - 11)</span>
          <InputQuantity
            defaultValue="0"
            name="minAdults"
            placeholder="0"
          ></InputQuantity>
          <span className="textTest">Bebês(Menor de 2)</span>
          <InputQuantity
            defaultValue="0"
            name="minAdults"
            placeholder="0"
          ></InputQuantity>
          <span className="textTest">Pets</span>
          <InputQuantity
            defaultValue="0"
            name="minAdults"
            placeholder="0"
          ></InputQuantity>

          <Button textColor="white">CONFIRMAR</Button>
        </ModalCalendar>

        <Button textColor="white">PESQUISAR</Button>

        <MediaMatch>
          <DateRangePicker
            locale={locales['pt']}
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            editableDateInputs={true}
            ranges={state}
            direction="horizontal"
          />
        </MediaMatch>
      </S.Wrapper>
    </Content>
  )
}
export default SearchAaccommodationForm

import Link from 'next/link'
import Dropdown from 'components/Dropdown'
import MenuIcon from '@material-ui/icons/Menu'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import * as S from './styles'
import MyLocationIcon from '@material-ui/icons/MyLocation'

const UserDropdown = () => (
  <S.Wrapper>
    <Dropdown
      title={
        <>
          <div className="mainIconsUser">
            <MenuIcon />
            <PersonOutlineOutlinedIcon />
          </div>
        </>
      }
    >
      <S.Nav>
        <Link href="/" passHref>
          <S.Link>
            <span>Entrar</span>
          </S.Link>
        </Link>

        <Link href="/" passHref>
          <S.Link>
            <span>Cadastrar</span>
          </S.Link>
        </Link>

        <Link href="/" passHref>
          <S.Link>
            <span>Check-in</span>
            <MyLocationIcon />
          </S.Link>
        </Link>

        <Link href="/" passHref>
          <S.Link>
            <span>Fidelidade</span>
            <MyLocationIcon />
          </S.Link>
        </Link>

        <Link href="/" passHref>
          <S.Link>
            <span>Pet Friendly</span>
            <MyLocationIcon />
          </S.Link>
        </Link>

        <Link href="/" passHref>
          <S.Link>
            <span>Blog</span>
            <MyLocationIcon />
          </S.Link>
        </Link>
      </S.Nav>
    </Dropdown>
  </S.Wrapper>
)

export default UserDropdown

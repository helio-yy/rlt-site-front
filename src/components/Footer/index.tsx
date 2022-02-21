import React from 'react'
import Link from 'next/link'
import MyLocationIcon from '@material-ui/icons/MyLocation'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

import * as S from './styles'
import Logo from 'components/Logo'

const Footer = () => (
  <S.Footer>
    <S.Wrapper>
      <S.Column>
        <Logo size="large" color="white" hideOnMobile={false} />
        <h5>Localização</h5>

        <span>
          <MyLocationIcon />
          Av. Beira Mar, 9999 - Mutá,<br></br>
          Porto Seguro - BA
        </span>

        <span>
          <MyLocationIcon />
          +55 (73) 2105 1700<br></br>
          4020 - 4017
        </span>
      </S.Column>
      <S.Column>
        <h5>Navegação</h5>
        <nav>
          <Link href="/">
            <a>
              <MyLocationIcon />
              Condições de Venda
            </a>
          </Link>
          <Link href="/">
            <a>
              <MyLocationIcon />
              Política de Privacidade
            </a>
          </Link>
          <Link href="/">
            <a>
              <MyLocationIcon />
              Trabalhe Conosco
            </a>
          </Link>
          <Link href="/">
            <a>
              <MyLocationIcon />
              Fidelidade
            </a>
          </Link>
          <Link href="/">
            <a>
              <MyLocationIcon />
              Pet Friendly
            </a>
          </Link>
          <Link href="/">
            <a>
              <MyLocationIcon />
              Protocolos
            </a>
          </Link>
        </nav>
      </S.Column>
      <S.Column>
        <h5>SIGA NOSSAS REDES SOCIAIS</h5>

        <S.Social>
          <Link href="/">
            <a>
              <WhatsAppIcon />
            </a>
          </Link>
          <Link href="/">
            <a>
              <TwitterIcon />
            </a>
          </Link>
          <Link href="/">
            <a>
              <InstagramIcon />
            </a>
          </Link>
          <Link href="/">
            <a>
              <YouTubeIcon />
            </a>
          </Link>
          <Link href="/">
            <a>
              <MyLocationIcon />
            </a>
          </Link>
          <Link href="/">
            <a>
              <MyLocationIcon />
            </a>
          </Link>
        </S.Social>

        <S.SecurityCertificate>
          <S.AbrResorts>
            <p>AFILIADO</p>
            <img
              src="https://d2odosjtfeb3gl.cloudfront.net/images/abr-logo.png"
              width="80"
            />
          </S.AbrResorts>
          <S.SiteBlindado>
            <p>COMPRE TRANQUILO</p>
            <img
              src="https://s3-sa-east-1.amazonaws.com/selo.siteblindado.com/seals_default/ssl.gif"
              width="50"
            />
            <a
              href="https://www.siteblindado.com/consumidor/selo-blindado/?language1=pt&amp;hostname=resortlatorre.com.br"
              id="sb-shield-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verificar"
              title="Navegue tranquilamente! Este é um Site Blindado contra ataques! Clique e confira mais detalhes."
              width="100"
            >
              <img src="https://seal.siteblindado.com.br/resortlatorre.com.br/seal.png" />
            </a>
          </S.SiteBlindado>
        </S.SecurityCertificate>
      </S.Column>
    </S.Wrapper>
    <S.Copyright>
      <Link href="/">
        <a>
          Desenvolvido por
          <img
            src="https://s3-sa-east-1.amazonaws.com/yaayoo.com.br/images/logo-inline.svg"
            width="70"
          />
        </a>
      </Link>
    </S.Copyright>
  </S.Footer>
)

export default Footer

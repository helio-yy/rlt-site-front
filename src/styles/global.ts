import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'bodoni_elegant_extbdregular';
    src: url('https://s3.sa-east-1.amazonaws.com/assets.resortlatorre.com.br/fonts/bodonielegant-extrabold-webfont.woff') format('woff2'),;
    font-weight: normal;
    font-style: normal;

}

:root{
  --primary-color: #00599D;

  --white-color:#ffffff;
}


*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}


${({ theme }) => css`
  html {
    font-size: 65%;
  }

  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
  }
`}

a {
    color: inherit;
    text-decoration: none;
}

ul, li {
    list-style: none;
}

.hoverEffect{
  transform: translateY(0);
  transition: all 0.3s ease;

  :hover{
    transform: translateY(-0.2rem);
  }
}
.rdrDefinedRangesWrapper {
  display: none;
}

`

export default GlobalStyle

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`

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
`

export default GlobalStyle

import { createGlobalStyle } from 'styled-components'
import { BASE_TEXT_COLOR, BASE_WHITE_COLOR, FONT_INIT } from './.style'

const GlobalStyle = createGlobalStyle`
  html {
    display: block;
    font-size: 62.5%;
  }

  body {
    background: ${BASE_WHITE_COLOR};
    color: ${BASE_TEXT_COLOR};
    font-family: ${FONT_INIT};
    font-size: 1.6rem;
    height: 100%;
    line-height: 1;
    margin: 0 auto;
    overflow-scrolling: touch;
    overflow-x: hidden;
    padding: 0;
    width: 100%;
  }

  a {
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
  
    &:hover,
    &:focus,
    &:visited {
      text-decoration: none;
    }
  }
  
  a,
  button {
    transition: all .3s linear;
  }
  
  select {
    appearance: none;
    background: none transparent;
    border: 0;
    border-radius: 0;
    box-sizing: content-box;
    color: inherit;
    font-size: inherit;
    margin: 0;
    padding: 0;
    vertical-align: middle;
  
    &::-ms-expand {
      display: none;
    }
  }
  
  img {
    vertical-align: bottom;
  }
  
  input,
  label,
  select,
  textarea {
    vertical-align: middle;
  }

  button {
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
  }
  
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`

export default GlobalStyle

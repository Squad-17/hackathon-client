import { createGlobalStyle } from 'styled-components';
import MetropolisBlack from '../assets/fonts/Metropolis-Black.otf';
import MetropolisBold from '../assets/fonts/Metropolis-Bold.otf';
import MetropolisRegular from '../assets/fonts/Metropolis-Regular.otf';
import MetropolisLight from '../assets/fonts/Metropolis-Light.otf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Metropolis Black';
    src: url(${MetropolisBlack});
  }
  @font-face {
    font-family: 'Metropolis Bold';
    src: url(${MetropolisBold});
  }
  @font-face {
    font-family: 'Metropolis Regular';
    src: url(${MetropolisRegular});
  }
  @font-face {
    font-family: 'Metropolis Light';
    src: url(${MetropolisLight});
  }
  * {
    margin: 0;
    padding: 0;
    font-family: 'Metropolis Bold', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
    background: #FEFEFE;
  }
`

export default GlobalStyles;

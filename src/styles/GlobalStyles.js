import { createGlobalStyle } from "styled-components";
import HankenGrotesk from '../fonts/HankenGrotesk-VariableFont_wght.ttf'
import HankenGroteskMedium from '../fonts/static/HankenGrotesk-Medium.ttf'
import HankenGroteskBold from '../fonts/static/HankenGrotesk-ExtraBold.ttf'
import HankenGroteskExtraBold from '../fonts/static/HankenGrotesk-ExtraBold.ttf'

const GlobalStyles = createGlobalStyle`

:root {
  /* primary colors */
  --light-red-primary-color: hsl(0, 100%, 67%);
  --orangey-yellow-primary-color: hsl(39, 100%, 56%);
  --green-teal-primary-color: hsl(166, 100%, 37%);
  --cobalt-blue-primary-color: hsl(234, 85%, 45%);

  /** Gradients  */
  /* background */
  --light-slate-blue-color: hsl(252, 100%, 67%);
  --light-royal-blue-color: hsl(241, 81%, 54%);

  /* circle */
  --violet-blue-color: hsla(256, 72%, 46%, 1);
  --persian-blue-color: hsla(241, 72%, 46%, 0);
}

  @font-face {
    font-family: "Hanken Grotesk";
    src: url(${ HankenGrotesk }) format("truetype"),
          url(${ HankenGroteskMedium }) format("truetype"),
          url(${ HankenGroteskBold }) format("truetype"),
          url(${ HankenGroteskExtraBold }) format("truetype");
  }

  * {
    box-sizing: border-box;
  }

  p,
  h1,
  h3,
  h3,
  h4 {
    margin: 0;
  }

  p {
    font-size: 18px;
  }

  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Hanken Grotesk";
  }
`

export default GlobalStyles
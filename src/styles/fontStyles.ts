import { createGlobalStyle } from "styled-components";

import MontserratLightTtf from "../fonts/Montserrat/Montserrat-Light.ttf";
import MontserratLightWoff2 from "../fonts/Montserrat/Montserrat-Light.woff2";

import MontserratRegularTtf from "../fonts/Montserrat/Montserrat-Regular.ttf";
import MontserratRegularWoff2 from "../fonts/Montserrat/Montserrat-Regular.woff2";

import MontserratBoldTtf from "../fonts/Montserrat/Montserrat-Bold.ttf";
import MontserratBoldWoff2 from "../fonts/Montserrat/Montserrat-Bold.woff2";

import AcmeTtf from "../fonts/Acme/Acme-Regular.ttf";
import AcmeWoff2 from "../fonts/Acme/Acme-Regular.woff2";

export const GlobalFontStyles = createGlobalStyle`

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratLightTtf}) format('truetype'),
       url(${MontserratLightWoff2}) format('woff2');
    font-weight: 300;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratRegularTtf}) format('truetype'),
       url(${MontserratRegularWoff2}) format('woff2');
    font-weight: 400;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratBoldTtf}) format('truetype'),
       url(${MontserratBoldWoff2}) format('woff2');
    font-weight: 700;
}

@font-face {
  font-family: 'Acme';
  src: url(${AcmeTtf}) format('truetype'),
       url(${AcmeWoff2}) format('woff2');
}
`;

import CaustenBlack from '../../fonts/causten-black-webfont.woff2'
import CaustenBold from '../../fonts/causten-bold-webfont.woff2'
import CaustenLight from '../../fonts/causten-light-webfont.woff2'
import CaustenMedium from '../../fonts/causten-medium-webfont.woff2'
import CaustenRegular from '../../fonts/causten-regular-webfont.woff2'
import CaustenSemiBold from '../../fonts/causten-semibold-webfont.woff2'

const typographyImports = `
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 200;
  src: local('Causten'), local('Causten-Light'), url(${CaustenLight}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local('Causten'), local('Causten-Regular'), url(${CaustenRegular}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local('Causten'), local('Causten-Medium'), url(${CaustenMedium}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 700;
  src: local('Causten'), local('Causten-Semi-Bold'), url(${CaustenSemiBold}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
@font-face {
  font-family: 'Causten';
  font-style: normal;
  font-display: swap;
  font-weight: 800;
  src: local('Causten'), local('Causten-Bold'), url(${CaustenBold}) format('woff2');
  unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
}
`;
export default typographyImports;

export const size = {
  large: '1.5em',
  medium: '1.2em',
  small: '1em',
};

const theme = {
  mainColor: '#088F8F',
  mq: {
    laptop: `@media only screen and (min-width: ${size.largest})`,
    tablet: `@media only screen and (min-width: ${size.large})`,
    mobile: `@media only screen and (min-width: ${size.small})`,
  },
};

export default theme;

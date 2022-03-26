import { Global, css } from '@emotion/react';

const style = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, 'Noto Sans KR', 'Montserrat', BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 62.5%;
  }
  :root {
    --primary-color: yellow;
  }
  .ui-dark {
    --primary-color: blue;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

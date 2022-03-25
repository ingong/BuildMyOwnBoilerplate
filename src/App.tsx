import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import Router from './Router';
import { theme, GlobalStyle } from '@styles/index';

// const App = () => {
//   return <div>Hello World</div>;
// };

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

// export default App;
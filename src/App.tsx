import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import Router from './Router';
import { theme, GlobalStyle } from '@/styles/index';
import Modals from '@/components/Modals';
import { ModalsProvider } from '@/contexts/ModalsContext';

const App = () => {
  return (
    <BrowserRouter>
      <ModalsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Modals />
          <Router />
        </ThemeProvider>
      </ModalsProvider>
    </BrowserRouter>
  );
};

export default App;

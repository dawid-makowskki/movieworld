import React from 'react';
import './App.css';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';
import Router from 'routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

export default App;

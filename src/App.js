import React from 'react';
import './App.css';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>dsa</div>
  </ThemeProvider>
);

export default App;

import React from 'react';
import './App.css';
import { theme } from 'theme/theme';
import { ThemeProvider } from 'styled-components';
import WishlistProvider from 'hooks/useWishlist';
import Router from 'routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <WishlistProvider>
        <Router />
      </WishlistProvider>
    </ThemeProvider>
  );
};

export default App;

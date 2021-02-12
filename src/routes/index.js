import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from 'pages/search';
import Wishlist from 'pages/wishlist';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Search />
      </Route>
      <Route exact path="wishlist">
        <Wishlist />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;

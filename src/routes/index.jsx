import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NewBook from '../pages/NewBook';

const Routes = () => (
  <Switch>
    <Route path="/" exact element={<Home />} />
    <Route path="/new-book" element={<NewBook />} />
  </Switch>
);

export default Routes;

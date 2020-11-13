import React from 'react';

import { Switch } from 'react-router-dom';

import { Homepage, NotFound } from '../pages';
import Route from './Route';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/not-found" exact component={NotFound} />
    </Switch>
  </>
);

export default Routes;

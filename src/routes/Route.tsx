/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute } from 'react-router-dom';

import DefaultLayout from '../layouts/Default';

interface RouteWrapperProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteWrapperProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <DefaultLayout>
            <Component />
          </DefaultLayout>
        );
      }}
    />
  );
};

export default Route;

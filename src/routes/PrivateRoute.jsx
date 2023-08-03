import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={authenticated ? <Element /> : <Navigate to="/" />}
    />
  );
};

export default PrivateRoute;



import React from 'react';
import { BrowserRouter, Route, Routes as DomRoutes } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from '@/components';
import { ROUTES } from '@/constants';
import { Home } from '@/pages/Home';
import { SignIn } from '@/pages/SignIn';

export function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route
          path={ROUTES.SIGNIN}
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.HOME}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </DomRoutes>
    </BrowserRouter>
  );
}

import React from 'react';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import HomePage from 'features/homePage/containers/HomePage';
import SignUpPage from 'features/signUpPage/containers/SignUpPage';

interface Props {
}

const AppRoutes = (_props: Props): React.ReactElement => {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomePage />}
      />
      <Route
        path='signUp'
        element={<SignUpPage />}
      />
      <Route
        path='*'
        element={<Navigate to='/' />}
      />
    </Routes>
  );
};

export default AppRoutes;

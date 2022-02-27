import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Menu from 'app/containers/Menu';
import HomePageCtn from 'features/homePage/containers/HomePageCtn';

export default function App(): React.ReactElement {
  return (
    <Router>
      <div className='container'>
        <Menu />
        <div className='content'>
          <Routes>
            <Route
              path='/'
              element={<HomePageCtn />}
            />

            <Route
              path='*'
              element={<Navigate to='/' />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

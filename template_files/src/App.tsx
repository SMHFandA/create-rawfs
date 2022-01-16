import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';

import Menu from 'app/components/Menu';

export default function App(): React.ReactElement {
  const location = useLocation();

  return (
    <Router>
      <div className='container'>
        <Menu
          pathname={location.pathname}
        />
        <div className='content'>
          <Switch>
            <Route
              exact
              path='/'
              component={CounterScreen}
            />

            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';

export default function App(): React.ReactElement {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

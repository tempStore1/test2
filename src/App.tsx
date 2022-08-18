import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProvideAuth from 'auth/ProvideAuth';
import ProvideLoading from 'components/ProvideLoading';
import routes from './routes';

const App: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

const AppWrapper: React.FC = () => (
  <Router>
    <ProvideLoading>
      <ProvideAuth>
        <Toaster />
        <App />
      </ProvideAuth>
    </ProvideLoading>
  </Router>
);

export default AppWrapper;

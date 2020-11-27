import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router';

import createStore, { history } from 'store/createStore';
import Routes from 'ui/routes/routes';
import Toaster from 'common/components/Toaster';
import theme from './theme';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Toaster />
          <Routes />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './views/App';

const rootEl = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NextApp = require('./views/App').default;
    ReactDOM.render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}

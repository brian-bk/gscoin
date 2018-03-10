import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './configureStore';
import registerServiceWorker from './registerServiceWorker';
import { loadAuthUser } from './actions/userActions';
import { loadOwnedWallet } from './actions/walletActions';
import './styles/index.css';

const store = configureStore();

store.dispatch(loadOwnedWallet());
store.dispatch(loadAuthUser());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { IntlProvider } from 'react-intl';
import Modal from 'react-modal';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { apolloClient } from './apollo';

import './index.css';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <IntlProvider locale="en">
        <App />
      </IntlProvider>
    </ApolloProvider>
  </React.StrictMode>,
  root,
);

Modal.setAppElement(root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

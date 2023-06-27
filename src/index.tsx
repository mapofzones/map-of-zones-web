import React from 'react';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import { GraphQLProvider } from 'providers/GraphQLProvider';
import { RestApiQueryProvider } from 'providers/RestApiQueryProvider';
import { api } from 'services/baseApi';
import { setupStore } from 'store/store';

import App from './App';
import reportWebVitals from './reportWebVitals';

const store = setupStore();

const rootHtmlElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootHtmlElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={api}>
        <GraphQLProvider>
          <RestApiQueryProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </RestApiQueryProvider>
        </GraphQLProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);

ReactModal.setAppElement(rootHtmlElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

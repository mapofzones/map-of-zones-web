import React from 'react';

import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import { RestApiQueryProvider } from 'providers/RestApiQueryProvider';

import App from './App';
import reportWebVitals from './reportWebVitals';

const link = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_HTTP_URI });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const rootHtmlElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootHtmlElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <RestApiQueryProvider>
          <App />
        </RestApiQueryProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

ReactModal.setAppElement(rootHtmlElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

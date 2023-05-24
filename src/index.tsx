import React from 'react';

import ReactDOM from 'react-dom/client';
import ReactModal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import { GraphQLProvider } from 'providers/GraphQLProvider';
import { RestApiQueryProvider } from 'providers/RestApiQueryProvider';

import App from './App';
import reportWebVitals from './reportWebVitals';

const rootHtmlElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootHtmlElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GraphQLProvider>
        <RestApiQueryProvider>
          <App />
        </RestApiQueryProvider>
      </GraphQLProvider>
    </BrowserRouter>
  </React.StrictMode>
);

ReactModal.setAppElement(rootHtmlElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

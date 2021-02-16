import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './reduxStore/index';

ReactDOM.render(
  
  <Provider store={store}>
    <App />
    </Provider>

,
  document.getElementById('root')
);

reportWebVitals();

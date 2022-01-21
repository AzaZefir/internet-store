// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// import 'bootstrap/dist/css/bootstrap.css';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

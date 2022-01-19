import React from 'react';
import Header from './components/header';
import Goods from './components/goods';
import store from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Goods />
    </Provider>
  )
}

export default App;

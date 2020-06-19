import React from 'react';
import './App.less';
import Provider from './context';
import Navigation from './navigation';
import Header from './components/Header';

const App = () => (
  <Provider>
    <Header />
    <Navigation/>
  </Provider>
);

export default App;

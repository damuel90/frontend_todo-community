import React from 'react';
import './App.less';
import Provider from './context';
import Navigation from './navigation';

const App = () => (
  <Provider>
    <Navigation/>
  </Provider>
);

export default App;

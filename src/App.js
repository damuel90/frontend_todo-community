import React from 'react';
import Provider from './context';
import Navigation from './navigation';
import './App.less';

const App = () => (
  <Provider>
    <Navigation/>
  </Provider>
);

export default App;

import React, { useReducer } from 'react';
import './App.less';
import Provider from './context';
import Navigation from './navigation';
import reducers from './reducers';

const App = () => {
  const store = useReducer(reducers, {}, reducers);
  
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
};

export default App;

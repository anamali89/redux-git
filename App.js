// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/themeredux/store';
import ThemeToggle from './src/themeredux/ThemeToggle';
const App = () => {
  return (
    <Provider store={store}>
     <ThemeToggle/>
    </Provider>
  );
};

export default App;

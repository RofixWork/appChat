import React from 'react';
import ContextProvider from "./Global/Context";
import Home from './layout/Home';
import './styles/App.scss'
function App() {
  return (
    <ContextProvider>
      <Home/>
    </ContextProvider>
  );
}

export default App;

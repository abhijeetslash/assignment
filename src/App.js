import React from 'react';
import './App.css';

import Layout from './containers/layout/Layout';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout />
    </div>
  );
}

export default App;

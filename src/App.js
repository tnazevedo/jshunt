import React from 'react';
import api from './services/api';
import Routes from './routes';

import Header from './components/Header';
import Main from './pages/main';
import './styles.css';
const App = () =>(
  <div className="App"> 
    <Header/>
    <Routes></Routes>
  </div>
);

export default App;

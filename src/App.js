import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SideBar from './components/Sidebar.js';

function App() {
  return (
    <div className="App">
      <Header /> 
      <SideBar />
      <h1>building looker mail</h1>
    </div>
  );
}

export default App;

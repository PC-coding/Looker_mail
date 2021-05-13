import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <div className='app_body'>
          <SideBar />
          {/* <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;

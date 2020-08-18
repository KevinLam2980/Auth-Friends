import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import PrivateRoute from './components/privateRoute'

import Login from './components/login'
import Home from './components/home'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/home' component={Home} />
        <Route path='/login' component={Login}/>
        <Route path='/' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;

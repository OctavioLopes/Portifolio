import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/home'


function App() {
  return (
      <Switch>
        <Route path="/home" component={ Home } />
        <Route exact path="/" render={ () => <Redirect to="/home" /> } />
      </Switch>
  );
}
export default App;
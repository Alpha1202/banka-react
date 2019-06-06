import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Right from './components/Right';

function App() {
  return (
    <>
    <Switch>
    <div className="wrapper">
    <Right />
    </div>
    </Switch>
    </>
  );
}

export default App;

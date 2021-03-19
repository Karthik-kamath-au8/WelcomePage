import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Task from './component/task';
import { Display } from './component/task2';

export default class App extends React.Component {

  render(){

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/' component={Task}/>
      <Route path='/task2' component={Display}/>
      </Switch>
      

    </div>
    </BrowserRouter>
  );
}
}



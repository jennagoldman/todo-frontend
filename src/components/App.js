import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AddToDoForm from './AddToDoForm';
import ToDoApp from './ToDoApp';



export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>toDONE!</h1>
        </header>
        <Router>
          <Switch>
            <Route path="/" component={ToDoApp} />
          </Switch>
        </Router>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import AddToDoForm from './AddToDoForm';
import ToDoApp from './ToDoApp';
import ToDoAppSignIn from './ToDoAppSignIn';

const isSignedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>
          <h1>toDONE</h1>
        </header>
        <Router>
          <Switch>
          <Route exact path='/' render={() => 
                isSignedIn() 
                    ? <ToDoApp />
                    : <Redirect to="signin" />
                } />
          <Route exact path="/signin" component={ToDoAppSignIn} />
          </Switch>
        </Router>
      </div>
    )
  }
}

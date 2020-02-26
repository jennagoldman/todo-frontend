import React, {  Component } from 'react';
import ToDoList from './ToDoList';
import { getToDos } from '../api-services';

export default class ToDoApp extends Component {
    state = {
        todos: []
      }
    
      componentDidMount = async() => {
        const todos = await getToDos();
        this.setState({ todos })
      }
    render() {
        return (
            <div>
                <ToDoList todos={this.state.todos} />
            </div>
        )
    }
}
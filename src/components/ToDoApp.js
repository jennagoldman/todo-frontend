import React, {  Component } from 'react';
import ToDoList from './ToDoList';
import { getToDos, addToDo, deleteToDo } from '../api-services';
import AddToDoForm from './AddToDoForm';
import request from 'superagent';

export default class ToDoApp extends Component {
    state = {
        todos: [],
        toDoToDelete: {}
      }
    
    componentDidMount = async() => {
        const todos = await getToDos();
        this.setState({ todos })
      }

    handleInput = (event) => {
        this.setState({ 
            todoInput: event.target.value
        })
    }
    
    handleClick = async() => {
        const newToDo = {
            id: Math.floor(Math.random()*100),
            description: this.state.todoInput,
            complete: false
        };

        const newToDos = [...this.state.todos, newToDo];

        this.setState({ todos: newToDos });

        await addToDo(newToDo);
    }

    // handleDelete = async() => {
    //     this.setState({
    //         toDoToDelete: this.props.todo
    //     })

    //     const id = this.state.toDoToDelete.id;

    //     await deleteToDo(id);
    // }


    render() {
        return (
            <div>
                <AddToDoForm 
                    todoInput={this.state.todoInput} 
                    handleClick={this.handleClick} 
                    handleInput={this.handleInput} 
                />
                <ToDoList 
                    todos={this.state.todos} 
                    handleDelete={this.handleDelete}  />
            </div>
        )
    }
}
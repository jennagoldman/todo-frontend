import React, {  Component } from 'react';
import ToDoList from './ToDoList';
import { getToDos, addToDo, deleteToDo, updateToDo } from '../api-services';
import AddToDoForm from './AddToDoForm';
// import request from 'superagent';

export default class ToDoApp extends Component {
    state = {
        todos: []
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
            // id: Math.floor(Math.random()*100),
            description: this.state.todoInput,
            complete: false
        };

        const newToDos = [...this.state.todos, newToDo];

        this.setState({ todos: newToDos });

        await addToDo(newToDo);
    }

    handleToggle = async(event) => {
        const toDoIdToUpdate = Number(event.target.id);

        const newToDos = this.state.todos.slice();

        const toDoToUpdate = newToDos.find(todo => todo.id === toDoIdToUpdate);
        toDoToUpdate.complete = !toDoToUpdate.complete;

        this.setState({ todos: newToDos });
        
        await updateToDo(toDoToUpdate);
    }

    handleDelete = async(event) => {
        const toDoToDelete = event.target.id;
        const todos = [...this.state.todos];
        todos.splice(this.state.todos.findIndex(todo => {
            return todo.id === toDoToDelete
        }), 1)

        this.setState({
            todos: todos
        })

        await deleteToDo(toDoToDelete);
    }

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
                    handleDelete={this.handleDelete} 
                    handleToggle={this.handleToggle}
                />
            </div>
        )
    }
}
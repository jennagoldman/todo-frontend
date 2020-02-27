import React, { Component } from 'react';
// import { deleteToDo } from '../api-services';

export default class ToDoItem extends Component {


    // handleDelete = async () => {
    //     await deleteToDo(this.props.todo.id);
    // }

    render() {
        return (
            <li>
                <div className="todo-item-div">
                    <span>{this.props.todo.description}</span>
                    <i 
                        className="far fa-trash-alt"
                        onClick={this.props.handleDelete} 
                        id={this.props.todo.id} 
                    >
                    </i>
                </div>
            </li>
        )
    }
}
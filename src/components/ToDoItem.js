import React, { Component } from 'react';

export default class ToDoItem extends Component {
    state = {
        todo: this.props.todo
    }

    componentDidMount() {
        

    }

    render() {
        return (
            <li>
                <div className="todo-item-div">
                    <span>{this.props.todo.description}</span>
                    <button 
                        className="delete-btn"
                        onClick={this.props.handleDelete} 
                    >
                        <i className="far fa-trash-alt"></i>
                    </button>
                </div>
            </li>
        )
    }
}
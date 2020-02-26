import React, { Component } from 'react';

export default class ToDoList extends Component {
    render() {
        return (
            <li>
                {this.props.todo.description}
            </li>
        )
    }
}
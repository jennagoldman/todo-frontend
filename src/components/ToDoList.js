import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => 
                        <ToDoItem todo={todo} />
                    )}
                </ul>
            </div>
        )
    }
}
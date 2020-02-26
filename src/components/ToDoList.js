import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {
    render() {
        return (
            <div className="list-container">
                <ul>
                    {this.props.todos.map(todo => 
                        <ToDoItem 
                            todo={todo} 
                            key={Math.floor(Math.random()*1000+1)} 
                            handleDelete={this.props.handleDelete} 
                        />
                    )}
                </ul>
            </div>
        )
    }
}
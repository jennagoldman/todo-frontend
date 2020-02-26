import React, { Component } from 'react';

export default class AddToDoForm extends Component {
    render() {
        return (
            <div className="form-container">
                <input 
                    value={this.props.todoInput} 
                    onChange={this.props.handleInput} 
                    placeholder="New to do" 
                />
                <button onClick={this.props.handleClick}>Add</button>
            </div>
        )
    }
}
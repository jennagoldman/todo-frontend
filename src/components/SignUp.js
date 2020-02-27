import React, { Component } from 'react';
import request from 'superagent';

export default class SignUp extends Component {
    state = {
        usernameSignUp: '',
        passwordSignUp: ''
    }

    handleSignUp = async () => {
        const signUp = await request.post(`http://https://enigmatic-meadow-92328.herokuapp.com/api/auth/signup`, {
            email: this.state.usernameSignUp,
            password: this.state.passwordSignUp,
        })

        localStorage.setItem('user', JSON.stringify(signUp.body));
    }

    render() {
        return (
            <div>
                <label>Email: </label>
                <input 
                    value={this.state.usernameSignUp} 
                    onChange={(e) => this.setState({ usernameSignUp: e.target.value})} 
                />
                <label>Password: </label>
                <input 
                    value={this.state.passwordSignUp} 
                    onChange={(e) => this.setState({ passwordSignUp: e.target.value})} 
                />
                <button onClick={this.handleSignUp}>
                    Sign Up
                </button>

            </div>
        )
    }
}
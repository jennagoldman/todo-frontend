import React, { Component } from 'react';
import request from 'superagent';

export default class SignUp extends Component {
    state = {
        usernameSignIn: '',
        passwordSignIn: ''
    }

    handleSignIn = async () => {
        const signIn = await request.post(`https://enigmatic-meadow-92328.herokuapp.com/api/auth/signin`, {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn,
        })
    
        localStorage.setItem('user', JSON.stringify(signIn.body));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <label>Email: </label>
                <input 
                    value={this.state.usernameSignIn} 
                    onChange={(e) => this.setState({ usernameSignIn: e.target.value})} 
                />
                <label>Password: </label>
                <input 
                    value={this.state.passwordSignIn} 
                    onChange={(e) => this.setState({ passwordSignIn: e.target.value})} 
                />
                <button onClick={this.handleSignIn}>
                    Sign In
                </button>

            </div>
        )
    }
}
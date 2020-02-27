import React, { Component } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

export default class ToDoAppSignIn extends Component {

    render() {
        return (
            <div>
                <SignUp />
                <SignIn />
            </div>
        )
    }
}
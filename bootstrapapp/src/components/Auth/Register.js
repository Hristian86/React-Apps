import React, { Component } from 'react';
import RegAuth from './RegAuth';
import { FormControl } from 'react-bootstrap';

export default class Register extends Component {

    render() {

        return (
            <div className="backgrounds">
            <h3 className="logo">Register</h3>
            <div className="container d-flex justify-content-center">
                    

                <form className="registerForm">

                    <h3>Username</h3>
                    <FormControl className="userInput" type="text" name="user" placeholder="username" />


                    <h3>Email</h3>
                    <FormControl className="userInput" type="email" name="email" placeholder="email" />

                    <h3>Password</h3>
                    <FormControl type="password" className="passwordInput" placeholder="password" name="password" />

                    <h3>Confirm password</h3>
                    <FormControl type="password" className="passwordInput" placeholder="confirm password" name="password" />

                    <h3></h3>
                    <input type="submit" value="Submit to register" className="btn btn-primary"/>

                </form>

                <RegAuth />
            </div>
            </div>
        )
    }
}
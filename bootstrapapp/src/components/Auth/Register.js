import React, { Component } from 'react';
import RegAuth from './RegAuth';
import { FormControl } from 'react-bootstrap';
import fire from '../FirebaseAuth/Config';
import { useHistory } from 'react-router';

export default class Register extends Component {


    signUpFunc = (e) => {
        e.preventDefault();
        const { history } = this.props;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const passwordConf = e.target.passwordConf.value;

        try {

            let error = document.getElementById('errors');
            error.innerHTML = "";
            if (password === passwordConf) {
                var userCreate = fire.auth().createUserWithEmailAndPassword(email, password)
                    .then(resp => console.log(resp))
                    .catch(err => console.log(err));

                setTimeout(function () {
                    history.push("/");
                }, 700)

            } else {
                let error = document.getElementById('errors');
                error.innerHTML = "Invalid Input";
            }
        } catch (e) {
            console.log(e);
        }
    }


    render() {

        return (
            <div className="backgrounds">
                <h3 className="logo">Register</h3>

                <h3 id="errors" className="text-danger text-center error"></h3>
                <div className="container d-flex justify-content-center">

                    <form className="registerForm" onSubmit={this.signUpFunc}>

                        <h3>Email</h3>
                        <FormControl className="userInput" type="email" name="email" placeholder="email" />

                        <h3>Password</h3>
                        <FormControl type="password" className="passwordInput" placeholder="password" name="password" />

                        <h3>Confirm password</h3>
                        <FormControl type="password" className="passwordInput" placeholder="confirm password" name="passwordConf" />

                        <h3></h3>
                        <input type="submit" value="Submit to register" className="btn btn-primary buttons" />

                    </form>

                </div>

            </div>
        )
    }
}
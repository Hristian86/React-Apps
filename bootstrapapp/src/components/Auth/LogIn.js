import React from 'react';
import { FormControl } from 'react-bootstrap';

const login = () => {

    return <div className="backgrounds">
        <h3 className="logo">Log in</h3>
        <div className="container d-flex justify-content-center">
            
            <form className="registerForm">
                
                <h3>Username</h3>
                <FormControl className="userInput" type="text" name="user" placeholder="username" />

                <h3>Password</h3>
                <FormControl type="password" className="passwordInput" placeholder="password" name="password" />

                <h3></h3>
                <input type="submit" value="Log in" className="btn btn-primary" />

            </form>

        </div>
    </div>
}

export default login
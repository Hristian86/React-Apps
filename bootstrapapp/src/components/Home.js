import React, { Component, useReducer, useCallback, useContext, createContext } from 'react';
import Cards from './Cards/Cards';
import fire from './FirebaseAuth/Config';
import login from './Auth/LogIn';

export const UserContext = createContext({ user: null });

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}

        this.authListener = this.authListener.bind(this);
    }

    async componentDidMount() {
        await this.authListener();
    }


    async authListener() {
       const users = await fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    user: user
                });
            } else {
                this.setState = null;
            }
       });

        return users;
    }

    render() {
        let usr = this.state.user;
        if (usr) {

        }

        return (
                <div>
                {this.state.user ? (<Cards />) : <div>Not loged</div>}

                <div className="spacer"></div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Home from './components/Home';
import Register from './components/AuthO/Register';
import login from './components/AuthO/LogIn';
import fire from './components/FirebaseAuth/Config';
import Logout from './components/AuthO/Logout';
import Manage from './components/Auth/Manage';
import Hcard from './components/HearthStoneCards/HearthstoneCard';
//import PrivateRoute from './components/Auth/PrivateRoute';

var useraaa = [];

export default class App extends Component {
    constructor(props) {
        super(props)


        this.state = {}

        this.authListener = this.authListener.bind(this);
    }

    async componentDidMount() {
        await this.authListener();
        await authListener();
    }


    async authListener() {
        const users = await fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    user: user
                });
                useraaa = user;
            } else {
                this.setState = null;
            }
        });

        //<Route path="/About" component={About}>
        //</Route>

        return users;
    }

    render() {
        //if (!this.state.user) {
        //    return (
        //        <div><em>Loaging...</em></div>
        //    )
        //}

        return (
            <div className="App">
                <header className="App-header">
                    <Layout>
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Home}>
                                </Route>

                                <Route path="/components/HearthStoneCards/HearthstoneCard" component={Hcard}>
                                </Route>

                                <Route path="/AuthO/Register" component={Register}>
                                </Route>
                                <Route path="/AuthO/LogIn" component={login}>
                                </Route>
                                <Route path="/AuthO/Logout" component={Logout}>
                                </Route>
                                <Route path="/Auth/Manage" component={Manage}>
                                </Route>
                            </Switch>
                        </Router>

                    </Layout>

                </header>
            </div>
        );
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    var resut = authListener();
    var rs = { ...rest };
    var chek = false;
    resut.then(res => res);
    setTimeout(() => {
        console.log(useraaa);
        if (useraaa.email !== undefined) {
            return <Route {...rest} render={(props) => (
                chek ? <Component {...props} /> : <Redirect to="/Auth/LogIn" />
            )
            } />
        }
    }, 1000);

    if (rs !== undefined) {
        chek = true;
    }

    return <Route {...rest} render={(props) => (
        chek ? <Component {...props} /> : <Redirect to="/Auth/LogIn" />
    )
    } />
}

async function authListener() {
    let chek = false;
    const users = await fire.auth().onAuthStateChanged(user => {
        if (user) {
            chek = true;
        } else {
        }
    });
    return chek;
}
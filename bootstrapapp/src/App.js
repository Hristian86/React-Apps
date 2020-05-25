import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';


export default class App extends Component {
    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Layout>
                        <Router>
                            <switch>
                                <Route exact path="/" component={Home}>
                                </Route>

                                <Route path="/About" component={About}>
                                </Route>

                                <Route path="/Contact" component={Contact}>
                                </Route>
                            </switch>
                        </Router>

                    </Layout>

                </header>
            </div>
        );
    }
}
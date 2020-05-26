import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Link } from 'react-router-dom';
import About from './About';
import Register from './Auth/Register';
import LogIn from './Auth/LogIn';
import RegAuth from './Auth/RegAuth';
import Cards from './Cards/Cards';
import fire from './FirebaseAuth/Config';

export default class navbar extends Component {
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

    prevDef(e) {
        e.preventDefault();
    }

    render() {
        let cheks = false;
        let usr = this.state.user;
        if (usr) {
            cheks = true;
        } else {
            cheks = false;
        }

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" onClick={() => this.prevDef}>NOUP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Nav.Link href="/About" onClick={() => this.prevDef}>About</Nav.Link>
                        <Nav.Link href="/Contact" onClick={() => this.prevDef}>Contact</Nav.Link>

                    </Nav>
                    <Form inline className="mr-3">
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>

                    {cheks ? <div>Hello user</div> :
                        <Nav.Link href="/Auth/Register" className="text-info" onClick={() => this.prevDef}>Register</Nav.Link>}

                    {cheks ? <Nav.Link href="/Auth/Logout" className="mr-3 text-info" onSubmit={() => this.prevDef}>Log out</Nav.Link> : <Nav.Link href="/Auth/LogIn" className="mr-3 text-info" onClick={() => this.prevDef}>LogIn</Nav.Link>}

                </Navbar.Collapse>
            </Navbar>

        )
    }
}
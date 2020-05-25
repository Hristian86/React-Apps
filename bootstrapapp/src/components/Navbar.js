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

export default class navbar extends Component {

    prevDef(e) {
        e.preventDefault();
    }

    render() {
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
                    <Nav.Link href="/Auth/Register" className="text-info"  onClick={() => this.prevDef}>Register</Nav.Link>

                    <Nav.Link href="/Auth/LogIn" className="mr-3 text-info" onClick={() => this.prevDef}>LogIn</Nav.Link>

                </Navbar.Collapse>
            </Navbar>
            
            )
    }
}
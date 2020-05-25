import React, { Component } from 'react';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';


export default class Layout extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Container fluid>
                    {this.props.children}
                </Container>

            </div>
        )
    }
}
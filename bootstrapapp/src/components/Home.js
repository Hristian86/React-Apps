import React, { Component } from 'react';
import Cards from './Cards/Cards';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Cards />
                <div className="spacer"></div>
            </div>
            )
    }
}
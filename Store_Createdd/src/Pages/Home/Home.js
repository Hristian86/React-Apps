import React, { Component, useReducer, useCallback, useContext, createContext } from 'react';
import Cards from '../../components/Cards/Cards';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Tests from '../../components/Tests';
import propsy from '../../components/SendingProps';
import login from '../../components/AuthO/LogIn';
import getCookie from '../../components/Cookies/GetCookie';

export const UserContext = createContext({ user: null });

export default class Home extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            user: null,
            loading: false,
            dataAis: []
        }
        this.data = [];

        this.retriveData = this.retriveData.bind(this);
    }

    async componentDidMount() {
        await this.retriveData();
    }

    async retriveData() {
        try {
            const user = getCookie('user');
            if (user) {
                this.setState({
                    user: user
                });
            } else {
                this.setState = null;
            }
        } catch (e) {
            console.log(e);
        }

    }

    getDataFromStore = () => {
        return this.state.dataAis ? this.state.dataAis.map((data, index) => <tr key={index}>
            <td>{data.id}</td>
            <td>{data.createdOn}</td>
            <td>{data.subject}</td>
            <td>{data.userId}</td>
        </tr>) : null;
    }

    getDataFromFire = () => {
        return this.state.dataAis ? this.state.dataAis.map((data, index) =>
            <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.lastName}</td>
                <td>{data.age}</td>
                <td>{data.token}</td>
            </tr>
        ) : null;
    }

    logetUserChek = () => {

    }

    render() {
        //let usr = this.state.user;
        //let fireQuery = new fireDB();
        
        return (
            <div>
                {propsy(this.state.user)}        
                {this.state.user ? <Tests name={this.state.user.displayName} /> : <Tests name={""} />}

                {this.state.user ? (<Cards />) : <div className="text-center load">Not logged</div>}
                    

                {this.state.user ? <div className="d-flex justify-content-between">

                    <button onClick={this.retriveData} className="btn btn-primary text-center">Read</button>

                </div> : null}

                {this.state.user ? <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Last name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getDataFromStore()}
                    </tbody>
                </table> : null}

                <div className="spacer"></div>
            </div>
        )
    }
}
import React, { Component, useReducer, useCallback, useContext, createContext } from 'react';
import Cards from './Cards/Cards';
import fire from './FirebaseAuth/Config';
import login from './Auth/LogIn';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import fireDB from './FirebaseDB/fireDB';
import dataS from './Cards/dataS';

export const UserContext = createContext({ user: null });

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {}
        this.data = [];

        this.authListener = this.authListener.bind(this);
        this.retriveData = this.retriveData.bind(this);
    }

    async componentDidMount() {
        await this.authListener();
        await this.retriveData();
    }

    async authListener() {
        const users = await fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    user: user,
                    loading: true,
                    dataAis: []
                });
            } else {
                this.setState = null;
            }
        });

        return users;
    }

    async retriveData() {
        try {

            let fireQuery = new fireDB();
            let data = await fireQuery.readFromDb();

            this.data = data;

            this.setState({ dataAis: await data });

            //let dataPlace = document.getElementById('dataId');
            //dataPlace.innerHTML = "";
            //for (var i = 0; i < data.length; i++) {
            //    let name = data[i].name;
            //    let lastName = data[i].lastName;
            //    let age = data[i].age;

            //    dataPlace.innerHTML += `Name is ${name} with last name ${lastName} at age ${age} <br />`;

            //}
        } catch (e) {
            console.log(e);
        }

    }

    render() {
        let usr = this.state.user;
        let fireQuery = new fireDB();

        return (
            <div>
                {this.state.user ? (<Cards />) : <div className="text-center">Not logged</div>}

                {this.state.user ? <div className="d-flex justify-content-between">

                    <button onClick={fireQuery.createDataDb} className="btn btn-primary text-center">Seed</button>

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
                        {this.state.dataAis ? this.state.dataAis.map((data, index) =>
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.lastName}</td>
                                <td>{data.age}</td>
                            </tr>
                        ) : null}
                    </tbody>
                </table> : null}

                <div className="spacer"></div>
            </div>
        )
    }
}
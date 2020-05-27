import React, { Component } from 'react';
import fire from '../FirebaseAuth/Config';

const firebaseURL = "https://full-stack-app-a2668.firebaseio.com/.json";
const fireDbs = "https://full-stack-app-a2668.firebaseio.com/TestDB/EJxVkda1X8dPQU3KhHuO.json";

export default class fireDB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            getData: [],
            loading: true
        }

        this.readFromDb = this.readFromDb.bind(this);
        this.createDataDb = this.createDataDb.bind(this);
    }

    async readFromDb() {

        const currUser = fire.auth().currentUser;

        if (currUser) {
            const token = currUser.refreshToken;

            const responce = await fetch(fireDbs, {
                "method": "GET",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(x => console.log('Login is required'));

            const data = await Object.values(responce);

            try {

            } catch (e) {
                console.log(e);
            }

            return data;
        }

    }

    async createDataDb() {

        let payload = {
            "id": "1234",
            "lastName": "icakov",
            "name": "icaka",
            "age": "33"
        }

        const currUser = fire.auth().currentUser;

        if (currUser) {
            const token = currUser.refreshToken;

            const responce = await fetch(fireDbs, {
                "method": "POST",
                "headers": {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(payload)
            }).then(res => res.json()).catch(x => console.log('Login is required'));

            console.log(responce);

            const data = await responce;
            try {
                this.setState = ({ getData: data, loading: false });
            } catch (e) {
                console.log(e);
            }
        }
    }
}
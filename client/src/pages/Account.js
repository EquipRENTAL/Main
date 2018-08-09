import React, { Component } from "react";
/* import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar" */

// THIS ROUTE SHOULD ONLY BE ACCESSIBLE BY CURRENTLY LOGGED IN USERS
// ROUTE THIS IN THE BACKEND WITH res.redirect("/account") !!!!!!
// need to pass state information to edit page via PROPS :O

class Account extends Component {
    state = {
        user_id: '',//this should be an object id, hopefully
        username: '',
        email: '',
        password: '',
        phone: '',
        zip: '',
        items: []// might need to just give this dummy data....
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    ComponentDidMount () {
        console.log("component mounted, calling API for data...");
    }

    loadUserData = event => {
        console.log("calling user data...");
        // this might need to be changed around like the card template to deal with asynchronous data.
    }

    loaditems = user_id => {
        console.log("calling user items...");
        // this will call the backend for any items associated with the current user. 
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <p className="text-center"> My account </p>
                        <p><a href="/logout">Log Out?</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p><a href='/account/edit'>Edit?</a></p>
                        {/* account information here  */}
                        <p>username: {this.username}</p>
                        <p>email: {this.email}</p>
                        <p>phone: {this.phone}</p>
                        <p>zip: {this.zip}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Posts</p>
                        {this.state.items.map(item => {
                            return(
                                `<p>item information here</p>`
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;
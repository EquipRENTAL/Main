import React, { Component } from "react";
/* import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar" */

class Account extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        phone: '',
        zip: '',
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="container">
                <div className="col">
                    <p className="text-center"> My account </p>
                    <p><a href="/logout">Log Out?</a></p>
                </div>

            </div>
        )
    }
}





export default Account;
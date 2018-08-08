import React, { Component } from "react";

class Signup extends Component {
    state = {
        email: '',
        password: '',
        verify: '',
        username: '',
        phone: '',
        zip: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        //console.log("this is being set in state" ,this.state);
    };

    /* handleFormSubmit = e => {;
        e.preventDefault();
        console.log("email being sent is: ", this.state.email)
        console.log("password being sent is: ", this.state.password);
        let email = this.state.email;
        let password = this.state.password;
        axios.post('http://localhost:3001/signup', {email, password});
    } */


    render() {
        return (
            <div className="container">
                <div className="col">
                    <h1><span className="fa fa-sign-in"></span> Signup</h1>
    
                    
                        {/* if (message.length > 0) {
                            return (<div className="alert alert-danger">message from database here</div>);
                        } */}
                    
    
                    {/* SIGNUP form */}
                    <form action="http://localhost:3001/signup" method="post">
                        
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="text"
                                className="form-control" 
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange} 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label>Username</label>
                            <input 
                                type="username" 
                                className="form-control" 
                                name="username"
                                value={this.state.username}
                                onChange={this.handleInputChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input 
                                type="phone" 
                                className="form-control" 
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleInputChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label>Zip Code</label>
                            <input 
                                type="zip" 
                                className="form-control" 
                                name="zip"
                                value={this.state.zip}
                                onChange={this.handleInputChange} 
                            />
                        </div>
    
                        <button type="submit" className="btn btn-warning btn-lg" /* onClick= {this.handleFormSubmit} */>Signup </button>
                    </form>
    
                    <hr />
    
                    <p>Already have an account? <a href="/login">Login</a></p>
                    <p>Or go <a href="/">home</a>.</p>
    
                    <div className="text-center">
                        <p>A demo by <a href="http://scotch.io">Scotch</a>.</p>
                        <p>Visit the <a href="http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local">tutorial</a>.</p>
                    </div>
    
                </div>
            </div>
        );
    }
    
}

export default Signup;
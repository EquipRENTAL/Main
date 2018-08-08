import React, { Component } from "react";

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    render() {
        return (
            <div className="logincontainer">
                <div className="col">
                    <h3><span className="fa fa-sign-in"></span> Login</h3>



                    {/* <!-- LOGIN FORM --> */}
                    <form action="http://localhost:3001/login" method="post">
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange} 
                            />


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

                            <button type="submit" className="btn btn-warning btn-lg">Login</button>
                        </div>
                    </form>

                    {/* <hr />

                    <p>Need an account? <a href="/signup">Signup</a></p>
                    <p>Or go <a href="/">home</a>.</p>

                        <div className="text-center">
                            <p>A demo by <a href="http://scotch.io">Scotch</a>.</p>
                            <p>Visit the <a href="http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local">tutorial</a>.</p>
                        </div> */}

                </div>
            </div>
        );
    }
}
    


export default Login;
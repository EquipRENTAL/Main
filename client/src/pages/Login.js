import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"

const Login = props =>
    <div>
        {/* <title>Node Authentication</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css"> */}
        <div class="container">
            <div class="col-sm-6 col-sm-offset-3">

                <h1><span class="fa fa-sign-in"></span> Login</h1>


                {/* <!-- LOGIN FORM --> */}
                <form action="/login" method="post">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" name="email" />


                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" />
                        </div>

                        <button type="submit" class="btn btn-warning btn-lg">Login</button>
                    </div>
                </form>

                <hr />

                <p>Need an account? <a href="/signup">Signup</a></p>
                <p>Or go <a href="/">home</a>.</p>

                <div class="text-center">
                    <p>A demo by <a href="http://scotch.io">Scotch</a>.</p>
                    <p>Visit the <a href="http://scotch.io/tutorials/javascript/easy-node-authentication-setup-and-local">tutorial</a>.</p>
                </div>

            </div>
        </div>
    </div>


export default Login;
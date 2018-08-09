import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

// i changed this to a component since I need to be able to pass stuff through it.

class Navbar extends Component {   
    state = {
        history: ''
    }

    getHistory () {
        console.log("idk if i need a method to import history, here just in case");
    }
    
    componentDidMount () {
        console.log("Navbar mounted");
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-dark">
                    <div className="info-section">
                        <Link style={{ textDecoration: 'none' }} className="logo" to="/home">EquipRENT</Link>
                    </div>
                    <div className="browse">
                        <Link style={{ textDecoration: 'none' }} className="navLinks" to="/categories">Browse</Link>
                    </div>
                    <div className="post">
                        <Link style={{ textDecoration: 'none' }} className="navLinks" to="/post">Post Item</Link>
                    </div>
                    <div className="login">
                        <Link style={{ textDecoration: 'none' }} className="navLinks" to="/login">Login/Create User</Link>
                    </div>
                    <div className="account">
                        <Link style={{ textDecoration: 'none' }} className="navLinks" to="/account">My Account</Link>
                    </div>
                </nav>
            </div>
        )
    }  
    
}

// moved old a href's here 
/* */
/* <a href="/home" style={{ textDecoration: 'none' }}><h1 className="logo">EquipRENT</h1></a> */
/* <a href="/categories" style={{ textDecoration: 'none' }} className="navLinks"><p>Browse</p></a> */    
/* <a href="/post" style={{ textDecoration: 'none' }} className="navLinks"><p>Post</p></a> */
/* <a href="/login" style={{ textDecoration: 'none' }} className="navLinks"><p>Login/Create User</p></a> */
/* <a href="/account" style={{ textDecoration: 'none' }} className="navLinks"><p>My Account</p></a> */

export default Navbar;
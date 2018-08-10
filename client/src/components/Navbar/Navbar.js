import React, { Component } from "react";
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
    
    // <Link /> does not link to the backend...

    render() {
        return(
            <div>
                <nav className="navbar navbar-dark">
                    <div className="info-section">
                        <a href="/home" style={{ textDecoration: 'none' }}><h1 className="logo">EquipRENT</h1></a>
                    </div>
                    <div className="browse">
                        <a href="/categories" style={{ textDecoration: 'none' }} className="navLinks"><p>Browse</p></a>
                    </div>
                    <div className="post">
                        <a href="/post" style={{ textDecoration: 'none' }} className="navLinks"><p>Post</p></a>
                    </div>
                    <div className="login">
                        <a href="/login" style={{ textDecoration: 'none' }} className="navLinks"><p>Login/Create User</p></a>
                    </div>
                    <div className="account">
                        <a href="/account" style={{ textDecoration: 'none' }} className="navLinks"><p>My Account</p></a> 
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
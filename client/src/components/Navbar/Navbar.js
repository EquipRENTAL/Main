import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = props =>
   <div>
            <nav className="navbar navbar-dark bg-success">
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
                    <a href="/account" style={{ textDecoration: 'none' }} className="navLinks"><p>My account</p></a>
                </div>
            </nav>
        </div>

    



        {/* <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="">Find</span>
            </div>

            <div>
                <input type="text" class="form-control"></input>
            </div> */}


        {/* THIS is the Google Maps Portion.

                    <div> 
                        <body onload="initialize()">
                            <div id="locationField">
                                <input id="autocomplete" class="controls" type="text"  placeholder="Enter a location"> 
                            </div> 
                            <div id="map"></div>
                        <script src='google-map.js'></script>
                        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA16l5HP5G1MyIsuiQ0BEl_xaQHcPYrRIY&libraries=places"></script>
                        </body>

                    </div> */}


        {/* This is the SEARCHBAR:
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Search!</button>
            </div> */}
        {/* 
        </div> */}
 


export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"

const Camping = props =>

    <div>
        <Navbar />

        <div class="container">
            <h1> Camping </h1>

            <h5> Browse by Categories </h5>
            <ul> 
                <a href="./Tent"><p>Tent</p></a>
                <a href="./sleeping"><p>Sleeping Accessories</p></a>
                <a href="./coolers"><p>Coolers</p></a>
                <a href="./backpacks"><p>Backpacks</p></a>
                <a href="./cooking"><p>Camp Cooking Equipment</p></a>
                <a href="./heater"><p> Portable Heaters</p></a>
            </ul> 

            <h5> Browse by Users </h5>
            <ul>
                <p>Mockuser_1</p>
                <p>Mockuser_2</p>
                <p>Mockuser_3</p>
                <p>Mockuser_4</p>
                <p>Mockuser_5</p>
            </ul>

        

        </div>
    </div>




export default Camping;
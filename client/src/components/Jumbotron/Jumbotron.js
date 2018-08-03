import React from "react";
import { Link } from "react-router-dom";
import "./Jumbotron.css"

const Jumbotron = () =>

    <div className="jumbotron" id="jumbotron">
        <h1 className="display-4">(props.itemName)</h1>

        <img src="asdf" />
       
        <hr className="my-4" />

         <p className="lead">(props.itemDescription)</p>
        <p className="lead">(props.itemPrice)</p>


        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            
    </div>

export default Jumbotron;



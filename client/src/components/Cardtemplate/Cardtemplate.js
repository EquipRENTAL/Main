import React from 'react';
//import "./Cardtemplate.css"

const Cardtemplate = props => (
    <li className = 'Cardtemplate'>
        <img src = {props.url} alt = "" />
        <p> <strong>Item</strong>: {props.title} </p>
        <p> <strong>Owner</strong>: {props.user} </p>
        <p> <strong>Description</strong>: {props.description} </p>
    </li>
);

export default Cardtemplate;
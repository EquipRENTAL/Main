import React from 'react';

const Cardtemplate = props => (
    <li className = 'Cardtemplate'>
        <img src = {props.url} alt = "" />
        <p> {props.title} </p>
        <p> Sold by: {props.user} </p>
        <p> {props.description} </p>
    </li>
);

export default Cardtemplate;
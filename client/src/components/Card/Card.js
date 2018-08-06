import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";
import Cardtemplate from "../Cardtemplate/Cardtemplate";

const Card = props => {

    const results = props.data;
    let itemMap = results.map(item =>
        <Cardtemplate url={item.image} title={item.title} user={item.user} description={item.description} />

    );

    return ([
        <div>
            <ul className="gif-list">
                {itemMap}
            </ul>
        </div>

    ]);
}

export default Card;


import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"
import API from "../utils/API";
import Card from "../components/Card/Card"




class Page extends Component {
    state = {
        items: []
    };

    componentDidMount() {
        this.loadItems()
    };


    loadItems() {
        API.getItems()
            .then(res =>
                this.setState({ items: res.data })
            )
            .catch(err => console.log("this is an err", err));
    };

    render() {
        console.log("this is items[0]", this.state.items[0])
      
        return (

    
    <div>

        <div className="container">
            <h1> Camping </h1>
            <div>
                <Card data={this.state.items} />
            </div>
    
        </div>
    </div>


        )}
}

export default CampingItem;
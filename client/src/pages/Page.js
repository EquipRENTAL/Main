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
        console.log("Will Mount")
        this.loadItems()
    };


    loadItems() {
        API.getItems()
            .then(res =>
                this.setState({ items: res.data })
            )
            .catch(err => console.log(err));
    };

    imgFunction() {
        if (this.state.items === null) {
            // Render loading UI...
            console.log("data is not ready!")
            return(
                <p>data not ready!</p>
            );
            this.loadItems();
        } else {
            console.log(this.state.items[0])
            return(<img src= {this.state.items["image"]} />)
        }
    }


    render() {
        console.log("Categories state", this.state.items)
        console.log(this.state.items[0])
        return (

    
    <div>
        <Navbar />

        <div className="container">
            <h1> Camping </h1>

            {/* <Card name="" /> */}

         
            
            {/* <p>{JSON.stringify(this.state.items[0])}</p> */}
            {this.imgFunction()}
        

        </div>
    </div>


        )}
}

export default Page;
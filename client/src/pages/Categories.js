import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar"
import { Link } from "react-router-dom";
import camping from '../imgs/camping.jpeg';
import sporting from '../imgs/sporting.jpeg';
import tools from '../imgs/Tools.jpeg';
import water from '../imgs/water.jpeg';
import API from "../utils/API";


class Categories extends Component {
    state = {

    };

    componentDidMount() {
        console.log("Categories componentDidMount")
        this.loadItems();

    };


    loadItems() {
        API.getItems()
            .then(res =>
                this.setState({ items: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        console.log("Categories render")
        console.log("Categories props", this.props)
        console.log("Categories state", this.state)
        return (
            <div>
                <Navbar />
                {/* <h1>CategoryName: {this.props.params.categoryName}</h1> */}


                <div class="container">
                    <h1> Shop by Categories: </h1>






                    
                 <div>
                        <a href="/camping"><h2> Camping </h2> </a>
                    </div>
                    <div>
                        <div>
                            <a href="/camping"><img src={camping} alt="camping" className="images" /> </a>

                        </div>

                    </div>



                    <div>
                        <a href="/sporting"><h2> Sporting Goods </h2> </a>
                    </div>
                    <div>

                        <a href="/sporting"><img src={sporting} alt="sporting" className="images" /> </a>

                    </div>



                    <div>
                        <a href="/water"><h2> Nautical </h2> </a>
                    </div>
                    <div>
                        <a href="/water"><img src={water} alt="water" className="images" /> </a>

                    </div>

                    <div>
                        <a href="/tools"><h2> Tools </h2> </a>
                    </div>
                    <div>
                        <a href="/tools"><img src={tools} alt="tools" className="images" /> </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default Categories;

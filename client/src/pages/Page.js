import React, { Component } from "react";
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
        console.log('this is the categyr', this.props.match.params.category)
        const category = this.props.match.params.category;
        API.getItems(category)
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
            {/* <h3> {this.props.match.params.category} </h3> */}
            <div>
                <Card data={this.state.items} />
            </div>
    
        </div>
    </div>


        )}
}

export default Page;
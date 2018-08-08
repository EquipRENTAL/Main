import React, { Component } from "react";
import "./Post.css"
import API from "../utils/API";

class Post extends Component {

    state = {
        user: "hello",
        itemName: "",
        category: "",
        description: "",
        image: "",
        message: '',
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        console.log("This is typing in an input field - being registered in the console " + this.setState[name]);
        console.log("description sent is: ", this.state);

    }


    handlePostFormClick = e => {

        let userdata = {
            user: this.state.user,
            category: this.state.category,
            title: this.state.itemName,
            description: this.state.description,
            image: this.state.image,
            // date: Date.now(),
        }

        e.preventDefault();
        console.log("click registered");
        console.log("itemName sent is: ", this.state.itemName);
        console.log("category sent is: ", this.state.category);
        console.log("description sent is: ", this.state.description);
        console.log("image sent is: ", this.state.image);
        console.log("this is userdata", userdata);
        API.saveItems(userdata)
            .then(res => {
                console.log("Successfully execute POST route");
                console.log("user data in the POST route", userdata);
                this.setState({
                    message: 'You successfully posted your item.',
                });
            });
}


    render() {
        return (
            <div>
                <div className="postcontainer">
                    <form>
                        <h3>Post your item!</h3>
                        {/* <h1>{this.state.message}</h1> */}
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Name your item</label>

                        <input
                            type="text"
                            id="defaultFormRegisterNameEx"
                            name="itemName"
                            className="form-control"
                            value={this.state.itemName}
                            onChange={this.handleInputChange}
                        />
                        <br />
                        <div className="form-group">
                            <label for="exampleFormControlSelect1">Category of your item</label>
                            <select
                                name="category"
                                value={this.state.category}
                                onChange={this.handleInputChange}
                                className="form-control" id="exampleFormControlSelect1">
                                <option></option>
                                <option>Camping</option>
                                <option>Sporting Goods</option>
                                <option>Nautical</option>
                                <option>Tools</option>
                            </select>
                        </div>
                        <br />
                        <div className="form-group">
                            <label
                                for="exampleFormControlTextarea1"
                            >

                                Add a description</label>


                            <textarea
                                className="form-control" id="exampleFormControlTextarea1"
                                rows="3"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleInputChange}></textarea>
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="exampleFormControlFile1">Attach a photo of your item
                    </label>

                            <input
                                type="text"
                                className="form-control-file" id="exampleFormControlFile1"
                                name="image"
                                value={this.state.image}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <br />
                        <div className="text-center mt-4">
                            <button
                                className="btn btn-unique"
                                type="submit"
                                onClick={this.handlePostFormClick}>

                                Post your item!!</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Post;

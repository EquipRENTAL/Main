import React, { Component } from "react";
import Cardtemplate from "../components/Cardtemplate/Cardtemplate"
/* import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar" */

// THIS ROUTE SHOULD ONLY BE ACCESSIBLE BY CURRENTLY LOGGED IN USERS
// ROUTE THIS IN THE BACKEND WITH res.redirect("/account") !!!!!!
// need to pass state information to edit page via PROPS :O

class Account extends Component {
    state = {
        user_id: '',//this should be an object id, hopefully
        username: 'Michael R',
        email: 'mfeliperod@outlook.com',
        password: '',
        phone: '8184381289',
        zip: '94704',
        items: [{
            user: "Michael R.", 
            category: "Camping",
            title: "Sky Blue Tent",
            description: "Comfortable for 2-4 people. Plus it's easy to spot this bright blue tent.",
            image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/campTent.jpg",
          },
          {
            user: "Michael R.", 
            category: "Camping",
            title: "Multi-Pod Tent",
            description: "Great for camping with a group. Cool setup with 3 separate Pod Tents.",
            image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/podTent.jpg",
          },
          {
            user: "Michael R.", 
            category: "Camping",
            title: "Sturdy Cooler",
            description: "Durable Igloo Cooler that keeps your stuff colder longer.",
            image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/coolerIgloo.jpg",
          },
          {
            user: "Michael R.", 
            category: "Sporting",
            title: "Jumbo Jenga",
            description: "Jumbo version of the classic Jenga game.",
            image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/jumboJenga.jpg",
          },
          {
            user: "Michael R.", 
            category: "Sporting",
            title: "Franklin Ladderball",
            description: "Fun to play, easy to assemble, and lightweight to boot.",
            image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/ladderball2.jpg",
          },
          {
            user: "Michael R.", 
            category: "Nautical",
            title: "Kayaks",
            description: "Take this pair of red kayaks (and paddles) with you next time you go the beach or lake.",
            image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/kayaksRed.jpg",
          },
          {
            user: "Michael R.", 
            category: "Nautical",
            title: "Bodyboards",
            description: "Does surfing sound too initmidating? Try bodyboarding instead. Very beginner-friendly.",
            image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/bodyboards.jpg",
          },
          {
            user: "Michael R.", 
            category: "Tools",
            title: "Compass",
            description: "Take this with you so that you won't get lost, even when there's no reception!",
            image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/compass.jpg",
          },
          {
            user: "Michael R.", 
            category: "Tools",
            title: "Hiking Sticks",
            description: "Use these to help you on your hike.",
            image: "https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/hikingSticks.jpg",
          },
        ]// might need to just give this dummy data....
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    ComponentDidMount () {
        console.log("component mounted, calling API for data...");
    }

    loadUserData = event => {
        console.log("calling user data...");
        // this might need to be changed around like the card template to deal with asynchronous data.
    }

    loaditems = user_id => {
        console.log("calling user items...");
        // this will call the backend for any items associated with the current user. 
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center">
                        <h3> My Account </h3>
                        <p ><a href="/logout">Log Out</a></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p><a href='/account/edit'>Edit</a></p>
                        {/* account information here  */}
                        <p>username: {this.state.username}</p>
                        <p>email: {this.state.email}</p>
                        <p>phone: {this.state.phone}</p>
                        <p>zip: {this.state.zip}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p>Posts</p>
                        {this.state.items.map(item => {
                            return(
                                <div>
                                    <p>{item.category}</p>
                                    <Cardtemplate url={item.image} title={item.title} description={item.description} user={item.user} />
                                    
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Account;
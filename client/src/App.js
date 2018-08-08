import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Categories from "./pages/Categories";
import About from "./pages/About";
import Home from "./pages/Home";
import Tent from "./pages/Tent";
// import Confirmation from "./pages/Confirmation"
import Account from "./pages/Account";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Page from "./pages/Page";
import Chat from "./components/Chat/Chat";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar/Navbar";
import './App.css';

// Navbar is in every component, should only be HERE
// Navbar should link to the given routes in this file
// When clicking a link, the page should render the component under the navbar
// basically the same but cleaner.


class App extends Component {

    state = {
        date: new Date(),
        isLoggedin: null
    }

    handleSelect(date) {
        console.log(date);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar/>
                    <Switch>   
                        <Route exact path="/categories" component={Categories} />
                        <Route exact path="/items/:category" component={Page} />
                        <Route exact path="/tent" component={Tent} />  
                        {/* <Route exact path="/Confirmation" component={Confirmation} /> */}
                        <Route exact path="/account" component={Account} />
                        <Route exact path="/post" component={Post} />
                        <Route exact path="/about" component={About} /> 
                        <Route exact path="/login" component={Login} /> 
                        <Route exact path="/page" component={Page} />
                        <Route exact path="/signup" component={Signup} />  
                        <Route exact path="/chat" component={Chat} />
                        <Route exact path="/" component={Home} />  
                        <Route exact path="/home" component={Home} />
                    </Switch> 
                </div>
            </Router>
        )
    }
}

export default App;

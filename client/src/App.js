import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Categories from "./pages/Categories";
import About from "./pages/About"
import Home from "./pages/Home"
import Tent from "./pages/Tent"
// import Confirmation from "./pages/Confirmation"
import Account from "./pages/Account"
import Post from "./pages/Post"
import Login from "./pages/Login"
import Page from "./pages/Page"
import './App.css';


class App extends Component {

    state = {
        date: new Date(),
    }

    handleSelect(date) {
        console.log(date);
    }

    componentDidMount() {
    }

    render() {
        return (
        //   <div>
        //     {/* <NavTabs */}
        //       currentPage={this.state.currentPage}
        //       handlePageChange={this.handlePageChange}
        //     />
        //     {this.renderPage()}
        //   </div>
    
        <div>
                <Router>
                    <div>
    
                        {/* <Route exact path="/:categoryName" component={Categories} /> */}
    
                        
                        
                        
                        
                        <Route exact path="/categories" component={Categories} />
                        <Route exact path="/tent" component={Tent} />  
                        {/* <Route exact path="/Confirmation" component={Confirmation} /> */}
                        <Route exact path="/account" component={Account} />
                        <Route exact path="/post" component={Post} />
                        <Route exact path="/about" component={About} /> 
                        <Route exact path="/login" component={Login} /> 
                        <Route exact path="/page" component={Page} /> 
                        <Route exact path="/" component={Home} /> 
    
    
    
                    </div>
                </Router>
                </div>
        )}
}

export default App;
import React, { Component } from "react";
import API from "../utils/API";
import { Parallax} from 'react-parallax';
import Footer from "../components/Footer/Footer";
import '../App.css';

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
             


                <div>           
                    <div>
                        <p> <br/> </p>
                    </div>

                    <Parallax
                       blur={{ min: -10, max: 7 }}
                       bgImage={require('../imgs/campingDawn.jpg')}
                       bgImageAlt="camping"
                       strength={200}
                       >
                       <div>
                       <a href="/items/Camping" style={{ textDecoration: 'none' }}><h2> Camping </h2> </a>
                       </div>                      
                       <div style={{ height: '550px' }}/>
                     </Parallax>

                    <div>
                        <p> <br/> </p>
                    </div>

                    <Parallax
                       blur={{ min: -10, max: 7 }}
                       bgImage={require('../imgs/sportsCat.jpg')}
                       bgImageAlt="sporting"
                       strength={200}
                       >        
                        <div>
                        <a href="/items/Sporting" style={{ textDecoration: 'none' }}><h2> Outdoor Sporting Goods </h2> </a>
                        </div>              
                       <div style={{ height: '550px' }} />
                     </Parallax>

                    <div>
                        <p> <br/> </p>
                    </div>

                    <Parallax
                       blur={{ min: -10, max: 7 }}
                       bgImage={require('../imgs/nauticalCat.jpg')}
                       bgImageAlt="water"
                       strength={200}
                       >                
                        <div>
                        <a href="/items/Nautical" style={{ textDecoration: 'none' }}><h2> Nautical </h2> </a>
                        </div>      
                       <div style={{ height: '550px' }} />
                     </Parallax>

                    <div>
                        <p> <br/> </p>
                    </div>


                    <Parallax
                       blur={{ min: 0, max: 0 }}
                       bgImage={require('../imgs/toolsCat.jpg')}
                       bgImageAlt="tools"
                       strength={200}
                       >     
                        <div>
                        <a href="/items/Tools" style={{ textDecoration: 'none' }}><h2> Tools </h2> </a>
                        </div>                 
                       <div style={{ height: '550px' }} />
                     </Parallax>

                     <Footer />

                </div>
            </div>
        )
    }
}

export default Categories;
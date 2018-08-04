import React, { Component } from "react";
import { Parallax} from 'react-parallax';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Summary from "../components/Summary/Summary";
import Items from "../components/Items/Items";

const Home = props =>
               <div>
                   <Navbar />
                   <div>
                        <p> <br/> </p>
                   </div>
                   <Parallax
                       blur={{ min: -10, max: 7 }}
                       bgImage={require('../imgs/campingGear.jpg')}
                       bgImageAlt="gear"
                       strength={500}
                       >
                           <div className="transbox">
                           <p>Ready for a new adventure?
                           <br />We have your gear right here.
                           <br />Just go!</p>
                           </div>                  
                       <div style={{ height: '650px' }} />
                   </Parallax>
                   <Summary />
                   <Parallax
                       blur={{ min: -10, max: 7 }}
                       bgImage={require('../imgs/campingSunset.jpg')}
                       bgImageAlt="sunset"
                       strength={150}
                       >
                           <div>
                           <h1>
                           <br />Take a look at what is available or
                           <br />post items that you want to rent out!
                            </h1>
                           </div>    
                       <div style={{ height: '175px' }} />
                   </Parallax>

                        <div>
                        <a href="/categories" style={{ textDecoration: 'none' }}><h3> Browse Items </h3> </a>
                        </div>
                   <Items />
                   <Parallax
                       blur={0}
                       bgImage={require('../imgs/nightCamping.jpg')}
                       bgImageAlt="night"
                       strength={500}
                       >
                           <div className="transbox3">
                           <p>"Equiprent allowed us to use things we needed without having to buy it.
                           <br />Very easy process overall. We had an awesome time camping at Lake Tahoe!"
                           <br /> -Tommy B.</p>
                           </div>
                       <div style={{ height: '650px' }} />
                   </Parallax>
                   <Footer />
               </div>

export default Home;
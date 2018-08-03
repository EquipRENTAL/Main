import React, { Component } from "react";
import { Parallax} from 'react-parallax';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Summary from "../components/Summary/Summary";
import Items from "../components/Items/Items";

const Home = props =>
               <div>
                   <Navbar />
                   <Parallax
                       blur={{ min: -10, max: 7 }}
                       bgImage={require('../imgs/campingGear.jpg')}
                       bgImageAlt="gear"
                       strength={500}
                       >
                           <div className="background">
                           <div className="transbox">
                           <p>Ready for a new adventure?
                           <br />We have your gear right here.
                           <br />Just go!</p>
                           </div>
                           </div>                        
                       <div style={{ height: '650px' }} />
                   </Parallax>
                   <Summary />
                   <Parallax
                       blur={{ min: -10, max: 7 }}
                       bgImage={require('../imgs/campingSunset.jpg')}
                       bgImageAlt="sunset"
                       strength={200}
                       >
                       <div style={{ height: '550px' }} />
                   </Parallax>
                   <Items />
                   <Parallax
                       blur={0}
                       bgImage={require('../imgs/nightCamping.jpg')}
                       bgImageAlt="night"
                       strength={500}
                       >
                           <div className="background">
                           <div className="transbox2">
                           <p>"Equiprent allowed us to use things we needed without having to buy it.
                           <br />Very easy process overall. We had an awesome time camping at Lake Tahoe!"
                           <br /> -Tommy B.</p>
                           </div>
                           </div>  
                       <div style={{ height: '650px' }} />
                   </Parallax>
                   <Footer />
               </div>

export default Home;
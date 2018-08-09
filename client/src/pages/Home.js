import React/* , { Component } */ from "react";
import { Parallax} from 'react-parallax';
import Footer from "../components/Footer/Footer";
import Summary from "../components/Summary/Summary";
import Items from "../components/Items/Items";
import Items2 from "../components/Items/Items2";

const Home = props =>
               <div>
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

                        <div>
                        <h3>EquipRENT is a community where users can find EQUIPMENT they need but do not necessarily want to buy.
                         <br />Users can also post the availability and rates for equipment that they own that other users can RENT.
                        </h3>
                        </div>
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
                       <div style={{ height: '200px' }} />
                   </Parallax>

                        <div>
                        <a href="/categories" style={{ textDecoration: 'none' }}><h3> Browse Items </h3> </a>
                        </div>
                   <Items />
                        <div>
                        <a href="/post" style={{ textDecoration: 'none' }}><h3> Post your Item! </h3> </a>
                        </div>
                   <Items2 />
                   <Parallax
                       blur={0}
                       bgImage={require('../imgs/nightCamping.jpg')}
                       bgImageAlt="night"
                       strength={500}
                       >
                           <div className="transbox3">
                           <p>"Equiprent allowed us to use things we needed
                           <br />without having to buy it. Very easy process.
                           <br />We had an awesome time camping at Lake Tahoe!"
                           <br /> -Tommy B.</p>
                           </div>
                       <div style={{ height: '650px' }} />
                   </Parallax>
                   <Footer />
               </div>

export default Home;
import React from "react";
import { Parallax} from 'react-parallax';

const Container = props =>
    <div class="container">
        <h1> Shop by Categories: </h1>

        <div>
        <a href="/camping"><h2> Camping </h2> </a>
        </div>
        <Parallax
                       blur={{ min: -10, max: 7 }}
                       bgImage={require('../imgs/camping.jpeg')}
                       bgImageAlt="camping"
                       strength={500}
                       >                      
                       <div style={{ height: '450px' }} />
        </Parallax>
   <div>
        <a href="/sporting"><h2> Sporting Goods </h2> </a>
    </div>
    <div>

        <a href="/sporting"><img src='https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/sporting.jpeg' alt="sporting" className="images" /> </a>

    </div>



    <div>
        <a href="/water"><h2> Nautical </h2> </a>
    </div>
    <div>
        <a href="/water"><img src='https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/water.jpeg' alt="water" className="images" /> </a>

    </div>

    <div>
        <a href="/tools"><h2> Tools </h2> </a>
    </div>
    <div>
        <a href="/tools"><img src='https://raw.githubusercontent.com/EquipRENTAL/Main/master/client/src/imgs/Tools.jpeg' alt="tools" className="images" /> </a>
    </div>

    </div>

export default Container;
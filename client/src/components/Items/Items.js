import React from "react";
import "./Items.css"

const Items = props =>
    <div>
        <section class="section-2">
            <div class="header-section"><h2>Browse Items</h2></div>
            <img src={'https://raw.githubusercontent.com/EquipRENTAL/Homepage/master/assets/img/gear/campTent.jpg'} alt="tent" className="img" />
            <img src={'https://raw.githubusercontent.com/EquipRENTAL/Homepage/master/assets/img/gear/cooler.jpg'} alt="cooler" className="img" />
            <img src={'https://raw.githubusercontent.com/EquipRENTAL/Homepage/master/assets/img/gear/foldingChair.jpg'} alt="chair" className="img" />
            <img src={'https://raw.githubusercontent.com/EquipRENTAL/Homepage/master/assets/img/gear/portableBBQ.jpg'} alt="grill" className="img" />

        </section>
    </div>

export default Items;
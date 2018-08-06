import React from "react";
import { Link } from "react-router-dom";
import "./Summary.css"

const Summary = props =>
    <div>
        <section className="section-1">
                <div>
                    <p className="pSum">EquipRENT is a community where users can find EQUIPMENT they need but do not necessarily want to buy.
               <br />Users can also post the availability and rates for equipment that they own that other users can RENT.</p>
                <img src={'https://img.freepik.com/free-vector/a-child-goes-camping-with-fantastic-accessories_1045-130.jpg?size=338&ext=jpg'} alt="lets go" className="img" />
                <img src={'https://img.freepik.com/free-vector/cute-camping-equipment-in-flat-design_23-2147541381.jpg?size=338&ext=jpg'} alt="choices" className="img" />
                <img src={'https://thumbs.dreamstime.com/b/couple-backpackers-vacation-traveling-47917394.jpg'} alt="campers" className="img" />
                </div>
        </section>
    </div>

export default Summary;
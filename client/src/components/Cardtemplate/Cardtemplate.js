import React from 'react';
import "./Cardtemplate.css"

const Cardtemplate = props => (
//     <div class="container">
// 	    <div class="cards">
//             <img src = {props.url} alt = "" />
//             <span class="card-title">
// 					<h2>{props.title}</h2>
// 				</span>
//             <br /><strong>Owner</strong>: {props.user}
//             <span class="card-summary"><strong>Description</strong>: {props.description}</span>
//         </div>
//     </div>
// );
        
      <div>
        <img src = {props.url} alt = "" />
        <div>
             <p className="card-title">
			<h6>{props.title}</h6>
    		</p>
            <p className="card-description"><strong>Description</strong>: {props.description}
            <br /><strong>Owner</strong>: {props.user}</p>
        </div>
      </div>
    );
  
export default Cardtemplate;
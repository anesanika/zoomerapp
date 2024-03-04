import { useState } from "react";
import "./Moreabout.css";


function Moreabout(props){

  const [isDroped, setIsDroped] = useState(false);


  return(
    <div className="abouts-cont" >
      <div
      className="about-prod-mian-title"
      onClick={() => setIsDroped(!isDroped)}
      >
        <h2>{props.mainText}</h2>
        <i className="fa-solid fa-chevron-down" style={isDroped ? {transform: 'rotate(180deg)'}: {transform: 'rotate(0)'}}></i>
      </div>

      <div className="about-drop-down" style={isDroped ? {minHeight: '0', height: '0'} : {minHeight: '30px'}}>
        <div className="about-prod-second-title">
          <p>{props.seconderyText} : </p>
        </div>
        <div className="about-prod-answer">
          <h5>{props.answer}</h5>
        </div>
      </div>
    </div>
  );
}



export default Moreabout;
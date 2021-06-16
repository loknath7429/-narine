import React from "react";
import Netflix_data from "./Data";


function Netflixcard(props) {
  return (
    <>

      <div className="Card">

        <div className="Innercard">
          <img src={props.Imgsrc} alt="Netflix" className="cardImg" />
          <div className="cardInfo">

            <h2 >{props.Origin}</h2>
            <h4 >{props.WSname}</h4>
            <a href="https://netflix.com" >
              <button className="smallbutton">Watch Now</button>
            </a>
          </div>

        </div>
      </div>

    </>

  )
}

export default Netflixcard;
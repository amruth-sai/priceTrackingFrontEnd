import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";

function cardComponent(Data) {
  // const script = document.createElement("script");
  // script.src = "https://use.typekit.net/foobar.js";
  // // <script src="" crossorigin="anonymous"></script>
  // script.src="https://kit.fontawesome.com/9002456866.js";
  // script.async = true;
  // document.body.appendChild(script);

  return (
    <React.Fragment>
      
        <div className="innerContainer">
          {/* <div>{Data.link}</div> */}
          <img src={Data.link} className="cardImg" crossOrigin="anonymous"/>
          <div className="proName">₹{Data.Price}</div>
          {/* <div className="proName">{Data.Name}</div> */}
          <div className="cardLink"><a href={Data.link1} target="_blank"  >{Data.Name}</a></div>
          
        </div>
    </React.Fragment>
  );
}

export default cardComponent;

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
  return (
    <React.Fragment>
      <div className="card">
        <div className="innerContainer">
          {/* <div>{Data.link}</div> */}
          <img src={Data.link}  crossOrigin="anonymous"/>
          <div>{Data.Name}</div>
          <div>{Data.Price}</div>
          
        </div>
      </div>
    </React.Fragment>
  );
}

export default cardComponent;

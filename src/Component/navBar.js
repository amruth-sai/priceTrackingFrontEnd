import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import  { useState } from 'react';

import { Link } from "react-router-dom";

function UseForceUpdate(){
  console.log("IN FORCE UPDATE")
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}
const forceUpdate = UseForceUpdate;

const navbar = () => {
  const imageClick = () => {
    // const navigate = useNavigate();

   
      
    console.log("here");
    // navigate('/home');
    
  } 
  return (
    <div className="navbar_outer">
      <div>
        <img className="mainlogo" onClick={()=>imageClick()} src="https://www.lux-review.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/12/grocery-shopping.jpg.webp"></img>
      </div>
      <div className="navbar">
      <div className="navbar_item">
          <p>
          <Link to="/home">HOME</Link>
          </p>
        </div>
        <div className="navbar_item">
          <p>
          <Link to="/cart" >My Products</Link>
          </p>
        </div>
        {renderElement()}
        {renderElement1()}
        {/* <div className="navbar_item">
          <p>
          <Link to="/login">LOGIN/SIGNUP</Link>
          </p>
        </div> */}
        {/* <div className="navbar_item">
          <p>
          <Link to="/signup">SIGNUP</Link>
          </p>
        </div> */}
      </div>
      <div className="account">
        <img className="dp" src='https://as2.ftcdn.net/v2/jpg/02/15/84/43/1000_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg'></img>
          <p>
            <div>{getCookie("username")}</div>
          <Link to="/logout" onClick={forceUpdate}>LOGOUT</Link>
          </p>
        </div>
    </div>
  );
};

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function renderElement(){
  if(getCookie("username") === 'GUEST')
     return (<div className="navbar_item">
     <p>
     <Link to="/login" onClick={forceUpdate}>LOGIN/SIGNUP</Link>
     </p>
   </div>);
  return null;
}
function renderElement1(){
  if(getCookie("username") !== 'GUEST')
     return (<div className="navbar_item">
     <p>
     <Link to="/addProduct" >Add NewProduct</Link>
     </p>
   </div>);
  return null;
}
export default navbar;

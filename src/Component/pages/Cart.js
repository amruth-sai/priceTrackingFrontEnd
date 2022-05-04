import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import  { useState, useEffect } from 'react';
import CardComponent from "./cardComponent";

const baseURL = "http://localhost:8000/getProduct";

const cookies = new Cookies();

const Cart = () => {
  const [flag,setFlag]=useState(false);
  console.log("IN CART");
  var user = getCookie("username");
  let data;  

  useEffect(function () {
    axios
      .post(baseURL, {
        username: user,
      })
      .then((response) => {
        console.log(response.data);
        data = response.data;
        setFlag(true);
      })
      .catch((err) => {
        console.log("FAILED TO LOAD");
      });
  }, []);
  if (user === "GUEST") {
    return <div>PLEASE LOGIN</div>;
  }
  
  return (
    <div>
      Haiii
      { user}

      {(flag && data.length!==0) && data.map((obj)=>{
        console.log(obj)
        return (<CardComponent Data={obj} />)
      })}

      {/* {flag && <div>{data}</div>} */}
      {/* <CardComponent/> */}
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
export default Cart;

import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";
// import { LoadingContext } from "react-router-loading";
// import { useContext } from 'react';
import { useState, useEffect } from "react";
import Cardcomponent from "./cardComponent";  

// const loadingContext = useContext(LoadingContext);
const cookies = new Cookies();


const baseURL = "http://localhost:8000/getProduct";

function Cart(props) {
  var user = getCookie("username");
  const [post, setPost] = React.useState([]);
  console.log(user,"090")
  React.useEffect(() => {
    axios.post(baseURL, { username: user }).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="mainCard">
        {/* {post["mail"]} */}
        {post.length==0?<h1>Loading...</h1>:null}
        {post.map((post1) => (
          <div className="card" id={post1["_id"]+1}>
            {<Cardcomponent link1={post1["link"]} link={post1["imgLink"]} Price={post1["price"]} Name={post1["name"]} />}
            <button className="delButton" onClick={deletePost} id={post1["_id"]} >Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
const deletePost=(id)=>{
  console.log(id["target"]["id"]);
  document.getElementById(id["target"]["id"]+1).style.display="none";
  axios.post("http://localhost:8000/delProduct", { _id:id["target"]["id"]  }).then((response) => {
    // setPost(response.data);
    console.log(response.data);
  });
  console.log("Delete Here");
}
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

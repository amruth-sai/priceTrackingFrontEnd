import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useState, useEffect } from "react";
import Cardcomponent from "./cardComponent";

const cookies = new Cookies();
var user = getCookie("username");

const baseURL = "http://localhost:8000/getProduct";

function Cart() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios.post(baseURL, { username: user }).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="mainCard">
        {post["mail"]}
        {post.map((post1) => (
          <React.Fragment>
            {<Cardcomponent link={post1["imgLink"]} Price={post1["price"]} Name={post1["name"]} />}
            <button onClick={deletePost} id={post1["_id"]} >Delete Post</button>
          </React.Fragment>
        ))}

        {/* <button onClick={createPost}>Create Post</button> */}

        

        {/* <button onClick={() => source.cancel()}>Cancel request</button> */}
      </div>
    </>
  );
}
const deletePost=(id)=>{
  console.log(id["target"]["id"]);
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

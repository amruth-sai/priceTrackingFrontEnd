import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import  { useState, useEffect } from 'react';


const cookies = new Cookies();
var user = getCookie("username");

const baseURL = "http://localhost:8000/getProduct";

function Sample() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    axios
      .post("http://localhost:8000/getProduct", { username: user })
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <div>
        {post["mail"]}

        <h3>Post data are:</h3>

        {post.map((post1) => (
            <div>
          <div>{post1["link"]}</div>
          <div>{post1["price"]}</div>
          <div>{post1["mail"]}</div>
          </div>
        ))}

        {/* <button onClick={createPost}>Create Post</button>

        <button onClick={deletePost}>Delete Post</button>

        <button onClick={() => source.cancel()}>Cancel request</button> */}
      </div>
    </>
  );
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
export default Sample;

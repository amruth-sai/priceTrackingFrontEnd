import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  console.log("IN FOTTER");
  // window.location.href = window.location.href
  // window.location.reload();

  return (
    <div className="bottom">
      <footer className="site_ftr">
        <div className="bottomleft">
          <h1>Price Tracker</h1>
          <p>
            We work to offer real value. Who are we?
            <br /> We’re a small team of tech geeks who love to build products{" "}
            <br />
            that make a difference.
          </p>
        </div>
        <div className="bottomMiddle">
            More Links
          <ul>
            <li><Link to="/cart">My Products</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
        <div className="bottomright">
          <p>GET IN TOUCH</p>
          <div>pricetracking@gmail.com</div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

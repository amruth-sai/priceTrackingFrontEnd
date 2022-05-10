import React from "react";
const Home = () => {
  console.log("IN HOME");
  // window.location.href = window.location.href
  // window.location.reload();

  return (
    <div style={{height:"100vh"}}>
      <div className="homepageLeft">
        <p className="homePageLeftInner">
          HEY WANT TO TRACK YOUR PRICES!!
        </p>
     <p className="homePageLeft">
        We will create a price alert and let you know when fares change for your favourite products.
       </p>
      </div>
      <img
        className="homepageImg"
        src="https://www.lux-review.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/12/grocery-shopping.jpg.webp"
      ></img>
    </div>
  );
};
export default Home;

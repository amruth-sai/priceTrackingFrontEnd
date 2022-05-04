import React from "react";
const Home = () => {
  console.log("IN HOME");
  // window.location.href = window.location.href
  // window.location.reload();

  return (
    <div id="root1">
      <div className="homepageLeft">
        <p className="homePageLeftInner">
          Haii this is prictracking APPLICATION
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

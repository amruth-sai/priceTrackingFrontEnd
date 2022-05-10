import React from "react";
const Home = () => {
  console.log("IN HOME");
  // window.location.href = window.location.href
  // window.location.reload();

  return (
    <>
      <div className="container">
        <div className="banner_sec">
          <div className="left_sec">
            <h1>Your next saving is an alert away!</h1>
            <p>
              Price Tracker sets an alert on your favourite product &amp;
              notifies you when prices drop.
            </p>
          </div>
          <div class="right_sec">
            <img src={"	https://wispri.com.au/images/Homepage.png"} alt="" />
          </div>
        </div>
      </div>
      <div className="container1">
        <div className="innerC1">
          <h1>
            You’re the first to
            <br /> know when prices <br />
            drop!
          </h1>
          <h3>
            It’s simple. We will monitor your favourite product and
            <br /> send you an alert when the product is at a price you like.
          </h3>
        </div>
        <div>
          <h3>
            Price Tracker is a simple, effective way to keep track of sales and
            discounts. A one-of-a-kind service, it monitors the prices of
            specific products on your list, and sends you an alert when the
            price drops to your liking. Wispri is easy to use – all you do is
            enter a URL, sit back and wait for the price to drop. Wispri saves
            you the trouble of repeatedly checking for discount or sale prices
            by yourself. Why hunt for deals when you can receive a price drop
            alert?
          </h3>
        </div>
      </div>
    </>
  );
};
export default Home;

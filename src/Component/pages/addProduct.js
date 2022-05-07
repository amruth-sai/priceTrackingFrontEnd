import React, { Component } from "react";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();
var user = getCookie("username");

const baseURL = "http://localhost:8000/addProduct";

class addProduct extends Component {
  constructor(props) {
    super(props);
    console.log("IN Add product");
    var x = false;

    this.state = {
      currentView: "logIn",
      username: "",
      password: "",
      email: "",
      itemLink:"",
      isLogin: x,
    };
    this.updateInput = this.updateInput.bind(this);
    this.updateInput1 = this.updateInput1.bind(this);
    this.updateInput2 = this.updateInput2.bind(this);
    // if (getCookie("username") !== "GUEST") {
    //   console.log("USER reached");
    //   //   this.changeView("alreadyLogin");
    // }
  }
  updateInput(event) {
    this.setState({ itemLink: event.target.value });
  }
  updateInput1(event) {
    this.setState({ password: event.target.value });
  }
  updateInput2(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit = (event) => {
    console.log("Your input value is: " + getCookie("username"));
    // console.log("Your input value is: " + this.state.password);

    axios
      .post(baseURL, {
        username: getCookie("username"),
        link: this.state.itemLink,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          
          console.log("AFTER GOOD RESPONSE");
          //   this.changeView("None");
          // window.location.reload();
          alert("Succesfully Added");
        } else {
          console.log("NO USER FOUND");
          alert("ENTER CORRECT URL");
        }
      })
    //Send state to the server code
    event.preventDefault();
  };
  render() {
    return (
      <div className="addProductMain" style={{ height: "100vh" }}>
        <form className="formAddpro">
          <h2>Add Link to Track New Product</h2>
          <div className="IneerAddPro">
            <label for="itemLink"><h1>Drop Link here</h1></label>
            <br/>
            <input
                className="abcdef"
              type="text"
              id="itemLink"
              onChange={this.updateInput}
              required
            />
          <br/>
          <button className="abcdef" onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
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
export default addProduct;

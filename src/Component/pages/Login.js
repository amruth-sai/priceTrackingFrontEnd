import React, { Component } from "react";
import Cookies from 'universal-cookie';

import { useCookies } from 'react-cookie';

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
import "./Login.scss";
import axios from "axios";
const baseURL = "http://localhost:8000/login";


const cookies = new Cookies();

class Login extends Component {
  
  constructor(props) {
    super(props);
    console.log("IN LOGIN");
    var x=false;
    
    this.state = {
      currentView: "logIn",
      username: "",
      password: "",
      email:"",
      isLogin:x,
    };
    this.updateInput = this.updateInput.bind(this);
    this.updateInput1 = this.updateInput1.bind(this);
    this.updateInput2 = this.updateInput2.bind(this);
    if(getCookie("username")!=="GUEST"){
      console.log("USER reached");
      this.changeView("alreadyLogin");
    }
  }
  
    updateInput(event) {
    this.setState({ username: event.target.value });
  }
  updateInput1(event) {
    this.setState({ password: event.target.value });
  }
  updateInput2(event) {
    this.setState({ email: event.target.value });
  }
  handleSubmit = (event) => {
    console.log("Your input value is: " + this.state.username);
    console.log("Your input value is: " + this.state.password);
    this.changeView("loading");
    axios.post(baseURL, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          cookies.set('username', this.state.username, { path: '/' });
          console.log("AFTER GOOD RESPONSE");
          this.changeView("None");
          // window.location.reload();
        }
        else{
          console.log("NO USER FOUND");
          alert("NO USER FOUND OR WRONG PASSWORD");
        }
      })
      .catch((err) => {
        console.log("NO USER FOUND");
        alert("NO USER FOUND OR WRONG PASSWORD");
      });
    //Send state to the server code
    event.preventDefault();
  
    
  };
  handleSubmitForSignUp = (event) => {
    console.log("Your input value is: " + this.state.username);
    console.log("Your input value is: " + this.state.password);
    console.log("Your input value is: " + this.state.email);

    axios.post("http://localhost:8000/signup", {
        username: this.state.username,
        password: this.state.password,
        email:this.state.email,

      })
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          console.log("AFTER GOOD RESPONSE ");
          this.changeView("logIn");
        }
      })
      .catch((err) => {
        console.log("CREATION FAILED");
        alert("CREATION FAILED PLEASE TRY AGAIN");
      });
    //Send state to the server code

    event.preventDefault();
  };
  
  changeView = (view) => {
    this.setState({
      currentView: view,
    });
  };

  currentView = () => {

    switch (this.state.currentView) { 
      case "loading":
        return (<div><h2>LOADING ....</h2></div>)
        break;
      case "alreadyLogin":
        return (<div>Haii</div>) 
        break;
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" onChange={this.updateInput} required />
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" onChange={this.updateInput2} required />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" onChange={this.updateInput1} required />
                </li>
              </ul>
            </fieldset>
            <button onClick={this.handleSubmitForSignUp}>Submit</button>
            <button type="button" onClick={() => this.changeView("logIn")}>
              Have an Account?
            </button>
          </form>
        );
        break;
      case "logIn":
        if(getCookie("username")!=="GUEST"){
          console.log("HERE");
          // window.location.reload();
          // window.location.reload(false);

          {<Navigate to="/home" />}
          const mystyle = {
            display:"flex",
            // align-items:"center",
            height:"17vh",
          };
          return (<div style={mystyle}>User already Login</div>)
        }
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input
                    type="text"
                    onChange={this.updateInput}
                    id="username"
                    required
                  />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    onChange={this.updateInput1}
                    required
                  />
                </li>
                <li>
                  <i />
                  <a onClick={() => this.changeView("PWReset")} href="#">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>

            <button onClick={this.handleSubmit}>Login</button>
            <button type="button" onClick={() => this.changeView("signUp")}>
              Create an Account
            </button>
          </form>
        );
        break;
      case "PWReset":
        return (
          <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={() => this.changeView("logIn")}>
              Go Back
            </button>
          </form>
        );
        break;
      case "None":
        console.log("HERE after login ");
        this.props.setTemp(!this.props.temp);
        return null;
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <>
        {this.currentView() == null ? (
          <Navigate to="/" />
        ) : (
          <section id="entry-page">{this.currentView()}</section>
        )}
      </>
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
export default Login;
// ReactDOM.render(<Login/>, document.getElementById("app"))
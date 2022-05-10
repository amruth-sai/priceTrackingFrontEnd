// import './App.css';
import { BrowserRouter as Router,Routes } from "react-router-dom";
import { Route, Switch } from "react-router-loading";


import Navbar from "./navBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Cart from "./pages/Cart";
import Addproduct from "./pages/addProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" element={<Home />}  loading/>
        <Route path="/home" element={<Home /> } loading/>
        <Route path="/cart" element={<Cart />} loading/>
        <Route path="/login" element={<Login />} loading/>
        <Route path="/signup" element={<Signup />} loading/>
        <Route path="/logout" element={<Logout />} loading/>
        <Route path="/addProduct" element={<Addproduct />} loading/>
        
      </Switch>
    </Router>
  );
}

export default App;

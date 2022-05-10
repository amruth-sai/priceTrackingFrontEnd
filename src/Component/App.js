// import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import { Route, Switch } from "react-router-loading";


import Navbar from "./navBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Cart from "./pages/Cart";
import Addproduct from "./pages/addProduct";
import Footer from "./pages/Footer";
import {useState} from 'react';
function App() {
  const [temp,setTemp] = useState(false);
  return (
    <Router>
      <Navbar temp={temp} setTemp={setTemp}/>
      <Routes>
        <Route path="/" element={<Home />}  loading/>
        <Route path="/home" element={<Home /> } loading/>
        <Route path="/cart" element={<Cart temp={temp} setTemp={setTemp}/>}  loading/>
        <Route path="/login" element={<Login temp={temp} setTemp={setTemp}/>} loading/>
        <Route path="/signup" element={<Signup />} loading/>
        <Route path="/logout" element={<Logout temp={temp} setTemp={setTemp}/>} loading/>
        <Route path="/addProduct" element={<Addproduct />} loading/>
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;

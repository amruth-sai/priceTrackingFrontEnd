
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const Logout = () =>{
  
  cookies.set('username',"GUEST", { path: '/' });

  return (
    <div style={{height:"85vh"}}>
      Logout Succesfull
      <Link to="/home">Home</Link>

    </div>
  );
}
export default Logout;
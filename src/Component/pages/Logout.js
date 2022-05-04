
import React from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


const Logout = () =>{
  cookies.set('username',"GUEST", { path: '/' });

  return (
    <div>
      Logout Succesfull
      
    </div>
  );
}
export default Logout;
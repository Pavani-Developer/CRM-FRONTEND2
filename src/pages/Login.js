import React from 'react';

import Button from '@mui/material/Button';


import {

    Link,
  } from "react-router-dom";




const Login = () => {
  return (
    <>
    <div className='login-box'>
     
    
      <div className='login'>
    <ul>
      <li>
        <Button variant="contained" color="secondary"><Link to="/user">User</Link></Button>
        </li>
        <li>
        <Button variant="contained" color="secondary"><Link to="/admin">Admin</Link></Button>
        </li>
        <li>
        <Button variant="contained" color="secondary"><Link to="/superuser">Super User</Link></Button>
        </li>
    </ul>
        </div>
    </div>
    
    </>
  )
}

export default Login

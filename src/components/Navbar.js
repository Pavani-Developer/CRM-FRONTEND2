import React, {useState} from 'react';
import Logo from '../assets/Logo.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbas.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [openLinks,setOpenLinks] = useState(false)

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks)
    }


  return (
    <div className='navbar'>
        <div className='leftSide' id ={openLinks ? "open" : "close"}>
            <img src = {Logo}/>
            <div className='hiddenLinks'>
            <Link to="/">Home</Link>
            <Link to='courses'>Courses</Link>
            <Link to='contact'>Contact</Link>
            <Link to='demo'>Demo</Link>
            <Link to='about'>About</Link>
            <Link to='enrol'>Enrol</Link>
            <Link to='login'>Login</Link>
            <Link to='logout'>Logout</Link>

            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to='courses'>Courses</Link>
            <Link to='contact'>Contact</Link>
            <Link to='demo'>Demo</Link>
            <Link to='about'>About</Link>
            <Link to='enrol'>Enrol</Link>
            <Link to='login'>Login</Link>
            <Link to='logout'>Logout</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon />
            </button>

        </div>
      
    </div>
  )
}

export default Navbar

import React, {useState} from 'react';
import Logo from '../assets/Logo.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbas.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import Admin from './../pages/Admin';
import Login from './../pages/Login';
import Dropdown from 'react-bootstrap/Dropdown';

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
                <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to='courses'>Courses</Link></li>
            <li><Link to='contact'>Contact</Link></li>
            <li><Link to='demo'>Demo</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='enrol'>Enrol</Link></li>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='logout'>Logout</Link></li>
            <li><Link to='/admininterface'>AdminInterface</Link></li>
            </ul>

            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to='courses'>Courses</Link>
            <Link to='contact'>Contact</Link>
            <Link to='demo'>Demo</Link>
            <Link to='about'>About</Link>
            <Link to='enrol'>Enrol</Link>
            <Link to='logout'>Logout</Link>
            <Link to='/admininterface'>AdminInterface</Link>
            <Link to='/super'>Super</Link>
            <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Login
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link to= 'admin'><Dropdown.Item href="admin">Admin</Dropdown.Item></Link>
                    <Link to='user'><Dropdown.Item href="user">User</Dropdown.Item></Link>
                    <Link to ='superuser'><Dropdown.Item href="superuser">Super User</Dropdown.Item></Link>
                  </Dropdown.Menu>
                </Dropdown>
            <button  className = "toggle-button" onClick={toggleNavbar}>
            <ReorderIcon />
            </button>

        </div>
      
    </div>
  )
}

export default Navbar

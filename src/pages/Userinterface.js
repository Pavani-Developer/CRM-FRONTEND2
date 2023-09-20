import React,{useState} from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, Routes ,Route} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Userinterface.css";
import ClearIcon from '@mui/icons-material/Clear';
import Profile from './studentpanel/Profile';
import Assignment from './studentpanel/Assignment';
import Attendence from './studentpanel/Attendence';
import Mock from './studentpanel/Mock';



const Userinterface = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <div className='user-body'>
    
    <div className='user-nav'>
      <Link to='#' className='menu-bar'>
          <ReorderIcon  id = 'bars' onClick={showSidebar} />
      </Link>
    </div>
    <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/assignments' element={<Assignment/>}/>
        <Route path='/attendence' element={<Attendence/>}/>
        <Route path='/mock' element={<Mock/>}/>
        </Routes>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <ClearIcon />
              </Link>
            
            </li>
            <li>  <Link to='/profile'>Profile</Link></li>
            <li>  <Link to='/assignments'>Assignments</Link></li>
            <li>  <Link to='/attendence'>Attendence</Link></li>
            <li>  <Link to='/mock'>Mock</Link></li>
            
          </ul>
        </nav>
    
    </div>
    
    </>
  )
}

export default Userinterface
/*{SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}*/
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import {Route,Routes} from "react-router-dom";
import Footer from './components/Footer';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Enrol from './pages/Enrol'
import Logout from './pages/Logout';
import Admin from './pages/Admin';
import User from './pages/User';
import Super from './pages/Super';
import Demo from './pages/Demo';
import AdminInterface from './pages/AdminInterface';
import Join from './pages/Join';
import Userinterface from './pages/Userinterface';
import Superinterface from './pages/Superinterface';
import Python from './pages/courses/Python';
import Java from './pages/courses/Java';
import Dev from './pages/courses/Dev';
import Power from './pages/courses/Power';
import Profile from './pages/studentpanel/Profile';
import Assignment from './pages/studentpanel/Assignment';
import Attendence from './pages/studentpanel/Attendence';
import Mock from './pages/studentpanel/Mock';
import Studenthome from './pages/studentpanel/Studenthome';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/demo' element = {<Demo/>}/>
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/enrol' element= {<Enrol/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path = '/user' element = {<User/>}/>
        <Route path='/superuser' element = {<Super/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/admininterface' element={<AdminInterface/>}/>
        <Route path='/super' element={<Superinterface/>}/>
        <Route path='/userinterface' element={<Userinterface/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/courses/pythondetails' element={<Python/>}/>
        <Route path='/courses/javadetails' element={<Java/>}/>
        <Route path='/courses/devdetails' element={<Dev/>}/>
        <Route path='/courses/powerdetails' element={<Power/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/assignments' element={<Assignment/>}/>
        <Route path='/attendence' element={<Attendence/>}/>
        <Route path='/mock' element={<Mock/>}/>
        <Route path='/studenthome' element={<Studenthome/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

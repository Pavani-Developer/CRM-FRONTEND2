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
import Login from './pages/Login';
import Admin from './pages/Admin';
import User from './pages/User';
import Super from './pages/Super';
import Demo from './pages/Demo';
import AdminInterface from './pages/AdminInterface';
import Join from './pages/Join';
import Userinterface from './pages/Userinterface';
import Superinterface from './pages/Superinterface';
import Example from './pages/Example';
import Python from './pages/Python';
import Java from './pages/Java';
import Dev from './pages/Dev';
import Power from './pages/Power';



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
        <Route path='/join' element={<Join/>}/>
        <Route path='/courses/pythondetails' element={<Python/>}/>
        <Route path='/courses/javadetails' element={<Java/>}/>
        <Route path='/courses/devdetails' element={<Dev/>}/>
        <Route path='/courses/powerdetails' element={<Power/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

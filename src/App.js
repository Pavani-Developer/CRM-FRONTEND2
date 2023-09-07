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



function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/enrol' element= {<Enrol/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

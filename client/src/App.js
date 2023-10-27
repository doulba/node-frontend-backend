import './App.css';
import React from 'react';
import Home from './pages/home';
import Create from './components/create';
import Read from './components/read';
import Register from './components/register';
import Update from './components/update';
import NotFoundPage from './pages/404';
import './components/FontawesomeIcons';
import LoginPage from './pages/login';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {

  const [] = React.useState(null);
  const accesToken = localStorage.getItem('token');
  const loginFailled = localStorage.getItem('loginFailed')
  
  if(!accesToken) {
    if(!loginFailled){
      return <LoginPage />
    } else {
      return<Register />
    }
    
  } 

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("loginFailled");
    window.location.href = "/home";
    }

  return (
    
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/create'} className="nav-link"> Admin </Link></li>
          <li><Link to={'/read'} className="nav-link"> Read </Link></li>
          <li><Link to={'/update'} className="nav-link"> Update </Link></li>
          <a href='/'><li onClick={logOut} className="nav-link"> Logout </li></a>
        </ul>
        </nav>
        <hr />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Create" element={<Create/>}/>
          <Route exact path="/Read" element={<Read/>}/>
          <Route exact path="/Update" element={<Update/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </div>
    </Router>
  );
}

export default App;

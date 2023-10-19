import "./App.css";
import LoginPage from "./pages/login/index";
import Profile from "./pages/profile";
import NotFoundPage from "./pages/404";
import AdminPage from "./pages/admin/index"

//import "./components/FontawesomeIcons";

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


function App() {
  const accesToken = localStorage.getItem('token');
  if(!accesToken) {
    return <LoginPage />
  } 

  
  return (

  <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/admin'} className="nav-link"> Admin </Link></li>
          <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          <li><Link to={'/about'} className="nav-link">About</Link></li>
          <li><Link to={'/Profile'} className="nav-link">Profile</Link></li>
        </ul>
        </nav>
        <hr />
        <Routes>
          <Route exact path="/LoginPage" element={<LoginPage/>}/>
          <Route exact path="/admin" element={<AdminPage/>}/>
          <Route exact path="/Profile" element={<Profile/>}/>
          <Route exact path="/404" element={<NotFoundPage/>}/>
          <Route exact path="/recovery-password" element={<LoginPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

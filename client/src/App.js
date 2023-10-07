import "./App.css";
import LoginPage from "./pages/login/index";
import NotFoundPage from "./pages/404";
import "./components/FontawesomeIcons";

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'


function App() {
  return (

  <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
          <li><Link to={'/about'} className="nav-link">About</Link></li>
        </ul>
        </nav>
        <hr />
        <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route exact path="/404" element={<NotFoundPage/>}/>
          <Route exact path="/recovery-password" element={<LoginPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

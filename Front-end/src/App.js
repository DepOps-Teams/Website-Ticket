import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Tiket from './Tiket';
import Home from './home';
import History from'./History';
import Profile from './Profile'
import ProfileDetail from './ProfileDetail';
import './App.css';
import ChangePass from './ChangePass';
import Header from './navbar';


function App() {
  return(
    <Router>
      <Main/>
    </Router>
  )
}
function Main() {
  const location = useLocation();
  const noNavbarRoutes = ['/', '/register','/home'];
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <div>
      {showNavbar && <Header/>}
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile"element = {<Profile/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/tiket" element={<Tiket />} />
        <Route path="/profiledetail" element={<ProfileDetail />} />
        <Route path="/history" element={<History />} />
        <Route path="/changepassword" element={<ChangePass />} /> 
        </Routes>
    </div>
  );
}

export default App;
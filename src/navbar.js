import React, { useState } from 'react';
import { Search, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Header = () => {
  const navigate = useNavigate()
    const submit = (e) => {
      e.preventDefault()
      navigate('/Profile')
    }
  return (
    <div className="header-container">
      <header className="header">
        <div className="nav-container">
          <span className="logo" ><img src="./image/musikal.png" alt="Logo" /></span>
          <nav className="nav-links">
            <a href="/home" className="nav-link">Home</a>
            <a href="/history" className="nav-link">Histori</a>
            <a href="/tiket" className="nav-link">Tiket</a>
          </nav>
        </div>
        <div className="search-profile-container">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
            <Search className="search-icon" size={18} />
          </div>
            <div className="profile-icon">
              <img onClick={submit} src="./image/profile.png" alt="Profile" className="profile-picture" />
            </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
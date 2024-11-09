import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Edit, Key, Inbox, Info, Phone, LogOut, TagIcon } from 'lucide-react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({ username: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`http://localhost:3001/api/users/${userData._id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const handleEditProfile = () => {
    navigate('/profiledetail');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="app-container">
      <div className="content-container">
        <div className="profile-card1">
          <div className="profile-header">
            <img src="./image/profile.png" alt="Profile" className="profile-image" />
            <div>
              <h2 className="profile-name">{user.username}</h2>
              <p className="profile-email">{user.email}</p>
            </div>
          </div>
          <ul className="menu-list">
            <li className="menu-item">
              <TagIcon className="menu-icon" />
              <button className="menu-button">My Voucher</button>
            </li>
            <li className="menu-item">
              <Edit className="menu-icon" />
              <button onClick={handleEditProfile} className="menu-button">Edit Profile</button>
            </li>
            <li className="menu-item">
              <Key className="menu-icon" />
              <button className="menu-button">Ganti Password</button>
            </li>
            <li className="menu-item">
              <Inbox className="menu-icon" />
              <button className="menu-button">Inbox</button>
            </li>
            <li className="menu-item">
              <Info className="menu-icon" />
              <button className="menu-button">Tentang Kami</button>
            </li>
            <li className="menu-item">
              <Phone className="menu-icon" />
              <button className="menu-button">Kontak Kami</button>
            </li>
            <li className="menu-item">
              <LogOut className="menu-icon" />
              <button onClick={handleLogout} className="menu-button">Keluar</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;

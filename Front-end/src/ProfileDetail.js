import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfileDetail.css';

const ProfileDetail = () => {
  const [user, setUser] = useState({ username: '', email: '', imageUrl: '' });
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(`http://localhost:3001/api/users/${userData._id}`);
        setUser(response.data);
        setUsername(response.data.username);
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, []);

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = JSON.parse(localStorage.getItem('user'));
      
      // Update profile information
      await axios.patch(`http://localhost:3001/api/users/${userData._id}/profile`, {
        username,
        email
      });

      // Update profile picture if a new image is selected
      if (profileImage) {
        const formData = new FormData();
        formData.append('Image', profileImage);

        await axios.patch(`http://localhost:3001/api/users/${userData._id}/profile-picture`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }

      // Refresh user data in localStorage
      const updatedUser = await axios.get(`http://localhost:3001/api/users/${userData._id}`);
      localStorage.setItem('user', JSON.stringify(updatedUser.data));

      navigate('/Profile');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile-page">
      <main>
        <div className="profile-card">
          <img 
            src={user.imageUrl ? `http://localhost:3001${user.imageUrl}` : './image/profile.png'} 
            alt="Profile" 
            className="profile-image" 
          />
          <div className="profile-actions">
            <label htmlFor="profileImage" className="action-button">Ganti Foto</label>
            <input
              type="file"
              id="profileImage"
              style={{ display: 'none' }}
              onChange={handleImageChange}
              accept="image/*"
            />
            <button className="action-button" onClick={() => setProfileImage(null)}>Hapus Foto</button>
          </div>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nama</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <button type="submit" className="submit-button">Simpan</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfileDetail;

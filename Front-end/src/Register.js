import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newUser = {
      username,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:3001/api/register', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("pendaftaran selesai"); // Tampilkan notifikasi sukses
        navigate('/'); // Navigasi ke halaman login
      } else {
        toast.error(data.error); // Tampilkan pesan error
      }
    } catch (error) {
      console.error('Error registering:', error);
      toast.error('Terjadi kesalahan saat mendaftar'); // Tampilkan pesan kesalahan
    }
  };

  return (
    <div className="login-container1">
      <div className="image-section1">
        <img src="image/konser.jpeg" alt="Event" className="background-image1" />
      </div>

      <div className="login-section1">
        <h1>Daftar Akun Anda</h1>
        <p>Silahkan Daftar Akun Anda</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group1">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Masukan Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Masukan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Masukan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button1">Daftar</button>
        </form>
      </div>

      {/* ToastContainer to show the notifications */}
      <ToastContainer />
    </div>
  );
}

export default Register;

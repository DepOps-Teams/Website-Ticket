import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', { username, password });

      if (response.status === 200) {
        toast.success('Anda berhasil login!');
        localStorage.setItem('user', JSON.stringify(response.data.user)); // Simpan data pengguna ke localStorage

        setTimeout(() => {
          navigate('/home');
        }, 1000);
      }
    } catch (error) {
      setError(error.response?.data?.error || 'Terjadi kesalahan, coba lagi.');
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="image-section">
        <img src="image/konser.jpeg" alt="Event" className="background-image" />
      </div>

      <div className="login-section">
        <h1>Selamat Datang</h1>
        <p>Silahkan Masukkan Akun Anda</p>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={submit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Masukan Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Masukan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-text">
          Tidak Punya Akun? <Link to="/register">Buat Sekarang</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

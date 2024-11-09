import React from 'react';
import './ChangePass.css';

const ChangePass = () => {
  return (
    <div className="container">

      <main>
        <div className="profile-section">
          <img src="./image/profile.png" alt="Profile" className="profile-image" />
          <h2>Muhammad Vadila Rambe</h2>
          <p>Vadilajadulu@gmail.com</p>
        </div>
        <div className="password-change-section">
          <h3>Ganti Password</h3>
          <form>
            <div className="form-group1">
              <label>Password lama:</label>
              <input type="password" placeholder="Masukan Password Baru" />
            </div>
            <div className="form-group1">
              <label>Password Baru:</label>
              <input type="password" placeholder="Masukan Password Baru" />
            </div>
            <button type="submit" className="submit-button">Simpan Password Baru</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChangePass;
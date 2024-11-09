import React from 'react'
import { Link } from 'react-router-dom'
import './home.css' 

function Home() {
  return (
    <div className="home">
      <div className="background-image">
        <img src="./image/conser.jpg" alt="Concert" className="concert-img" /> {/* Path to your image */}
        <div className="explore-button">
          <Link to="/Tiket" className="btn">Explore More</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
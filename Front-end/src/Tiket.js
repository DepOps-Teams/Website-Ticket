import React, { useEffect, useState } from 'react'
import './Tiket.css' // Assuming styling is in Tiket.css
import axios from "axios"

function Tiket() {
  const [data,setData] =  useState(null)
  const [load,setLoad] = useState(true)

  const getData = async() => {
    try{
      let datas = await axios.get("http://localhost:3001/produk/getProduk")
      setData(datas.data)
      setLoad(false)
    }catch(err){
      console.log(err)
    }
  }

  const postData = async(concert) => {
    try{
      await axios.post("http://localhost:3001/produk/getHistory",concert)
      .then(res => {
       getData();
      })   
    }catch(err){
      console.log(err)
    }
  }

  useEffect( () => {
    getData()
  },[])

  if(load){
    return <p>Loading...</p>
  }

  return (
    <div>
      

      <div className="concert-list">
        {data.map((concert) => (
          <div key={concert.id} className="concert-card" >
            <img src={concert.image} alt={concert.artist} className="concert-image" />
            <div className="concert-details">
              <h3>Konser {concert.name}</h3>
              <p>{concert.location}, {concert.tanggal} WIB</p>
              <p><strong>{concert.Time}</strong></p>
              <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(concert.price)}</p>
              <div className="concert-buttons">
                <button className="buy-button" onClick={() => postData(concert)}>Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tiket

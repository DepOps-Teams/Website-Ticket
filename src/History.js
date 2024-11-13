import React, { useEffect, useState } from 'react';
import './History.css'; // Assuming styling is in Tiket.css
import axios from 'axios';

// const concerts = [
//   {
//     id: 1,
//     artist: "Ed-Sheeran",
//     location: "Medan",
//     date: "20 Oct 2024",
//     time: "19.00 - 21.00",
//     price: "Rp.25.000.000,00",
//     image: "./image/ed.jpg", // replace with your correct image path
//   },
//   {
//     id: 2,
//     artist: "Avanged Sevenfold",
//     location: "Jakarta",
//     date: "22 Mei 2025",
//     time: "20.00 - 22.00",
//     price: "Rp.30.000.000,00",
//     image: "./image/a7x.jpg", // replace with your correct image path
//   },
//   {
//     id: 3,
//     artist: "Bruno Mars",
//     location: "Surabaya",
//     date: "5 Nov 2024",
//     time: "19.00 - 21.00",
//     price: "Rp.25.000.000,00",
//     image: "./image/Bruno Mars.jpeg", // replace with your correct image path
//   },
//   {
//     id: 4,
//     artist: "Adele",
//     location: "Medan",
//     date: "11 Nov 2024",
//     time: "19.00 - 22.00",
//     price: "Rp.10.000.000,00",
//     image: "./image/adele.jpeg",
//   },
//   {
//     id: 5,
//     artist: "Linkin Park",
//     location: "Jawa Tengah",
//     date: "1 Nov 2024",
//     time: "18.00 - 21.00",
//     price: "Rp.5.000.000,00",
//     image: "./image/linkinpark.jpeg",
//   },

// ];

function Tiket() {
  const [data,getData] = useState(null);
  const [load,setLoad] = useState(true);

  
  const showData= async() => {
    try{  
      let datas =await axios.get("http://localhost:3001/produk/getHistory")
      getData(datas.data);
      setLoad(false)
    }catch(err){
      setLoad(true)
      console.log(err)
    }
  }
  
  const refundTiket = async(id) => {
    try{
       await axios.delete("http://localhost:3001/produk/getHistory/"+id)
       .then(res => {
        showData()
       })
    }catch(err){
      setLoad(true)
      console.log(err)
    }
  }

  useEffect(() => {
    showData();
  },[])

  if(load) {
    return <p>Load...</p>
  }

  return (
    <div>
      <div className="concert-list">
        {data.map((concert) => (
          <div key={concert.id} className="concert-card" >
            <img src={concert.image} alt={concert.artist} className="concert-image" />
            <div className="concert-details">
              <h3>{concert.name}</h3>
              <p>{concert.location}, {concert.tanggal}</p>
              <p><strong>{concert.time}</strong></p>
              <p>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(concert.price)}</p>
              <div className="concert-buttons">

                <button className="cancel-button" onClick={() => refundTiket(concert._id)}>Refund</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tiket;
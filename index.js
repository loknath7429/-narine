import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Home.js'
import Netflixcard from './App.js';
import Netflix_data from './Data';
import InfoUs from './Information';



ReactDOM.render(
  <>
    <Homepage />
    <section className="Middle">
    <h2>Top Netflix Series For You.</h2>
      <Netflixcard

        MLink={Netflix_data[0].MLink}
        WSname={Netflix_data[0].WSname}
        Imgsrc={Netflix_data[0].Imgsrc}
        Origin={Netflix_data[0].Origin}
      />
      <Netflixcard

        MLink={Netflix_data[1].MLink}
        WSname={Netflix_data[1].WSname}
        Imgsrc={Netflix_data[1].Imgsrc}
        Origin={Netflix_data[1].Origin}
      />
      <Netflixcard

        MLink={Netflix_data[2].MLink}
        WSname={Netflix_data[2].WSname}
        Imgsrc={Netflix_data[2].Imgsrc}
        Origin={Netflix_data[2].Origin}
      />
      <Netflixcard

        MLink={Netflix_data[3].MLink}
        WSname={Netflix_data[3].WSname}
        Imgsrc={Netflix_data[3].Imgsrc}
        Origin={Netflix_data[3].Origin}
      />
      <Netflixcard

        MLink={Netflix_data[4].MLink}
        WSname={Netflix_data[4].WSname}
        Imgsrc={Netflix_data[4].Imgsrc}
        Origin={Netflix_data[4].Origin}
      />
      <Netflixcard

        MLink={Netflix_data[5].MLink}
        WSname={Netflix_data[5].WSname}
        Imgsrc={Netflix_data[5].Imgsrc}
        Origin={Netflix_data[5].Origin}
      />
    </section>
    <InfoUs/>



  </>
  , document.getElementById("root")
);
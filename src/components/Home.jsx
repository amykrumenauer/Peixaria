import React from 'react';
import './Home.css';
import tilapia from '../assets/tilapia.png';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-left">
        <span className="home-tag">PEIXARIA & EMPÓRIO DO VALE</span>

        <h1 className="title">
          Nossos peixes,
          <br />
          seu sorriso.
        </h1>

        <p className="highlight">Qualidade incomparável!</p>

        <p className="subtitle">
          Eleita a melhor Tilápia fresca da região!
        </p>

        <a
          href="https://wa.me/5541991064083"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Faça seu pedido
        </a>
      </div>

      <div className="home-right">
        <img
          src={tilapia}
          alt="Tilápia fresca"
          className="tilapia-img"
        />
      </div>
    </section>
  );
};

export default Home;
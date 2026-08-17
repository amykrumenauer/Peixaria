import React from 'react';
import './Home.css';
import tilapia from '../assets/tilapia.png';

const Home = () => {
  return (
    <section id="home" className="home">

      {/* elementos decorativos */}
      <span className="fish fish-1">◀)))≋</span>
      <span className="fish fish-2">◀)))≋</span>
      <span className="fish fish-3">◀)))≋</span>
      <span className="fish fish-4">◀)))≋</span>

      <div className="home-content">

        <span className="home-tag">
          PEIXARIA & EMPÓRIO DO VALE
        </span>

        <h1 className="title">
          Nossos peixes,
          <br />
          seu sorriso.
        </h1>

        <p className="highlight">
          Qualidade incomparável!
        </p>

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

        <div className="fish-image">
          <img
            src={tilapia}
            alt="Tilápia fresca"
            className="tilapia-img"
          />
        </div>

      </div>

    </section>
  );
};

export default Home;
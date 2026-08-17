import React from 'react';
import './Home.css';
import peixesFundo from '../assets/peixes-fundo.png';

const Home = () => {
  return (
    <section id="home" className="home">

      {/* cardume decorativo */}
      <div className="peixes-fundo">
        <img
          src={peixesFundo}
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* conteúdo principal */}
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

        <a
          href="https://wa.me/5541991064083"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          Faça seu pedido
        </a>

      </div>

    </section>
  );
};

export default Home;
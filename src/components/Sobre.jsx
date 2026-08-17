import React from 'react';
import './Sobre.css';
import fachada from '../assets/fachada.jpg';

const Sobre = () => {
  return (
    <section id="sobre" className="sobre">

      <div className="sobre-conteudo">

        <span className="sobre-tag">
          NOSSA HISTÓRIA
        </span>

        <h2 className="sobre-titulo">
          Sobre nós
        </h2>

        <div className="sobre-principal">

          <div className="sobre-texto-container">

            <p className="sobre-texto">
              A Peixaria & Empório do Vale é uma empresa familiar
              localizada em Curitiba – PR, fundada em <strong>4 de novembro
              de 2020</strong> por <strong>Viviane Gonçalves</strong>.
            </p>

            <p className="sobre-texto">
              Desde o início, o propósito sempre foi oferecer pescados,
              frutos do mar e produtos coloniais de qualidade, com preços
              justos e um atendimento próximo e personalizado.
            </p>

            <p className="sobre-texto">
              Ao longo dos anos, a Peixaria & Empório do Vale conquistou
              seu espaço através da confiança de seus clientes e do cuidado
              na seleção de cada produto que chega à mesa.
            </p>

          </div>

          <div className="sobre-imagem">
            <img
              src={fachada}
              alt="Fachada da Peixaria & Empório do Vale"
              className="sobre-img"
            />
          </div>

        </div>


        <div className="fundadora">

          <div className="fundadora-detalhe"></div>

          <div className="fundadora-texto">

            <span className="fundadora-tag">
              QUEM ESTÁ POR TRÁS
            </span>

            <h3>
              Uma história construída com dedicação
            </h3>

            <p>
              À frente da Peixaria & Empório do Vale está sua fundadora,
              Viviane Gonçalves, que transformou sua visão e dedicação
              em um negócio construído com proximidade, confiança e
              compromisso com a qualidade.
            </p>

            <p>
              Mais do que oferecer produtos, a empresa busca criar
              relações duradouras com seus clientes, mantendo o cuidado
              e a atenção que fazem parte de sua história desde o primeiro
              dia.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Sobre;
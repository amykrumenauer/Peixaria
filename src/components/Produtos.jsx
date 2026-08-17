import React from 'react';
import './Produtos.css';
import peixaria from '../assets/peixaria.jpg';
import cardapioPDF from '../assets/cardapio.pdf';

const Produtos = () => {
  return (
    <section id="produtos" className="produtos">

      <div className="produtos-conteudo">

        <span className="produtos-tag">
          SABORES DO VALE
        </span>

        <h2 className="produtos-titulo">
          Conheça nossos produtos
        </h2>

        <p className="produtos-descricao">
          Descubra nossa variedade de pescados, camarões, frutos do mar
          e produtos coloniais, sempre selecionados com cuidado para
          levar qualidade e sabor para sua mesa.
        </p>

        <div className="produtos-destaque">

          <div className="produtos-imagem-container">
            <img
              src={peixaria}
              alt="Produtos da Peixaria & Empório do Vale"
              className="produtos-img"
            />
          </div>

          <div className="produtos-info">

            <h3>
              Qualidade em cada escolha
            </h3>

            <p>
              Trabalhamos com produtos selecionados para garantir
              frescor, sabor e qualidade em cada refeição.
            </p>

            <a
              href={cardapioPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cardapio"
            >
              Ver Cardápio em PDF
            </a>

            <p className="produtos-mensagem">
              <strong>
                Preços negociáveis para empresas e revendedores.
              </strong>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Produtos;
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">
        Peixaria & Empório do Vale
      </div>

      <button
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" onClick={closeMenu}>Home</a>
        </li>

        <li>
          <a href="#produtos" onClick={closeMenu}>Produtos</a>
        </li>

        <li>
          <a href="#sobre" onClick={closeMenu}>Sobre nós</a>
        </li>

        <li>
          <a href="#contato" onClick={closeMenu}>Contato</a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
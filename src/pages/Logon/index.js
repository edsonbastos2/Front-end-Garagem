import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import carro from '../../assets/carro.png';
import logoImg from '../../assets/logo.svg';

function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="" className="logoImg" />
        <form action="">
          <h1>Faça seu logon</h1>
          <input type="text" placeholder="Digite seu usuário" />
          <button type="submit" className="button">Entrar</button>
          <Link className="back-link" to="/cadastro">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={carro} alt="" className="banner-rigth" />
    </div>
  );
}

export default Logon;
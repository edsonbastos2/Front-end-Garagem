import React from 'react';
import LogoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';
import '../../global.css';
function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="container">
        <section>
          <img src={LogoImg} alt="" className="logoCad" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude a manter o controle</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form className="formCad">
          <input placeholder="Nome da Unidade"/>
          <input placeholder="Número da quadra"/>
          <input placeholder="Responsável"/>
          <input placeholder="Data Desejada"/>
          <input placeholder="Horario Desejado"/>
          <input placeholder="Operador"/>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Cadastro;
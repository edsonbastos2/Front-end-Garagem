import React from 'react'
import LogoImg from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiPower} from 'react-icons/fi'

import './style.css';
import '../../global.css';


function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img className="logoImg" src={LogoImg} alt="logo-padrao"/>
                <span>Bem vindo, Fulano</span>
                <Link className="button" to="/cadastro/new">Cadastro novo</Link>
                <button type="button"> <FiPower size={18} color="#E02041"/></button>
            </header>

            <h1>Agendamentos</h1>
            <ul>
                <li>
                    <strong>Nome da unidade: </strong>
                    <p>Nome teste</p>
                    <strong>Número da quadra: </strong>
                    <p>Nome teste</p>
                    <strong>Professor responsável: </strong>
                    <p>Nome teste</p>
                    <strong>Data desejada: </strong>
                    <p>Nome teste</p>
                    <strong>Horário desejado: </strong>
                    <p>Nome teste</p>
                    <strong>Operador: </strong>
                    <p>Nome teste</p>
                    
                </li>
                <li>
                    <strong>Nome da unidade: </strong>
                    <p>Nome teste</p>
                    <strong>Número da quadra: </strong>
                    <p>Nome teste</p>
                    <strong>Professor responsável: </strong>
                    <p>Nome teste</p>
                    <strong>Data desejada: </strong>
                    <p>Nome teste</p>
                    <strong>Horário desejado: </strong>
                    <p>Nome teste</p>
                    <strong>Operador: </strong>
                    <p>Nome teste</p>
                </li>
                <li>
                    <strong>Nome da unidade: </strong>
                    <p>Nome teste</p>
                    <strong>Número da quadra: </strong>
                    <p>Nome teste</p>
                    <strong>Professor responsável: </strong>
                    <p>Nome teste</p>
                    <strong>Data desejada: </strong>
                    <p>Nome teste</p>
                    <strong>Horário desejado: </strong>
                    <p>Nome teste</p>
                    <strong>Operador: </strong>
                    <p>Nome teste</p>
                </li>
                <li>
                    <strong>Nome da unidade: </strong>
                    <p>Nome teste</p>
                    <strong>Número da quadra: </strong>
                    <p>Nome teste</p>
                    <strong>Professor responsável: </strong>
                    <p>Nome teste</p>
                    <strong>Data desejada: </strong>
                    <p>Nome teste</p>
                    <strong>Horário desejado: </strong>
                    <p>Nome teste</p>
                    <strong>Operador: </strong>
                    <p>Nome teste</p>
                </li>
            </ul>
        </div>
    );
}

export default Profile;
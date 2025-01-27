import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-top"></div>
            <div className="header-content">
                <div className="logo">
                    <img src="/image5.jpeg" alt="Logo" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Pesquisar produtos" />
                    <button>Buscar</button>
                </div>
                <div className="user-options">
                    <a href="#login">Olá, faça seu login</a>
                    <a href="#carrinho">Carrinho</a>
                </div>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#ofertas">Ofertas do Dia</a></li>
                    <li><a href="#mais-vendidos">Mais Vendidos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

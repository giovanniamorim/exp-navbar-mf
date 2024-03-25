import React from 'react';
import './Navbar.css'; // Importando o arquivo CSS para estilos

function Navbar() {
  
  return (
    <>
      <nav className="navbar">
        <div className="logo">Experian</div>
        <ul className="navbar-nav">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/company">Company</a></li>
          <li className="nav-item"><a href="/catalog">Catalog</a></li>
          <li className="nav-item"><a href="/cart">Cart</a></li>
        <div >
          <input className="nav-search" type="text" placeholder="Search" />
        </div>
        </ul>
      </nav>
      
    </>
  );
}

export default Navbar;

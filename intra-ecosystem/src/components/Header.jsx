import React from 'react'
import {Link} from 'react-router-dom'
import '../css/header.css'

function Header() {
    return (
        <div>
            <header className="header">
           
                <Link className="logo" to="/">
                        INTRA
                </Link>
               
                   
                    <nav className="menu">
                    <ol>
                            <li><Link className="link_header"  to="/">Roadmap</Link></li>
                            <li><a className="link_header"  href="#about">PreSale</a></li>
                            <li><a className="link_header"  href="#Pricing" >DeFI</a></li>
                            <li><a className="link_header"  href="#Pricing" >About us</a></li>
                            <li><a className="link_header"  href="#Pricing" >Contac</a></li>
                        </ol>
                        <ol>
                            
                            <li><Link className="botones_pagina"  to="/signUp">conectar wallet</Link></li>

                        </ol>




                    </nav>

                

            
        </header>
        </div>
    )
}

export default Header

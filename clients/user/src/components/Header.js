import React from 'react';
import { Link } from "react-router-dom";

export default () => {
  return (
    <header className="header_area">
        <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container box_1620">
                    {/*<!-- Brand and toggle get grouped for better mobile display --> */}
                    <a className="navbar-brand logo_h" href="/"><img className="logo" src="/public/img/logo.png" alt=""/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {/*Collect the nav links, forms, and other content for toggling*/}
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul id="margin-bot-60" className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item"><a className="nav-link" href="/">Acceuil</a></li> 
                            <li className="nav-item"><a className="nav-link" href="/about-me">À propos</a></li> 
                            <li className="nav-item"><a className="nav-link" href="/works">Portfolio</a></li> 
                            <li className="nav-item"><a className="nav-link" href="/services">Services</a></li> 
                            <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>  
                            <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

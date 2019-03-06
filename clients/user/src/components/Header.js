import React from 'react';
import { Link } from "react-router-dom";

export default () => {
  return (
    <header class="header_area">
        <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container box_1620">
                    {/*<!-- Brand and toggle get grouped for better mobile display --> */}
                    <a class="navbar-brand logo_h" href="/"><img src="/public/img/logo.png" alt=""/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    {/*Collect the nav links, forms, and other content for toggling*/}
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><Link class="nav-link" to="/">Acceuil</Link></li> 
                            <li class="nav-item"><Link class="nav-link" to="/about-me">À propos</Link></li> 
                            <li class="nav-item"><Link class="nav-link" to="/works">Portfolio</Link></li> 
                            <li class="nav-item"><Link class="nav-link" to="/services">Services</Link></li> 
                            <li class="nav-item"><Link class="nav-link" to="/blog">Blog</Link></li>  
                            <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
    </header>
  )
}

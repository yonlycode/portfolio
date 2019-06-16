import React from 'react';
import { Link } from "react-router-dom";
import LogoutButton from '../../Buttons/Logout-Button/LogoutButton';

export default (props) => {
  return (
    <header className="header_area">
        <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container box_1620">
                    {/*<!-- Brand and toggle get grouped for better mobile display --> */}
                    <Link className="navbar-brand logo_h" to="/"><img className="logo" src="/public/img/logo.png" alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {/*Collect the nav links, forms, and other content for toggling*/}
                    <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                        <ul id="margin-bot-60" className="nav navbar-nav menu_nav ml-auto">
                            <li className="nav-item"><Link className="nav-link" to="">Acceuil</Link></li> 
                            <li className="nav-item"><Link className="nav-link" to="about-me">À propos</Link></li> 
                            <li className="nav-item"><Link className="nav-link" to="works">Portfolio</Link></li> 
                            <li className="nav-item"><Link className="nav-link" to="services">Services</Link></li> 
                            <li className="nav-item"><Link className="nav-link" to="blog">Blog</Link></li>  
                            <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
                            {
                                window.localStorage.getItem('token')!==null?<LogoutButton/>:""
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  )
}

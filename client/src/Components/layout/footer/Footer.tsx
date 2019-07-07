import React from 'react';
import NewsletterForm from '../../forms/Newsletter-Form/NewsletterForm';
import './style.css'

const Footer :React.SFC = () =>{
    let content = <>
        <footer className="footer_area p_120">

            <div className="container">                
                <div className="row footer_inner">
                    <div className="col-lg-5 col-sm-6">
                        <aside className="f_widget ab_widget">
                            <div className="f_title">
                                <h3>L'inspiration</h3>
                            </div>
                            <p>
                                Certaines personnes n’aiment pas le changement, mais il faut adopter le changement si la seule alternative est la catastrophe.
                                <br/>
                                -Elon Musk
                            </p>
                        </aside>
                    </div>
                    <div className="col-lg-5 col-sm-6">
                        <NewsletterForm/>
                    </div>
                    <div className="col-lg-2">
                        <aside className="f_widget social_widget">
                            <div className="f_title">
                                <h3>Me Suivre</h3>
                            </div>
                            <p>Soyons plus sociale</p>
                            <ul className="list">
                                <li>
                                    <a target="blank" href="https://www.facebook.com/yoannfortr">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li>
                                    <a target="blank" href="https://www.instagram.com/yonna__r/?hl=fr">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/yoann-fort-91b516155/">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        </footer>
        </>

    return content
} 

export default Footer
import React from 'react'

export default () => {
  return (
    <footer className="footer_area p_120">
        <div className="container">
            <div className="row footer_inner">
                <div className="col-lg-5 col-sm-6">
                    <aside className="f_widget ab_widget">
                        <div className="f_title">
                            <h3>L'inspiration</h3>
                        </div>
                        <p>Certaines personnes n’aiment pas le changement, mais il faut adopter le changement si la seule alternative est la catastrophe.<br/>
                        -Elon Musk</p>
                    </aside>
                </div>
                <div className="col-lg-5 col-sm-6">
                    <aside className="f_widget news_widget">
                        <div className="f_title">
                            <h3>Newsletter</h3>
                        </div>
                        <p>Envie de connaitre mes nouveauté ou d'être informé des dernière découvertes en matière d'optimisation de la croissance?</p>
                        <div id="mc_embed_signup">
                            <form target="_blank" action="" method="get" className="subscribe_form relative">
                                <div className="input-group d-flex flex-row">
                                    <input name="EMAIL" placeholder="Entrez votre adresse email" required="" type="email"></input>
                                    <button className="btn sub-btn">
                                        <i className="fas fa-envelope"></i>
                                    </button>	
                                </div>				
                                <div className="mt-10 info"></div>
                            </form>
                        </div>
                    </aside>
                </div>
                <div className="col-lg-2">
                    <aside className="f_widget social_widget">
                        <div className="f_title">
                            <h3>Me Suivre</h3>
                        </div>
                        <p>Soyons plus sociale</p>
                        <ul className="list">
                            <li><a target="blank" href="https://www.facebook.com/yoannfortr"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a target="blank" href="https://www.instagram.com/yonna__r/?hl=fr"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/yoann-fort-91b516155/"><i class="fab fa-linkedin"></i></a></li>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>
    </footer>
  )
}

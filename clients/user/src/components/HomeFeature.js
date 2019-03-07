import React from 'react'

export default () => {
  return (
    <section className="feature_area p_120">
        <div className="container">
            <div className="main_title">
                <h2>Quel Service est fait pour vous?</h2>
                <p>
                    Tout est réalisable mais êtes vous prêt a tout?<br/>
                    Je vous accompagne dans tout vos projets digitaux.
                </p>
            </div>
            <div className="feature_inner row">
                <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                        <i className="fas fa-hands-helping"></i>
                        <h4>Conseil</h4>
                        <p>Ecoute, analyse des besoins, recherche de solutions, Je suis à vos cotés pour bien gérer vos systèmes informatiques.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                        <i className="fab fa-whmcs"></i>
                        <h4>Création d'application</h4>
                        <p>Je crée des applications spécifiques a vos besoins pour optimiser votre temps de travail et automatiser au maximum les taches redondantes.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="feature_item">
                        <i className="fas fa-chart-bar"></i>
                        <h4>SEO & Growth Hacking</h4>
                        <p>J'accompagnement complêtement pour votre entreprise dans la démarche d'augmenter sa croissance et sa visibilité sur internet.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

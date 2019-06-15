import React from 'react'

export default () => {
  return (
    <section className="mytabs_area p_120">
        <div className="container">
            <div className="tabs_inner">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Expériences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Formations</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <ul className="list">
                            <li>
                                <span></span>
                                <div className="media">
                                    <div className="d-flex">
                                        <p>Mai 2018 à Juin 2018</p>
                                    </div>
                                    <div className="media-body">
                                        <h4>Développeur Web/Mobile</h4>
                                        <p>Helium-Technologies <br />Les Abymes, Guadeloupe</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span></span>
                                <div className="media">
                                    <div className="d-flex">
                                        <p>Juin 2017 à Août 2016</p>
                                    </div>
                                    <div className="media-body">
                                        <h4>Hôte d'acceuil</h4>
                                        <p>Office de Tourisme <br />Grand-Bourg, Marie-Galante</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <span></span>
                                <div className="media">
                                    <div className="d-flex">
                                        <p>2010 à Septembre 2015</p>
                                    </div>
                                    <div className="media-body">
                                        <h4>Serveur</h4>
                                        <p>Restaurant Le Refuge<br />Baie de Saint-Louis, Marie-Galante</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <ul className="list">
                            <li>
                                <span></span>
                                <div className="media">
                                    <div className="d-flex">
                                        <p>Octobre 2017 à Juin 2018</p>
                                    </div>
                                    <div className="media-body">
                                        <h4>Développeur Logiciel Bac +2</h4>
                                        <p>Simplon-Co<br />Grand-Bourg, Marie Galante</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <span></span>
                                <div className="media">
                                    <div className="d-flex">
                                        <p>Septembre 2016 à Juin 2017</p>
                                    </div>
                                    <div className="media-body">
                                        <h4>BTS Tourisme</h4>
                                        <p>Camas Formation <br />Z.I. de Jarry , Guadeloupe</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span></span>
                                <div className="media">
                                    <div className="d-flex">
                                        <p>année scolaire 2010-2014</p>
                                    </div>
                                    <div className="media-body">
                                        <h4>Baccalauréat Série L</h4>
                                        <p>Lycée H.Bastaraud <br />Grand-Bourg, Marie-Galante</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

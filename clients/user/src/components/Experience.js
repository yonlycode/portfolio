import React from 'react'

export default () => {
  return (
    <section class="mytabs_area p_120">
        <div class="container">
            <div class="tabs_inner">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Expériences</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Formations</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <ul class="list">
                            <li>
                                <span></span>
                                <div class="media">
                                    <div class="d-flex">
                                        <p>Mai 2018 à Juin 2018</p>
                                    </div>
                                    <div class="media-body">
                                        <h4>Développeur Web/Mobile</h4>
                                        <p>Helium-Technologies <br />Les Abymes, Guadeloupe</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span></span>
                                <div class="media">
                                    <div class="d-flex">
                                        <p>Juin 2017 à Août 2016</p>
                                    </div>
                                    <div class="media-body">
                                        <h4>Hôte d'acceuil</h4>
                                        <p>Office de Tourisme <br />Grand-Bourg, Marie-Galante</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <span></span>
                                <div class="media">
                                    <div class="d-flex">
                                        <p>2010 à Septembre 2015</p>
                                    </div>
                                    <div class="media-body">
                                        <h4>Serveur</h4>
                                        <p>Restaurant Le Refuge<br />Baie de Saint-Louis, Marie-Galante</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <ul class="list">
                            <li>
                                <span></span>
                                <div class="media">
                                    <div class="d-flex">
                                        <p>Octobre 2017 à Juin 2018</p>
                                    </div>
                                    <div class="media-body">
                                        <h4>Développeur Logiciel Bac +2</h4>
                                        <p>Simplon-Co<br />Grand-Bourg, Marie Galante</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                            <span></span>
                                <div class="media">
                                    <div class="d-flex">
                                        <p>Septembre 2016 à Juin 2017</p>
                                    </div>
                                    <div class="media-body">
                                        <h4>BTS Tourisme</h4>
                                        <p>Camas Formation <br />Z.I. de Jarry , Guadeloupe</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span></span>
                                <div class="media">
                                    <div class="d-flex">
                                        <p>année scolaire 2010-2014</p>
                                    </div>
                                    <div class="media-body">
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

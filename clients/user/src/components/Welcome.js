import React from 'react'

export default () => {
  return (
    <section className="welcome_area p_120">
        <div className="container">
            <div className="row welcome_inner">
                <div className="col-lg-6">
                    <div className="welcome_text">
                        <h4>À propos de moi: </h4>
                        <p>
                        Confucius disait que lorsque l'on aime ce que l'on fait ( prendre sincèrement du plaisir ) c'est comme ci qu'on ne travaille pas . Et
                        c'est cet énergie , ce karma là que je veux transmettre et véhiculer , avoir la foi et croire aussi en soi même , en restant
                        toujours respectueux , travailleur , humble et modeste quoi qu'il arrive .
                        </p>
                    {/* <div className="row">
                            <div className="col-md-4">
                                <div className="wel_item">
                                    <i className="lnr lnr-database"></i>
                                    <h4>$2.5M</h4>
                                    <p>Total Donation</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="wel_item">
                                    <i className="lnr lnr-book"></i>
                                    <h4>1465</h4>
                                    <p>Total Projects</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="wel_item">
                                    <i className="lnr lnr-users"></i>
                                    <h4>3965</h4>
                                    <p>Total Volunteers</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="tools_expert">
                        <div className="skill_main">
                        <h4>Compétences : </h4>
                            <div className="tagcloud">
                                <ul>
                                    <li><a href="#">NodeJs</a></li>
                                    <li><a href="#">PHP</a></li>
                                    <li><a href="#">Golang</a></li>
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Trello</a></li>
                                    <li><a href="#">ReactJs</a></li>
                                    <li><a href="#">VueJs</a></li>
                                    <li><a href="#">Bootstrap</a></li>
                                    <li><a href="#">React-Native</a></li>
                                    <li><a href="#">MongoDb</a></li>
                                    <li><a href="#">PostgreSQL</a></li>
                                    <li><a href="#">MySQL</a></li>
                                    <li><a href="#">Google Ads</a></li>
                                    <li><a href="#">Facebook Ads</a></li>
                                    <li><a href="#">Google Analytics</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

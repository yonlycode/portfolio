import React from 'react';
import Typed from 'react-typed';


export default () => {
  return (
      <section className="home_banner_area">
        <div className="container box_1620">
            <div className="banner_inner d-flex align-items-center">
                <div className="banner_content">
                    <div className="media">
                        <div className="d-flex">
                            <img src="/public/img/personal.jpg" alt=""/>
                        </div>
                        <div className="media-body">
                            <div className="personal_text">
                                <h6>Mon nom est :</h6>
                                <h3>Yoann FORT</h3>
                                <div id="typed">
                                    <Typed 
                                        strings={['JE SUIS']} 
                                        typeSpeed={50} 
                                    />
                                    <br/>

                                    <Typed 
                                    strings={[
                                        "Dévelopeur Web", "Growth Hacker","Passionné de Web "]}
                                        typeSpeed={70}
                                        backSpeed={80} 
                                        loop >
                                    </Typed>
                                </div>
                                <p>Vous serez étonné de ce dont le web est capable.</p>
                                <ul className="list basic_info">
                                    
                                    <li><a href="#"><i className="fas fa-at"></i> contact@eazys-dev.fr</a></li>
                                    <li><a href="#"><i className="fas fa-map-marker-alt"></i>Paris</a></li>
                                </ul>
                                <ul className="list personal_social">
                                    <li><a target="blank" href="https://www.facebook.com/yoannfortr"><i className="fab fa-facebook-square"></i></a></li>
                                    <li><a target="blank" href=""><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/yoann-fort-91b516155/"><i className="fab fa-linkedin"></i></a></li>
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

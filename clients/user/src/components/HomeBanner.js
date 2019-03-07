import React from 'react'

export default () => {
  return (
      <section class="home_banner_area">
        <div class="container box_1620">
            <div class="banner_inner d-flex align-items-center">
                <div class="banner_content">
                    <div class="media">
                        <div class="d-flex">
                            <img src="/public/img/personal.jpg" alt=""/>
                        </div>
                        <div class="media-body">
                            <div class="personal_text">
                                <h6>Mon nom est :</h6>
                                <h3>Yoann FORT</h3>
                                <h4>Developeur Web Junior </h4>
                                <p>Vous serez étonné de ce dont le web est capable.</p>
                                <ul class="list basic_info">
                                    <li><a href="#"><i class="fas fa-birthday-cake"></i> 17 Octobre 1996</a></li>
                                    <li><a href="#"><i class="fas fa-at"></i> contact@eazys-dev.fr</a></li>
                                    <li><a href="#"><i class="fas fa-map-marker-alt"></i>Paris</a></li>
                                </ul>
                                <ul class="list personal_social">
                                    <li><a target="blank" href="https://www.facebook.com/yoannfortr"><i class="fab fa-facebook-square"></i></a></li>
                                    <li><a target="blank" href=""><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/yoann-fort-91b516155/"><i class="fab fa-linkedin"></i></a></li>
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

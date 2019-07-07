import React from 'react'

export default () => {
  return (
    <section className="home_gallery_area p_120">
        <div className="container">
            <div className="main_title">
                <h2>Mes Derniers Projets :</h2>
                <p>Encore des doutes? Laissez-vous convaincre ...</p>
            </div>
            <div className="isotope_fillter">
                <ul className="gallery_filter list">
                    <li className="active" data-filter="*"><a>All</a></li>
                    <li data-filter=".brand"><a>Vector</a></li>
                    <li data-filter=".manipul"><a>Raster</a></li>
                    <li data-filter=".creative"><a>UI/UX</a></li>
                    <li data-filter=".design"><a>Printing</a></li>
                </ul>
            </div>
        </div>
        <div className="container">
            <div className="gallery_f_inner row imageGallery1">
                <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design print">
                    <div className="h_gallery_item">
                        <div className="g_img_item">
                            <img className="img-fluid" src="/public/img/gallery/project-1.jpg" alt=""/>
                            <a className="light" href="/public/img/gallery/project-1.jpg"><img src="/public/img/gallery/icon.png" alt=""/></a>
                        </div>
                        <div className="g_item_text">
                            <h4>3D Helmet Design</h4>
                            <p>Client Project</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 brand manipul creative">
                    <div className="h_gallery_item">
                        <div className="g_img_item">
                            <img className="img-fluid" src="/public/img/gallery/project-2.jpg" alt=""/>
                            <a className="light" href="/public/img/gallery/project-2.jpg"><img src="/public/img/gallery/icon.png" alt=""/></a>
                        </div>
                        <div className="g_item_text">
                            <h4>2D Vinyl Design</h4>
                            <p>Client Project</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 manipul creative design print">
                    <div className="h_gallery_item">
                        <div className="g_img_item">
                            <img className="img-fluid" src="/public/img/gallery/project-3.jpg" alt=""/>
                            <a className="light" href="/public/img/gallery/project-3.jpg"><img src="/public/img/gallery/icon.png" alt=""/></a>
                        </div>
                        <div className="g_item_text">
                            <h4>Creative Poster Design</h4>
                            <p>Client Project</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 brand creative print">
                    <div className="h_gallery_item">
                        <div className="g_img_item">
                            <img className="img-fluid" src="/public/img/gallery/project-4.jpg" alt=""/>
                            <a className="light" href="/public/img/gallery/project-4.jpg"><img src="/public/img/gallery/icon.png" alt=""/></a>
                        </div>
                        <div className="g_item_text">
                            <h4>Embosed Logo Design</h4>
                            <p>Client Project</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 brand manipul design">
                    <div className="h_gallery_item">
                        <div className="g_img_item">
                            <img className="img-fluid" src="/public/img/gallery/project-5.jpg" alt=""/>
                            <a className="light" href="/public/img/gallery/project-5.jpg"><img src="/public/img/gallery/icon.png" alt=""/></a>
                        </div>
                        <div className="g_item_text">
                            <h4>3D Disposable Bottle</h4>
                            <p>Client Project</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 brand creative">
                    <div className="h_gallery_item">
                        <div className="g_img_item">
                            <img className="img-fluid" src="/public/img/gallery/project-6.jpg" alt=""/>
                            <a className="light" href="/public/img/gallery/project-6.jpg"><img src="/public/img/gallery/icon.png" alt=""/></a>
                        </div>
                        <div className="g_item_text">
                            <h4>3D Logo Design</h4>
                            <p>Client Project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more_btn">
                <a className="main_btn" href="#">Load More Items</a>
            </div>
        </div>
    </section>
  )
}

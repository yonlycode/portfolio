import React from 'react'

export default (props) => {
  return (
    <section className="banner_area">
        <div className="box_1620">
            <div className="banner_inner d-flex align-items-center">
                <div className="container">
                    <div className="banner_content text-center">
                        <h2>{props.CurrentPage} </h2>
                        {props.CurrentPage!="Home"?<div className="page_link">
                            <a href="/">Home</a>
                            <a href={"/#/"+props.CurrentUri}>{props.CurrentPage}</a> </div>:<span></span>}                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

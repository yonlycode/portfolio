import React from 'react'

export default (props) => {
  return (
    <section class="banner_area">
        <div class="box_1620">
            <div class="banner_inner d-flex align-items-center">
                <div class="container">
                    <div class="banner_content text-center">
                        <h2>{props.CurrentPage} </h2>
                        {props.CurrentPage!="Home"?<div class="page_link">
                            <a href="/">Home</a>
                            <a href={"/#/"+props.CurrentUri}>{props.CurrentPage}</a> </div>:<span></span>}                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

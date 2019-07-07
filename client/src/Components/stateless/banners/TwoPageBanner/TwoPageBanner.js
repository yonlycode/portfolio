import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Logo from "../../../../assets/img/logo.png"

 const TwoPageBanner = (props) => {
  return (
    <section className="home_banner_area">
        <div className="container box_1620" style={{display:"flex",flexDirection:"column",alignItems:"center"}}> 
            <img style={{maxHeight:"150px"}} src={Logo} alt="website logo" />

            <h3>{props.title}</h3>
            <Breadcrumb tag="nav" listTag="div" >
                <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                <BreadcrumbItem tag="a" href={"/"+props.currentUri}>{props.currentUri}</BreadcrumbItem>
            </Breadcrumb> 
        </div>
    </section>
  )
}

export default React.memo(TwoPageBanner);
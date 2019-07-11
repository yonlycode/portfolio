import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


interface props {
    title :string,
    links :{
        label :string,
        uri :string
    }[],
};

const Banner = (props:props) :React.FunctionComponentElement<props> => {
    let content = <>
        <section className="home_banner_area">
            <div className="container box_1620" style={{display:"flex",flexDirection:"column",alignItems:"center"}}> 
                <img style={{maxHeight:"150px"}} src={"/logo.png"} alt="website logo" />
                <h3>{props.title}</h3>
                <Breadcrumb tag="nav" listTag="div" >
                    {props.links.map((val , key)=>{
                        return <>
                            <BreadcrumbItem tag="a" key={key} href={val.uri}>{val.label}</BreadcrumbItem>

                        </>
                    })}
                </Breadcrumb> 
            </div>
        </section>
    </>
    return content
}
export default React.memo(Banner)
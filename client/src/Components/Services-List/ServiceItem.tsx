import React from 'react';

interface props{
    data :{
        icon :string,
        title :string,
        text :string
    }
}

const ServiceItem = (props :props) :React.FunctionComponentElement<props> =>{
    const { icon ,title,text } = props.data;
    
    let content = <div className="col-lg-4 col-md-6">
        <div className="feature_item" style={{height:"350px",overflow:"hidden"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <i className={icon}></i>
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>;

    return content;
}
export default ServiceItem;

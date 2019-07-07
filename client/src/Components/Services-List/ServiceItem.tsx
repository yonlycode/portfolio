import React from 'react';

interface props{
    data :{
        icons :string,
        title :string,
        text :string
    }
}

const ServiceItem = (props :props) :React.FunctionComponentElement<props> =>{
    const { icons ,title,text } = props.data;
    
    let content = <div className="col-lg-4 col-md-6">
        <div className="feature_item" style={{height:"350px",overflow:"hidden"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <i className={icons}></i>
            </div>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>;

    return content;
}
export default ServiceItem;

import React from 'react';
import ServiceItem from './ServiceItem';
import "./style.css";


interface props{
    data :{
        icon :string,
        title :string,
        text :string
    }[]
}

const ServiceList = (props:props) :React.FunctionComponentElement<props>=> {
    let content = <div className="feature_inner row">
        {
            props.data.map((val, i )=>{
                return <ServiceItem key={i} data={val}/>
            })
        }
    </div>

    return content;
}

export default ServiceList
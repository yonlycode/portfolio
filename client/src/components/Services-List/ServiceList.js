import React from 'react';
import ServiceItem from './ServiceItem';
import "./style.css";


export default function ServiceList({data}) {
    return (
        <div className="feature_inner row">
            {
                data.map((val , i )=>{
                    return <ServiceItem key={i} data={val}/>
                })
            }
        </div>
    )
}

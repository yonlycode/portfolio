import React from 'react';

export default function ServiceItem({data}) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="feature_item" style={{height:"350px",overflow:"hidden"}}>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <i className={data.icons}></i>
                </div>
                <h4>{data.title}</h4>
                <p>{data.text}</p>
            </div>
        </div>
    )
}

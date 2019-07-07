import React from 'react'
import { Spinner } from 'reactstrap';

const ActivityIndicator = () :React.FunctionComponentElement<{}> =>{
    let content = <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"60vw"}}>
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="info" />
    </div>

    return content;
}
export default ActivityIndicator;

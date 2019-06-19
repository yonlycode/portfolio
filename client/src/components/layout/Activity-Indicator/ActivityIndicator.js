import React from 'react'
import { Spinner } from 'reactstrap';

export default function ActivityIndicator() {
    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"60vw"}}>
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="info" />
            <Spinner type="grow" color="info" />
        </div>
    )
}

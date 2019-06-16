import React from 'react';
import { Button } from 'reactstrap';

const handleLogout = ()=>{
    window.localStorage.removeItem('token')
    window.location.reload();
}
export default function LogoutButton() {
    console.log(window.localStorage.getItem('token'))
    return (
        <Button onClick={handleLogout}>
            Déconnection
        </Button>
    )
}

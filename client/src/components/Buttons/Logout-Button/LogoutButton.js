import React from 'react';
import { Button } from 'reactstrap';

const handleLogout = ()=>{
    window.localStorage.removeItem('token')
    window.location.reload();
}

export default function LogoutButton() {
    return (
        <Button onClick={handleLogout}>
            Déconnection
        </Button>
    )
}

import React from 'react';
import { Button } from 'reactstrap';

const handleLogout = ()=>{
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('mail')
    window.location.reload();
}
export {handleLogout}
export default function LogoutButton() {
    return (
        <Button onClick={handleLogout}>
            Déconnection
        </Button>
    )
}

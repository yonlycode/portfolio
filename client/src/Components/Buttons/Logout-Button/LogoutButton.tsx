import React from 'react';
import { Button } from 'reactstrap';
import HandleDisconnection from '../../../Auth/HandleDisconnection';

const LogoutButton = () => {
    let content = <>
        <Button onClick={HandleDisconnection}>
            Déconnection
        </Button>
    </>
    return content
}
export default LogoutButton
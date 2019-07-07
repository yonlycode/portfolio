import React from 'react';
import { Button } from 'reactstrap';
import HandleDisconnection from '../../../Auth/HandleDisconnection';

export default function LogoutButton() {
    return (
        <Button onClick={HandleDisconnection}>
            Déconnection
        </Button>
    )
}

import React, { useState } from 'react'
import { Button, Col, FormGroup, Label, Input } from 'reactstrap';

import Axios from 'axios';
import { isValidMail } from '../../../utils/isValidMail';
import GetToken from '../../../Auth/GetToken';


const NewAdminForm = () :React.FunctionComponentElement<{}>=>{

    const [isCreated, setIsCreated] = useState(false);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const CreateNewAdmin = () =>{
        if(isValidMail(mail)){
            let data = {
                mail : mail,
                password:password
            }
            Axios.post('/api/admin',data,{
                headers:{'Authorization':"Bearer "+GetToken()}
            })
            .catch(e=>{
                setErrorMsg(e)
            })
            .then(res=>{
                window.location.reload()
            })
        }else{
            setErrorMsg("entrez une adresse mail valide")
        }
    }
    
    let content = <>
        <FormGroup row>
            <Label for="newadminmail" sm={2}>Email</Label>
            <Col sm={10}>
                <Input type="email" name="email" value={mail} onChange={e=>setMail(e.target.value)}  id="newadminmail" placeholder="************" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="newuserpassword" sm={2}>password</Label>
            <Col sm={10}>
                <Input type="password" name="newuserpassword" value={password} onChange={e=>setPassword(e.target.value)} id="newuserpassword" placeholder="************" />
            </Col>
        </FormGroup>
        <Button color="success" onClick={CreateNewAdmin}>Créer</Button>
    </>

    return content;
}

export default NewAdminForm;


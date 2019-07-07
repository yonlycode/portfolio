import React, { useState } from 'react'
import { Button, Col, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { isValidMail } from '../../../utils/isValidMail';
import { useHttpPost } from '../../../Hooks/useHttp';


const NewAdminForm = () :React.FunctionComponentElement<{}>=>{
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");


    const [ isSending, sendRequest, response, error] = useHttpPost('/api/admin', {mail : mail, password:password},[],true)


    const CreateNewAdmin = () =>{
        if(isValidMail(mail)){
           sendRequest();
            window.location.reload();
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
        <div className="center">
            <Button color={isSending?"primary":"success"} onClick={CreateNewAdmin}>{isSending?<Spinner/>:"Créer"}</Button>
        </div>
        
    </>

    return content;
}

export default NewAdminForm;


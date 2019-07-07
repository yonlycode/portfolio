import React, { useState , useEffect } from 'react'
import { Col, Button, FormGroup, Label, Input, Spinner } from 'reactstrap';
import { isValidMail } from '../../../utils/isValidMail';
import GetAdminId from '../../../Auth/GetAdminId';
import { useHttpPut } from '../../../Hooks/useHttp';

interface props{
    data :{
        _id:string,
        firstName:string,
        lastName:string,
        password:string,
        job:string,
        description:string,
        birthdate:string,
        mail:string,
        localisation:string,
        created:string
    },
}

interface payload {
    _id:string,
    firstName:string,
    lastName:string,
    password:string,
    job:string,
    description:string,
    birthdate:string,
    mail:string,
    localisation:string,
    created:string
}


const AccountAdminForm = ( props :props ) :React.FunctionComponentElement<props> =>{

    /* 
        hooks for form values
    */
    const [ id, setId ] = useState("");
    const [ firstName , setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");
    const [ password, setPassword  ] = useState("");
    const [ job, setJob ] = useState("");
    const [ description, setDescription] = useState("");
    const [ birthdate, setBirthdate ] = useState("");
    const [ mail, setMail] = useState("");
    const [ localisation, setLocalisation] = useState("");
    const [ passConfirm, setPassConfirm] = useState("");
    const [ created, setCreated] = useState("");


    //onReceiveProps
    useEffect(()=>{
        setId(props.data._id)
        setFirstName(props.data.firstName);
        setLastName(props.data.lastName);
        setPassword(props.data.password);
        setPassConfirm(props.data.password);
        setJob(props.data.job);
        setDescription(props.data.description);
        setBirthdate(props.data.birthdate);
        setMail(props.data.mail);
        setLocalisation(props.data.localisation);
        setCreated(props.data.created);
    },[props])


    //this function return an object with the payload for useHttpPut hook
    const payload = () :payload=>{
        return{
            _id:id,
            firstName: firstName,
            lastName: lastName,
            password: password,
            job: job,
            description: description,
            birthdate: birthdate,
            mail: mail,
            localisation: localisation,
            created :created
        }
    } 

    const [ isSending, sendRequest, response, error] = useHttpPut("/api/admin/"+GetAdminId(),payload(),[payload()],true)
    const updateAdmin=()=>{
        //check form values
        if( isValidMail(mail) && passConfirm === password ){

            //send response and log request
            sendRequest();
            if(error){
                console.log(error)
            }
        }else{
            //need to display error message here
        }
    }

    //render form here
    let content = <>
        <FormGroup row>
            <Col md={6}>
                <FormGroup>
                <Label for="lastName">Nom</Label>
                <Input onChange={(e)=>setLastName(e.target.value)} type="text" name="lastName" id="lastNameInput" placeholder="Nom" value={lastName} onClick={(e)=>{}} />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                <Label for="firstName">Prénom</Label>
                <Input type="text" onChange={(e)=>setFirstName(e.target.value)} value={firstName} name="firstName" id="firstNameInput" placeholder="prénom" />
                </FormGroup>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Col md={6}>
                <FormGroup>
                <Label for="password">Mot de passe</Label>
                <Input type="password" onChange={e=>setPassword(e.target.value)}
                value={password} name="password" id="passwordInput" placeholder="mot de passe" />
                </FormGroup>
            </Col>
            <Col md={6}>
                <FormGroup>
                <Label for="passwordConfirm">Confirmation</Label>
                <Input type="password" 
                value={passConfirm} onChange={(e)=>setPassConfirm(e.target.value)} name="passwordConfirm" id="passwordConfirmInput" placeholder="confirmer le mot de passe" />
                </FormGroup>
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="examplePassword" sm={2}>Mail</Label>
            <Col sm={10}>
                <Input 
                value={mail} onChange={(e)=>setMail(e.target.value)} type="email" name="mail" id="mailInput" placeholder="Mail" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="job" sm={2}>Date de naissance</Label>
            <Col sm={10}>
                <Input type="date" name="birthdate" onChange={(e)=>setBirthdate(e.target.value)} value={birthdate} id="birthdateInput" placeholder="password placeholder" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="job" sm={2}>Poste</Label>
            <Col sm={10}>
                <Input type="text" name="job" value={job} onChange={(e)=>setJob(e.target.value)} id="jobInput" placeholder="password placeholder" />
            </Col>
        </FormGroup>
        <FormGroup row>
            <Label for="localisation" sm={2}>Localisation</Label>
            <Col sm={10}>
                <Input type="text" name="localisation" onChange={(e)=>setLocalisation(e.target.value)}  value={localisation} id="localisationInput" placeholder="Localisation" />
            </Col>
        </FormGroup>
        <FormGroup row>
        <Label for="exampleText" sm={2}>Bio</Label>
            <Col sm={10}>
                <Input value={description} onChange={(e)=>setDescription(e.target.value)} type="textarea" name="text" id="exampleText" />
            </Col>
        </FormGroup>
        <FormGroup check row>
        <Col sm={{ size: 2, offset: 5 }}>
            <Button color="success" onClick={updateAdmin}>{isSending?<Spinner/>:"Modifier"}</Button>
        </Col>
        </FormGroup>
    </>

    return content;
}

export default AccountAdminForm;
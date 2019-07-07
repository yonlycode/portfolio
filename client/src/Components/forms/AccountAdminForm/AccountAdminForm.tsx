import React, { useState , useEffect } from 'react'
import { Col, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import Axios from 'axios';
import { isValidMail } from '../../../utils/isValidMail';
import GetToken from '../../../Auth/GetToken';

interface props{
    data? :{
        _id:"",
        firstName: "",
        lastName: "",
        password: "",
        job: "",
        description: "",
        birthdate: "",
        mail: "",
        localisation: "",
        created:""
    },
}
const AccountAdminForm = ( props :props ) :React.FunctionComponentElement<props> =>{
    const [ id, setId ] = useState("");
    const [ firstName , setFirstName] = useState("");
    const [ lastName, setLastName] = useState("");
    const [ password, setPassword  ] = useState("");
    const [ job, setJob ] = useState("");
    const [ description, setDescription] = useState("");
    const [ birthdate, setBirthdate ] = useState("");
    const [ mail, setMail] = useState("");
    const [ localisation, setLocalistion] = useState("");
    const [ passConfirm, setPassConfirm] = useState("");
    const [ errorMsg, setErrorMsg] = useState("");
    const [ created, setCreated] = useState("")

    useEffect(()=>{
        if(props.data){
            const {_id , firstName, lastName, password, job, description, birthdate, mail, localisation, created} = props.data;

            setId(_id);
            setFirstName(firstName);
            setLastName(lastName);
            setPassword(password);
            setPassConfirm(password);
            setJob(job);
            setDescription(description);
            setBirthdate(birthdate);
            setMail(mail);
            setLocalistion(localisation);
            setCreated(created)
        }

    },[props])
    const updateAdmin=()=>{
        //check form values
        if( isValidMail(mail) && passConfirm === password ){
            //create the new user data
            let data = {
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

            //request here
            Axios({
                method: 'put',
                url: '/api/admin/'+window.localStorage.getItem("adminId"),
                headers:{'Authorization':"Bearer "+GetToken() },
                data: data
            })
            .then((res)=>{
                //refresh infos
            })
            .catch(e=>{
                alert(e)
            })
        }else{
            //if form isn't valid
            setErrorMsg("found a problem in form, can't send it")
        }
    }


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
                <Input type="text" name="localisation" onChange={(e)=>setLocalistion(e.target.value)}  value={localisation} id="localisationInput" placeholder="Localisation" />
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
            <Button color="success" onClick={updateAdmin}>Modifier</Button>
        </Col>
        </FormGroup>
    </>

    return content;
}

export default AccountAdminForm;
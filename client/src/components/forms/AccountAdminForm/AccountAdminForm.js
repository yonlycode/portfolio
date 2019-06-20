import React, { Component } from 'react'
import { Col, Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import Axios from 'axios';
import { isValidMail } from '../../../utils/isValidMail';

export default class AccountAdminForm extends Component {
    constructor(props){
        super(props);
        this.state={
            //form values
            _id:"",
            firstName: "",
            lastName: "",
            password: "",
            job: "",
            description: "",
            birthdate: "",
            mail: "",
            localisation: "",
            passConfirm:"",

            errorMsg:null
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            _id:props.data._id,
            firstName: props.data.firstName,
            lastName: props.data.lastName,
            password: props.data.password,
            passConfirm:props.data.password,
            job: props.data.job,
            description: props.data.description,
            birthdate: props.data.birthdate,
            mail: props.data.mail,
            localisation: props.data.localisation,
        })
    }

    updateAdmin=()=>{
        //check form values
        if( isValidMail(this.state.mail) && this.state.passConfirm === this.state.password ){
            //create the new user data
            let data = {
                _id:this.state._id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                password: this.state.password,
                job: this.state.job,
                description: this.state.description,
                birthdate: this.state.birthdate,
                mail: this.state.mail,
                localisation: this.state.localisation,
            }

            //request here
            Axios({
                method: 'put',
                url: '/api/admin/'+window.localStorage.getItem("adminId"),
                headers:{'Authorization':"Bearer "+window.localStorage.getItem("token") },
                data: data
            })
            .catch(e=>{
                alert(e)
            })
            .then((res)=>{
                //refresh infos
                this.props.onSuccess()
            })
        }else{
            //if form isn't valid
            this.setState({
                errorMsg:"found a problem in form, can't send it"
            })
        }
    }
    
    render() {
        //console.log(this.state)
        const { firstName, lastName, job, password, passConfirm, description, birthdate, mail, localisation } = this.state

        return (
                <div> 
                    <FormGroup row>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="lastName">Nom</Label>
                            <Input onChange={(e)=>this.setState({
                                lastName:e.target.value
                            })} type="text" name="lastName" id="lastNameInput" placeholder="Nom" value={lastName} onClick={(e)=>{}} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="firstName">Prénom</Label>
                            <Input type="firstName" onChange={(e)=>this.setState({
                                firstName:e.target.value
                            })} value={firstName} name="firstName" id="firstNameInput" placeholder="prénom" />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="password">Mot de passe</Label>
                            <Input type="password" onChange={(e)=>this.setState({
                                password:e.target.value
                            })}
                            value={password} name="password" id="passwordInput" placeholder="mot de passe" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                            <Label for="passwordConfirm">Confirmation</Label>
                            <Input type="password" 
                            value={passConfirm} onChange={(e)=>this.setState({
                                passConfirm:e.target.value
                            })} name="passwordConfirm" id="passwordConfirmInput" placeholder="confirmer le mot de passe" />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Mail</Label>
                        <Col sm={10}>
                            <Input 
                            value={mail} onChange={(e)=>this.setState({
                                mail:e.target.value
                            })}type="mail" name="mail" id="mailInput" placeholder="Mail" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="job" sm={2}>Date de naissance</Label>
                        <Col sm={10}>
                            <Input type="date" name="birthdate" onChange={(e)=>this.setState({
                                birthdate:e.target.value
                            })} value={birthdate} id="birthdateInput" placeholder="password placeholder" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="job" sm={2}>Poste</Label>
                        <Col sm={10}>
                            <Input type="text" name="job" value={job} onChange={(e)=>this.setState({
                                job:e.target.value
                            })} id="jobInput" placeholder="password placeholder" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="localisation" sm={2}>Localisation</Label>
                        <Col sm={10}>
                            <Input type="text" name="localisation" onChange={(e)=>this.setState({
                                localisation:e.target.value
                            })}  value={localisation} id="localisationInput" placeholder="Localisation" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                    <Label for="exampleText" sm={2}>Bio</Label>
                        <Col sm={10}>
                            <Input value={description} onChange={(e)=>this.setState({
                                description:e.target.value
                            })} type="textarea" name="text" id="exampleText" />
                        </Col>
                    </FormGroup>
                    <FormGroup check row>
                    <Col sm={{ size: 2, offset: 5 }}>
                        <Button onClick={this.updateAdmin}>Modifier</Button>
                    </Col>
                    </FormGroup>
            </div>)
    }
}

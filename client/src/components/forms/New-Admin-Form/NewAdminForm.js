import React, { Component } from 'react'
import { Button, Col, FormGroup, Label, Input } from 'reactstrap';

import Axios from 'axios';
import { isValidMail } from '../../../utils/isValidMail';

export default class NewAdminForm extends Component {
    constructor(props){
        super(props);
        this.state={
            isCreated:false,
            mail:"",
            password:""
        }
    }

    CreateNewAdmin=()=>{
        if(isValidMail(this.state.mail)){
            let data = {
                mail : this.state.mail,
                password:this.state.password
            }
            Axios.post('/api/admin',data,{
                headers:{'Authorization':"Bearer "+window.localStorage.getItem("token") }
            })
            .catch(e=>{
                this.setState({
                    errorMsg:e
                })
            })
            .then(res=>{
                window.location.reload()
            })
        }else{
            this.setState({
                errorMsg: "entrez une adresse mail valide"
            })
        }
    }
    render() {
        const { mail , password , errorMsg} = this.state
        return (
                <div>

                    <FormGroup row>
                        <Label for="newadminmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="email" name="email" value={mail} onChange={e=>{
                                this.setState({
                                    mail:e.target.value
                                })
                            }}  id="newadminmail" placeholder="************" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="newuserpassword" sm={2}>password</Label>
                        <Col sm={10}>
                            <Input type="password" name="newuserpassword" value={password} onChange={e=>{
                                this.setState({
                                    password:e.target.value
                                })
                            }} id="newuserpassword" placeholder="************" />
                        </Col>
                    </FormGroup>
                    <Button color="primary" onClick={this.CreateNewAdmin}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>

                </div>
        )
    }
}


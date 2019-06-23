import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Axios from 'axios';

export default class NewSkillForm extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            info:"",
            firepost:true,

            errorMsg:null,

        }
    }
    handleCreateTag=()=>{
        //create the new user data
        let data = {
            name: this.state.name,
            info: this.state.info,
            firepost: this.state.firepost,
        }

        //request here
        Axios({
            method: 'post',
            url: '/api/skill',
            headers:{'Authorization':"Bearer "+window.localStorage.getItem("token") },
            data: data
        })
        .catch(e=>{
            this.setState({
                errorMsg:e
            })
        })
        .then((res)=>{
            this.cleanForm()
            this.props.onCreate()
        })
        
    }

    toogleFirepost=()=>this.setState(prevState=>{
        return{
            firepost:!prevState.firepost
        }
    })

    cleanForm=()=>{
        this.setState({
            name:"",
            info:"",
            firepost:true,
        })
    }

    render() {
        console.log(this.state)
        const {name, info,firepost} = this.state
        return (
            <div className="container">
                <br/><br/><br/><br/>
                <h3 style={{textAlign:"center"}}>
                    <strong> Nouveau Tag</strong>
                </h3>
                
                <br/>
                <Row form>
                    <Col md={12}>
                        <FormGroup row>
                            <Label for="nameinput" sm={2}>nom</Label>
                            <Col sm={10}>
                                <Input type="text"
                                value={name} onChange={e=>this.setState({
                                    name:e.target.value
                                })} name="name" id="nameinput" placeholder="nom" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup row>
                            <Label for="infoinput" sm={2}>info</Label>
                            <Col sm={10}>
                                <Input type="textarea" value={info} onChange={e=>this.setState({
                                    info:e.target.value
                                })} name="info" id="infoinput" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <Button color={firepost?"success":"warning"} onClick={this.toogleFirepost} size="lg" block>
                                {firepost?"visible":"invisible"}
                        </Button>
                    </Col>
                </Row>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100px"}}>
                    <Button onClick={this.handleCreateTag} color="success">
                        Créer
                    </Button>
                </div>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';

export default class NewServiceForm extends Component {
    constructor(props){
        super(props)
        this.state={
            id:"",
            name:"",
            info:"",
            created:"",
            firepost:true,

            errorMsg:null,

        }
    }

    componentDidMount(){
        this.setState({
            id:this.props.data._id,
            name:this.props.data.name,
            info:this.props.data.info,
            firepost:this.props.data.firepost,
            created:this.props.data.created
        })
    }


    handleCreateTag=()=>{
        //create the new user data
        let data = {
            _id:this.state.id,
            name: this.state.name,
            info: this.state.info,
            firepost: this.state.firepost,
            created:this.state.created
        }

        //request here
        Axios({
            method: 'put',
            url: '/api/skill/'+this.state.id,
            headers:{'Authorization':"Bearer "+window.localStorage.getItem("token") },
            data: data
        })
        .catch(e=>{
            this.setState({
                errorMsg:e
            })
        })
        .then((res)=>{
            this.props.onUpdate()
            this.props.onClose()
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
        const {name, info,firepost} = this.state
        return (
            <div className="container">
                <br/>                
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
                    <Button onClick={this.handleCreateTag} color="warning">
                        Modifier
                    </Button>
                </div>
                
            </div>
        )
    }
}

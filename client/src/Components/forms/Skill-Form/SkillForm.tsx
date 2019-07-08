import React, { useState, useEffect } from 'react'
import { Col, Row, Button, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';
import GetToken from '../../../Auth/GetToken';

interface props {
    onCreate? :CallableFunction,
    onUpdate? :CallableFunction,
    onClose? :CallableFunction,
    data? : {
        _id :string,
        name :string,
        info :string,
        created :string,
        firepost :boolean,
    }
}
const SkillForm = (props :props) :React.FunctionComponentElement<{props:props}>=> {
    const [id , setId] = useState("");
    const [name , setName] = useState("");
    const [info , setInfo] = useState("");
    const [firepost, setFirepost] = useState(true);
    const [created, setCreated] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
   
    useEffect(()=>{
        if(props.data){
            const { _id, name, info, firepost, created } = props.data;
            setId(_id)
            setName(name);
            setInfo(info);
            setFirepost(firepost);
            setCreated(created);
        }
    },[props.data])

    const handleCreateTag=()=>{
        if(props.data){
            //update skill data
        let data = {
            _id:id,
            name: name,
            info: info,
            firepost: firepost,
            created:created
        }

        //request here
        Axios({
            method: 'put',
            url: '/api/skill/'+id,
            headers:{'Authorization':"Bearer "+GetToken() },
            data: data
        })
        
        .then((res)=>{
            if(props.onUpdate && props.onClose){
                props.onUpdate();
                props.onClose();
            }
        })
        .catch(e=>{
            setErrorMsg(e)
        })
        
        }else{
            //create the new skill
            let data = {
                name: name,
                info: info,
                firepost: firepost,
            }
            //request here
            Axios({
                method: 'post',
                url: '/api/skill',
                headers:{'Authorization':"Bearer "+GetToken()},
                data: data
            })
            .then((res)=>{
                cleanForm();
                if(props.onCreate){
                    props.onCreate();
                }
            })
            .catch(e=>{
                setErrorMsg(e);
            })
        }
        
    }

    const toogleFirepost=()=>setFirepost(!firepost)

    const cleanForm=()=>{
        setName("");
        setInfo("");
        setFirepost(true);
    }

    let content = <div className="container">
        <br/><br/><br/> 
        <h3 style={{textAlign:"center"}}>
            <strong>{props.onCreate?"Nouveau tag":""}</strong>
        </h3> 
        <br/>
        <Row>
            <Col md={12}>
                <FormGroup row>
                    <Label for="nameinput" sm={2}>nom</Label>
                    <Col sm={10}>
                        <Input type="text"
                        value={name} onChange={(e)=>setName(e.target.value)} name="name" id="nameinput" placeholder="nom" />
                    </Col>
                </FormGroup>
            </Col>
            <Col md={12}>
                <FormGroup row>
                    <Label for="infoinput" sm={2}>info</Label>
                    <Col sm={10}>
                        <Input type="textarea" value={info} onChange={e=>setInfo(e.target.value)} name="info" id="infoinput" />
                    </Col>
                </FormGroup>
            </Col>
            <Col md={12}>
                <Button color={firepost?"success":"warning"} onClick={toogleFirepost} size="lg" block>
                        {firepost?"visible":"invisible"}
                </Button>
            </Col>
        </Row>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100px"}}>
            <Button onClick={handleCreateTag} color="success">
                Créer
            </Button>
        </div>
    </div>

    return content

}

export default SkillForm

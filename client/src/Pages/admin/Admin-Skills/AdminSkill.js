import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

import ActivityIndicator from '../../../Components/layout/Activity-Indicator/ActivityIndicator'
import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';
import Axios from 'axios';
import AdminSkillList from '../../../Components/Admin/Admin-Skill-List/AdminSkillList';
import SkillForm from '../../../Components/forms/Skill-Form/SkillForm';
import NoRessourceFounded from '../../../Components/layout/No-Ressource-Founded/NoRessourceFounded';
import AdminSkillNav from '../../../Components/Admin/Admin-Skill-List/AdminSkillNav';
import ComponentModal from '../../../Components/modals/ComponentModal';
import HandleDisconnection from '../../../Auth/HandleDisconnection';


export default class AdminSkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
          skills:[],
          error:false,
          selectedSkill:null,
          searchInput:""
        };
    }

    componentDidMount(){
        this.getSkillList()
    }

    getSkillList=()=>{
        Axios({
            method: 'get',
            url: '/api/skill',
            headers:{'Authorization':"Bearer "+window.localStorage.getItem("token") }
        })
        .catch(e=>{
            this.setState({
                error:e
            })
        })
        .then(res=>{
            if(res.data ===undefined){
                this.setState({
                    error:true
                })
            }else{
                console.log(res)
                this.setState({
                    skills:res.data
                })
            }
        })
    }

    onSearch=()=>{
        alert("not implemented")
    }

    onSelectSkill=(skill)=>{
        this.setState({
            selectedSkill:skill
        })
    }
    CleanSelect=()=>{
        this.setState({
            selectedSkill:null
        })
    }



    render() {
        const { error, skills, searchInput, selectedSkill } = this.state
        if(error){
            //on error when asking server for admin data disconnect user
            HandleDisconnection();
            return
        }
        if(selectedSkill!==null){
            
            return <>
                <TwoPageBanner 
                    currentUri="admin-skill"
                    title="Gérer les compétences"
                />
                <ActivityIndicator/>
                <ComponentModal onClose={this.CleanSelect} title={`modification du skill ${selectedSkill.name}`} component={<SkillForm onClose={this.CleanSelect} data={selectedSkill}  onUpdate={this.getSkillList}/>}/>
            </> 
        }
        else{
        return (
            <div>
                <TwoPageBanner 
                    currentUri="admin-skill"
                    title="Gérer les compétences"
                />
                <div className="container-fluid">
                    <Row>
                        <Col sm="12" md="4">
                            <br/>
                            <SkillForm onCreate={this.getSkillList}/>
                        </Col>
                        <Col sm="12" md="8">
                            <br/><br/>
                            <AdminSkillNav searchInput={searchInput} onChange={e=>this.setState({
                                searchInput:e.target.value
                            })} onSearch={this.onSearch}/>
                            <br/>
                            {skills!==null?<AdminSkillList onUpdate={this.onSelectSkill} onDelete={this.getSkillList} data={skills} />:<NoRessourceFounded/>}
                            </Col>
                    </Row>
                </div>
            </div>
        )}
        
    }
}

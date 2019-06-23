import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

import TwoPageBanner from '../../../components/stateless/banners/TwoPageBanner/TwoPageBanner';
import Axios from 'axios';
import { handleLogout } from '../../../components/Buttons/Logout-Button/LogoutButton';
import AdminSkillList from '../../../components/Admin/Admin-Skill-List/AdminSkillList';
import NewSkillForm from '../../../components/forms/New-Skill-Form/NewSkillForm';
import NoRessourceFounded from '../../../components/layout/No-Ressource-Founded/NoRessourceFounded';
import AdminSkillNav from '../../../components/Admin/Admin-Skill-List/AdminSkillNav';
import ComponentModal from '../../../components/modals/ComponentModal';

const UpdateForm = React.lazy(()=>import('./../../../components/forms/Update-Skill-Form/UpdateSkillForm'))
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
            handleLogout()
        }else{
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
                            <NewSkillForm onCreate={this.getSkillList}/>
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
                {selectedSkill!==null?<ComponentModal onClose={this.CleanSelect} component={<UpdateForm onClose={this.CleanSelect} data={selectedSkill} onUpdate={this.getSkillList}/>}/>:""}
            </div>
        )}
        
    }
}

import React, { Component, useState } from 'react'
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


import { useHttpGetOnMount } from '../../../Hooks/useHttp';

interface skill{
    _id :string,
    name :string,
    info :string,
    created :string,
    firepost :boolean,
}
const AdminSkill = () :React.FunctionComponentElement<{}> => {

    const [selectedSkill ,setSelectedSkill] = useState(false); 
    const [skillID ,setSkillID] = useState(""); 

    const [isLoading, reload, response, error] =  useHttpGetOnMount("/api/skill",[],true);

    const onSelectSkill=(id :string)=>{
        setSelectedSkill(true)
        setSkillID(id)
    }
    const CleanSelect=()=>{
        setSelectedSkill(false)
    }

    if(selectedSkill)return <>
        <TwoPageBanner 
            currentUri="admin-skill"
            title="Gérer les compétences"
        />
        {response.map((val :skill ,i :number)=>{
            if(val._id === skillID){
                return <>
                    <ComponentModal 
                        onClose={CleanSelect} 
                        onSuccess={reload} 
                        title={`modification du skill ${val.name}`} 
                        component={<SkillForm onClose={CleanSelect} data={val}  onUpdate={reload}/>}
                    />
                </>
            }
        })}
    </> 


    if(isLoading) return<>
        <TwoPageBanner 
            currentUri="admin-skill"
            title="Gérer les compétences"
        />
        <ActivityIndicator/>
    </>

    
    let withContent = <>
        <TwoPageBanner 
            currentUri="admin-skill"
            title="Gérer les compétences"
        />
        <div className="container-fluid">
            <Row>
                <Col sm="12" md="4">
                    <br/>
                    <SkillForm onCreate={reload}/>
                </Col>
                <Col sm="12" md="8">
                    <br/><br/>
                    {response!==null?<AdminSkillList onUpdate={onSelectSkill} onDelete={reload} data={response} />:<NoRessourceFounded/>}
                    </Col>
            </Row>
        </div>
    </>

    return withContent;
}
export default AdminSkill
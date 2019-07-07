import React, { Component } from 'react'
import { Button, UncontrolledCollapse, Card, CardBody } from 'reactstrap';


import TwoPageBanner from '../../../Components/stateless/banners/TwoPageBanner/TwoPageBanner';

import Axios from 'axios';
import NewAdminForm from '../../../Components/forms/New-Admin-Form/NewAdminForm';
import AccountAdminForm from '../../../Components/forms/AccountAdminForm/AccountAdminForm';
import HandleDeleteAccount from '../../../Auth/HandleDeleteAccount';
import HandleDisconnection from '../../../Auth/HandleDisconnection';
import GetToken from '../../../Auth/GetToken';
import GetAdminId from '../../../Auth/GetAdminId';

const AdminUserList = React.lazy(()=>import('../../../Components/Admin/Admin-User-List/AdminUserList'));


export default class AdminAccountSetting extends Component {
    constructor(props){
        super(props);
        this.state={
            //form values
            admin:{},
            //errors
            error:false,
        }
    }

    componentDidMount(){
        this.getAdminInfo()
    }

    /* get admin info */
    getAdminInfo=()=>{
        Axios({
            method: 'get',
            url: '/api/admin/'+GetAdminId(),
            headers:{'Authorization':"Bearer "+GetToken() }
        })
        .catch(e=>{
            this.setState({
                error:true
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
                    admin:res.data
                })
            }
        })
    }
    render() {
        const { error, admin } = this.state
        if(error){
            //on error when asking server for admin data disconnect user
            HandleDisconnection()
        }else{
            return (
                <div>
                    <TwoPageBanner 
                        currentUri="admin-setting"
                        title="Paramètre de compte"
                    />

                    <div className="container-fluid">
                        
                        <br/>

                        <Button id="update-info" color="warning" size="lg" block>Modifier son compte</Button> 
                        <UncontrolledCollapse toggler="#update-info">
                            <Card>
                                <CardBody>
                                {<AccountAdminForm  data={admin} 
                                />}
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <br/>
                        <Button id="admin-list" color="primary" size="lg" block>Voir les admins</Button>
                        <UncontrolledCollapse toggler="#admin-list">
                            <Card>
                                <CardBody>
                                    <AdminUserList/>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>

                        
                        <br/>

                        <Button id="create-account" color="success" size="lg" block>Créer un nouveau compte</Button>
                        <UncontrolledCollapse toggler="#create-account">
                            <Card>
                                <CardBody>
                                    <NewAdminForm/>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>


                        <br/>

                        <Button id="delete-account" color="danger" size="lg" block>Supprimer son compte</Button>
                        <UncontrolledCollapse toggler="#delete-account">
                            <Card>
                                <CardBody>
                                    <p><strong>Attention, vous êtes sur le point de supprimer ce compte, cette action est définitive, Vous ne pourrez pas revenir en arrière.</strong></p>
                                    <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",height:"80px"}}>
                                        <Button onClick={()=>HandleDeleteAccount(HandleDisconnection)} color="success">
                                            Confirmer
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                        <br/>
                    </div>
                </div>
            )
        }
    }
}

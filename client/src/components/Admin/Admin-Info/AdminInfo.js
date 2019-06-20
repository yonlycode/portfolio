import React, { Component } from 'react'
import Axios from 'axios';
import { handleLogout } from '../../Buttons/Logout-Button/LogoutButton';


import AccountAdminForm from '../../forms/AccountAdminForm/AccountAdminForm';
import PlusButton from '../../Buttons/Plus-Button/PlusButton';

const NewAdminModal = React.lazy(()=>import('../../modals/New-Admin-Modal/NewAdminModal'))

export default class AdminInfo extends Component {
    constructor(props){
        super(props);
        this.state={
            //form values
            admin:{},
            //errors
            error:null,
            //Modal
            newAdminModal:false
        }
    }

    componentDidMount(){
        this.getAdminInfo()
    }

    /* get admin info */
    getAdminInfo=()=>{
        Axios({
            method: 'get',
            url: '/api/admin/'+window.localStorage.getItem("adminId"),
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
                    errorMsg:"there is a problem here"
                })
            }else{
                console.log(res)
                this.setState({
                    admin:res.data
                })
            }
        })
    }

    toggleNewAdminModal=()=>{
        this.setState(prevState=>{
            return{
                newAdminModal:!prevState.newAdminModal
            }
        })
    }

    
    render() {
        console.log(this.state.admin)
        const { newAdminModal ,error, admin } = this.state
        if(error!==null){
            //on error when asking server for admin data disconnect user
            handleLogout()
        }else{
            return (
                <div className="container">
                    <br/>

                    <AccountAdminForm 
                        data={admin} 
                        onSuccess={()=>alert("success")} 
                    />

                    <br/>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <PlusButton 
                            click={this.toggleNewAdminModal}
                        />
                    </div>
                                        
                    {newAdminModal?<NewAdminModal 
                    toggle={this.toggleNewAdminModal} />:""}
                    <br/>
                </div>
            )
        }
        
    }
}

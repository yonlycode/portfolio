import React, { Component } from 'react'
import Axios from 'axios';

export default class AdminInfo extends Component {


    constructor(props){
        super(props);
        this.state={
            admin:{},
            errorMsg:null
        }
    }


    componentDidMount(){
        this.getAdminInfo()
    }

    getAdminInfo=()=>{
        Axios({
            method: 'get',
            url: '/api/admin/'+window.localStorage.getItem("adminId"),
            headers:{'Authorization':"Bearer "+window.localStorage.getItem("token") }
        })
        .catch(e=>{
            this.setState({
                errorMsg:e
            })
        })
        .then(res=>{
            if(res.data ===undefined){
                this.setState({
                    errorMsg:"there is a problem here"
                })
            }else{
                this.setState({
                    admin:res.data
                })
            }
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

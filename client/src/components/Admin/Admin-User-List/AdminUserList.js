import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Axios from 'axios';
import AdminUserItem from './AdminUserItem';

export default class AdminUserList extends Component {
    constructor(props){
        super(props);
        this.state={
            admins:[]
        }
    }
    componentWillMount(){
        this.getAdmins()
    }

    getAdmins=()=>{
        Axios.get('/api/admin',{headers:{'Authorization':"Bearer "+window.localStorage.getItem("token") }})
        .catch(e=>{
            alert(e)
        })
        .then(res=>{
            console.log(res)
            this.setState({
                admins:res.data
            })
        })
    }
    render() {
        let items = this.state.admins.map((val , k)=>{
            return <AdminUserItem key={k} data={val} />
        })
        return (
            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>nom</th>
                        <th>job</th>
                        <th>création</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>

        )
    }
}

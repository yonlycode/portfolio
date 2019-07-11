import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Axios from 'axios';
import AdminUserItem from './AdminUserItem';
import { useHttpGetOnMount } from '../../../Hooks/useHttp';
import HandleDisconnection from '../../../Auth/HandleDisconnection';
import ActivityIndicator from '../../layout/Activity-Indicator/ActivityIndicator';

const AdminUserList = () => {

    const [isLoading, reload, response, error]= useHttpGetOnMount('/api/admin',[],true);


    if (isLoading) return <>
        <ActivityIndicator/>
    </>

    if (error) return <>
        {HandleDisconnection()}
    </>

    let content = <>
        <Table hover bordered dark responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>nom</th>
                    <th>job</th>
                    <th>création</th>
                </tr>
            </thead>
            <tbody>
                {response.map((val:{
                    firstName: string;
                    lastName: string;
                    job: string;
                    created: string;
                } , k :string)=>{
                    return <AdminUserItem key={k} data={val} />
                })}
            </tbody>
        </Table>
    </>
    return content
}
export default AdminUserList
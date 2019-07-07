import React from 'react'
import { Table } from 'reactstrap';
import AdminSkillItem from './AdminSkillItem';

interface props {
    data :any[],
    onUpdate :CallableFunction,
    onDelete :CallableFunction
}

const AdminSkillList = (props :props) :React.FunctionComponentElement<props> =>{
    let items = props.data.map((val , k)=>{
        return <AdminSkillItem onUpdate={props.onUpdate}  reload={props.onDelete} data={val} key={k} />
    })

    let content = <>
        <Table hover bordered dark responsive>
            <thead>
                <tr>
                    <th>nom</th>
                    <th>info</th>
                    <th>fp</th>
                    <th>création</th>
                    <th>modifier</th>
                    <th>supprimer</th>
                </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </Table>
    </>

    return content;
}
export default AdminSkillList;
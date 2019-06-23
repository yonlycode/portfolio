import React from 'react'
import { Table } from 'reactstrap';
import AdminSkillItem from './AdminSkillItem';

export default function AdminSkillList(props) {
    let items = props.data.map((val , k)=>{
        return <AdminSkillItem onUpdate={props.onUpdate}  reload={props.onDelete} data={val} key={k} />
    })

    return (
        <div>
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

            
        </div>
    )
}

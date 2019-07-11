import React from 'react'

interface props{
    data :{
        firstName :string,
        lastName :string,
        job :string,
        created:string
    }
    key:string
}
const AdminUserItem = (props :props) => {
    let content = <>
        <tr>
            <td>{props.key}</td>
            <td>{props.data.firstName + " " + props.data.lastName}</td>
            <td>{props.data.job}</td>
            <td>{props.data.created}</td>
        </tr>
    </>
    return content
}
export default AdminUserItem
import React from 'react'
import Axios from 'axios';

const deleteSkill = (id , onDelete)=>{
    Axios({
        method: 'delete',
        url: '/api/skill/'+id,
        headers:{'Authorization':"Bearer "+window.localStorage.getItem("token") }
    })
    .catch(e=>{
        console.log({e})
        alert(e)
    })
    .then(res=>{
        onDelete()
    })
}

export default function AdminSkillItem(props) {
    return (
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.info}</td>
            <td><i class="fas fa-fire-alt" style={props.data.firepost?{color:"red"}:{color:"grey"}}></i></td>
            <td>{props.data.created}</td>
            <td>
                <button onClick={()=>props.onUpdate(props.data)} className="btn btn-warning">
                    <i class="fas fa-cog"></i>
                </button>
            </td>
            <td>
                <button onClick={()=>deleteSkill(props.data._id , props.reload)} className="btn btn-danger">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    )
}

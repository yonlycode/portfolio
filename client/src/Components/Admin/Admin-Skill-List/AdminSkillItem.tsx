import React from 'react'
import Axios from 'axios';
import GetToken from '../../../Auth/GetToken';

interface itemProps {
    data:{
        _id :string,
        name :string,
        info :string,
        firepost :boolean,
        created :string,
    }, 
    reload : CallableFunction, 
    onUpdate :CallableFunction
}

const deleteSkill = (id :string , onDelete :CallableFunction)=>{
    let token = GetToken();
    if (token!==""){
        Axios({
            method: 'delete',
            url: '/api/skill/'+id,
            headers:{'Authorization':"Bearer "+GetToken() }
        })
        .catch(e=>{
            alert(e)
        })
        .then(res=>{
            onDelete()
        })
    }else{
       alert("errror")
    }
    
}

const AdminSkillItem = (props:itemProps):React.FunctionComponentElement<{}> =>{
    let content = <>
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.info}</td>
            <td>
                <i className="fas fa-fire-alt" style={props.data.firepost?{color:"red"}:{color:"grey"}}></i>
            </td>
            <td>{props.data.created}</td>
            <td>
                <button onClick={()=>props.onUpdate(props.data)} className="btn btn-warning">
                    <i className="fas fa-cog"></i>
                </button>
            </td>
            <td>
                <button onClick={()=>deleteSkill(props.data._id , props.reload)} className="btn btn-danger">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    </>
    
    return content;
}
export default AdminSkillItem;
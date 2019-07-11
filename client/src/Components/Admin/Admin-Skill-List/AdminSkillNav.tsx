import React from 'react';
import { Button, Nav, NavItem, Input } from 'reactstrap';

interface props{
    onChange :CallableFunction,
    onSearch :CallableFunction,
    searchInput :string
}
const AdminSkillNav = (props:props) => {
    let content = <>
        <Nav fill justified>
            
            <NavItem>
                <div style={{display:"flex",justifyContent:"center",width:"50%",marginLeft:"20%"}}>

                    <Input type="text" name="search" value={props.searchInput} onChange={(e)=>props.onChange(e)} placeholder="rechercher un skill"/>

                    <Button color="primary" onClick={()=>props.onSearch()}>
                        <i className="fas fa-search"></i>
                    </Button> 

                </div> 
            </NavItem>                    
        </Nav>
    </>
    return content
}
export default AdminSkillNav

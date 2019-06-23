import React from 'react';
import { Button, Nav, NavItem, Label, Input } from 'reactstrap';

export default function AdminSkillNav(props){
    return (
      <Nav fill justified>
            
            <NavItem>
                <div style={{display:"flex",justifyContent:"center",width:"50%",marginLeft:"20%"}}>

                    <Input type="text" name="search" value={props.searchInput} onChange={props.onChange} placeholder="rechercher un skill"/>

                    <Button color="primary" onClick={props.onSearch}>
                        <i class="fas fa-search"></i>
                    </Button> 

                </div> 
            </NavItem>                    
      </Nav>
    );
}
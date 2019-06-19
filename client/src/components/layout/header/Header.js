import React from 'react';
import { Link } from "react-router-dom";
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
} from 'reactstrap';
import LogoutButton from '../../Buttons/Logout-Button/LogoutButton';

export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isOpen: false
        }
    }
    toggle=()=>{
        this.setState(prevstate=>{
            return{
                isOpen:!prevstate.isOpen
            }
        })
    }
    render(){
        const adminRoutes =(
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                Administration
                </DropdownToggle>
                <DropdownMenu right>
                    <Link to="/admin" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                            Dashboard
                        </DropdownItem>
                    </Link>
                    <Link to="/admin-work" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                            Porfolio
                        </DropdownItem>
                    </Link>
                    <Link to="/admin-service" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                            Services
                        </DropdownItem>
                    </Link>
                   
                    <Link to="/admin-skill" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                            Skills
                        </DropdownItem>
                    </Link>
                    <Link to="/admin-blog" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                            Blog
                        </DropdownItem>
                    </Link>
                    
                    <DropdownItem divider />
                    <Link to="/admin-upload" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                            Ressources
                        </DropdownItem>
                    </Link>
                    <Link to="/admin-setting" style={{ textDecoration: 'none' }}>
                        <DropdownItem>
                            Compte
                        </DropdownItem>
                    </Link>
                    <DropdownItem divider />
                    <DropdownItem>
                        <LogoutButton/>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
        return (
            <header className="header_area" style={{fontSize:"125%"}}>
                <div  className="main_menu">
                    <Navbar color="dark" dark expand="md">
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <NavLink>Acceuil</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about-me" style={{ textDecoration: 'none' }}>
                                        <NavLink>À propos</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/work" style={{ textDecoration: 'none' }}>
                                        <NavLink>
                                        Portfolio
                                        </NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/blog" style={{ textDecoration: 'none' }}>
                                        <NavLink>
                                            Blog
                                        </NavLink>
                                    </Link>              
                                </NavItem>
                                <NavItem>
                                    <Link to="/service" style={{ textDecoration: 'none' }}>
                                        <NavLink>
                                            Services
                                        </NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                                        <NavLink>
                                            Contact
                                        </NavLink>
                                    </Link>
                                </NavItem>
                                {
                                    window.localStorage.getItem("token")!==null?adminRoutes:""
                                }
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
        )
    }
}

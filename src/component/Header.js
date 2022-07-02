import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar ,NavbarBrand,Collapse,Nav,NavItem} from 'reactstrap';
const Header = () => {
    const [open , setOpen] =useState(false);

    const openNav = ()=>{
        setOpen(prevOpen => !prevOpen);
    }
    return (
        <div className='div_nav'>
            <div className='div_header'>
                <Navbar expand="md" >
                    <NavbarBrand className='title'>
                        CRUD Employee Management
                    </NavbarBrand>
                    <i className="fa fa-bars d-lg-none d-md-none menu" onClick={openNav}></i>

                    <Collapse navbar isOpen={open}>
                        <Nav className='me-auto' navbar>
                            <NavItem>
                                <NavLink to='/crud/' className="nav-link">
                                <i className="fa fa-list me-1"></i>
                                Employee List
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to='/addItem' className="nav-link">
                                <i className="fa fa-plus me-1"></i>
                                Add Item
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
        
    )
}

export default Header;

import React, { useState } from 'react';
import { 
    Navbar, 
    NavItem, 
    NavbarToggler, 
    Collapse, 
    NavLink, 
    Nav, 
    NavbarBrand 
} from 'reactstrap'; 
import logo from '../../assets/img/logo.png'

const Header = () => {
    

 // Collapse isOpen State 
 const [isOpen, setIsOpen] = React.useState(false); 
  
 return ( 
     <div style={{ 
          width: '100%'
     }}> 
         
         <Navbar collapseOnSelect color="light" light expand="md"> 
             <NavbarBrand href="/">
                <img src={logo} style={{width:'100px'}} alt='logo'/></NavbarBrand> 
             <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} /> 
             <Collapse isOpen={isOpen} navbar> 
                 <Nav className="ms-auto" navbar> 
                     <NavItem> 
                         <NavLink href="#">Dashboard</NavLink> 
                     </NavItem> 
                     <NavItem> 
                         <NavLink href="#">Tickets</NavLink> 
                     </NavItem> 
                     <NavItem> 
                         <NavLink href="#">Logout</NavLink> 
                     </NavItem> 
                 </Nav> 
             </Collapse> 
         </Navbar> 
     </div > 
 ); 
} 

export default Header
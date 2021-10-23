import React from 'react'
import {Navbar,Nav, NavLink } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import './header.css'
export const Header = ()=> {
    let history = useHistory()
    
    function LogOut(){
        window.sessionStorage.clear()
        history.push("/")
        
    }
    return (
        <div >
            
            <Navbar bg="Light" variant="dark" className="nvbr">
            
    <Navbar.Brand href="/"> <h1 className="hclr">Mansion</h1></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/"> <h4 className="nvitm">Home</h4></Nav.Link>
      <Nav.Link href="/Reg"><h4 className="nvitm">SignUp</h4></Nav.Link>
      <Nav.Link href="/lgn"><h4 className="nvitm">Login</h4></Nav.Link>
      <Nav.Link href="/mcat"><h4 className="nvitm">Services</h4></Nav.Link>
      <Nav.Link href="/abt"><h4 className="nvitm">About</h4></Nav.Link>
      <NavLink>
        <button onClick={LogOut}  className="lbtn"><h4> Logout </h4> </button></NavLink>
    </Nav>
    
  </Navbar>
           
            </div>            
                   
    )
}
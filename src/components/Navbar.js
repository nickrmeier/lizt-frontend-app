import React, { Component } from 'react';
import { Nav, Navbar, FormControl, Form, Button } from 'react-bootstrap';
import './Navbar.css';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className='navbar'>
                <Navbar.Brand href="/" variant='outline-light' className='navbar_title'>LIZT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                    <Button
                        href="/newlizt"
                        variant='outline-dark'
                        name='newLizts'
                        className='newLizts'>
                        New Lizt
		            </Button>
                    
                    <Nav.Link href="#link">Log In</Nav.Link>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default NavBar;
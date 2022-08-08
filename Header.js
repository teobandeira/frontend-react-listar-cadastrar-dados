import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

const Header = () =>{
    return(
    <>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{height:"80px"}}>
            <Container>
                <Navbar.Brand href="http://localhost:3000/" align="center"> 
                    <img src="/logo512.png" width="30" height="30" className="d-inline-block align-center" alt="" />&nbsp; MaxxiData
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
                        <NavDropdown title="Profissionais" id="basic-nav-dropdown">
                            <NavDropdown.Item href="http://localhost:3000/profissionais">Ver Profissionais</NavDropdown.Item>
                            <NavDropdown.Item href="http://localhost:3000/cadastrar-profissional">(+) Novo</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tipos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="http://localhost:3000/tipos">Ver Tipos</NavDropdown.Item>
                            <NavDropdown.Item href="http://localhost:3000/cadastrar-tipo"> (+) Novo </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;
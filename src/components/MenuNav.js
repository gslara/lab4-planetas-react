import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const MenuNav = () => {
    return(
            <>
            
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand> Planetas </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/"> Home </Nav.Link>   
                    <Nav.Link href="/ordenar"> Ordenados por diametro </Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Planeta" className="mr-sm-2" />
                    <Button variant="outline-light" href="/ordenar">Buscar</Button>
                </Form>
            </Navbar>
            </>
    );
}
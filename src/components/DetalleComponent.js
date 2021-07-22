import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import { useLocation } from 'react-router';


export const DetalleComponent = () => { //match es un objeto que contienen info url
    
    const location = useLocation();

    const {diametro, nombre} = location.state;

    return(
        <React.Fragment>
            <Container className="mb-5 mt-5" >
                <Row >
                
                <Card border="dark" style={{ width: '800px'}}> 
                                   
                    <Card.Body>
                        <Card.Title> <h3> {nombre} </h3></Card.Title>
                        <p> {diametro} </p>
                    </Card.Body>
                </Card>
                </Row>
            </Container>            
        </React.Fragment>
    );
}
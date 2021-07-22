import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

export const ItemComponent = ({ data }) => { //data con la informacion de articulo
    const { nombre, codigo, urlImg } = data;
    //console.log(data);
    const history = useHistory();
    const redirectToDetails = (codigo, data) => {
        history.push(`planeta/${codigo}`, data);
    }

    return (
        <React.Fragment>
            <Card className="mx-3" border="dark" style={{ width: '18rem', margin: '5px' }}>
                <img src={urlImg} alt="" />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Button onClick={() => redirectToDetails(codigo, {
                        nombre: nombre,
                        diametro: data.diametro,
                        rotacionDias: data.rotacionDias,
                        urlImg: urlImg,
                        descripcion: data.descripcion,
                        temperatura: data.temperatura,
                        satelites: data.satelites

                    })}> Detalles </Button>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}
import React, {Component} from 'react';
import {ItemComponent} from './ItemComponent';
import axios from 'axios';
import { Row } from 'react-bootstrap';

class HomeComponent extends Component {

    constructor(){
        super();
        this.state = ({
            planetas:[],
          });
      }

    componentDidMount() {
        axios.get('/test/ta/sistema_solar.json')
        .then(result => {
            console.log(result.data);
            this.setState({planetas: result.data})
        })
        .catch(console.log);
        console.log("Probando q de lo mismo: " +this.state.planetas);
    }

    render() {
        return(
            <React.Fragment>
                <h2 className="text-center mb-5 mt-5"> Planetas </h2>
                <div>
                <Row className="">
                {this.state.planetas.map((data) => (
                    <ItemComponent key={data.codigo} data={data}></ItemComponent>
                ))}
                </Row>
                </div>
            </React.Fragment>
            
        );
    }

}

export default HomeComponent;
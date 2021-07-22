import React, {Component} from 'react';
import HomeComponent from './components/HomeComponent';
import {DetalleComponent} from './components/DetalleComponent';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MenuNav } from './components/MenuNav';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <div className="App">
          <React.Fragment>        
        <Router>
          <MenuNav />
          <Switch>
            <Route exact path="/" component={ HomeComponent } />
            <Route exact path ="/planeta/:id" component={ DetalleComponent } />
          </Switch>
        </Router>
      </React.Fragment>   
      </div>
    );
  }
}

export default App;
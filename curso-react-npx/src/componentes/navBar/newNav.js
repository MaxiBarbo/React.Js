import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/page1'
import Contacto from '../pages/page2'
import './navBar.css';


export class Newnav extends Component {
  render() {
    return (
      <div>
        <h4>Nueva Nav</h4>
        <Router>
            <Route path="/about" component={About} />
        </Router>
      </div>
    )
  }
}

function About() {
    return <>about</>   
  }
export default Newnav;
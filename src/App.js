import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
function App() {
  return (
    <div className="App" >
      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default App;

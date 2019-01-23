import React, { Component } from 'react';
import './App.css';
import { Layout, Content} from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
            <header>
            <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">AJB</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1}>
                    <Link to="/Resume">Resume</Link>
                  </NavItem>
                  <NavItem eventKey={2}>
                     <Link to="/AboutMe">About me</Link>
                  </NavItem>
                  <NavItem eventKey={3}>
                    <Link to="/Projects">Projects</Link>
                  </NavItem>
                  <NavItem eventKey={4}>
                    <Link to="/Contact">Contact</Link>
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>;
            </header>
            <Content>
              <Main />
            </Content>
          </Layout>
      </div>
    );
  }
}

export default App;

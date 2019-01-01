import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div>
          <Layout>
            <header>
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">React-Bootstrap</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="#">
                    <Link to="/Resume">Resume</Link>
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                     <Link to="/AboutMe">About me</Link>
                  </NavItem>
                  <NavItem eventKey={3} href="#">
                    <Link to="/Projects">Projects</Link>
                  </NavItem>
                  <NavItem eventKey={4} href="#">
                    <Link to="/Contact">Contact</Link>
                  </NavItem>
                  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                  </NavDropdown>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#">
                    Link
                  </NavItem>
                  <NavItem eventKey={2} href="#">
                    Link Right
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

import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className='demo-big-content'>
          <Layout>
              <Header className='header-color' transparent title="My Portfolio">
                  <Navigation>
                      <Link to="/Resume">Resume</Link>
                      <Link to="/AboutMe">About me</Link>
                      <Link to="/Projects">Projects</Link>
                      <Link to="/Contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="My Portfolio">
                  <Navigation>
                      <Link to="/Resume">Resume</Link>
                      <Link to="/AboutMe">About me</Link>
                      <Link to="/Projects">Projects</Link>
                      <Link to="/Contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;

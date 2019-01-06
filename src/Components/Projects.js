import React, { Component } from 'react'
import { Card, CardText, CardTitle, CardActions, Button, Tab, Tabs } from 'react-mdl';
import '../App.css';

class Projects extends Component {
  constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
      if(this.state.activeTab === 0) {
        return (
          <div className='cardBody'>
          <div className="card">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
              <CardTitle expand style={{color: 'white', background: 'url(https://picsum.photos/400/300/?random) no-repeat white'}}></CardTitle>
              <CardText>
                  React Project
              </CardText>
              <CardActions border>
                  <Button colored>View Project</Button>
                  <Button colored>View Source Code</Button>
              </CardActions>
            </Card>
          </div>
          <div className='card'>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
              <CardTitle expand style={{color: 'white', background: 'url(https://picsum.photos/400/300/?random) no-repeat white'}}></CardTitle>
              <CardText>
                  React Project 2
              </CardText>
              <CardActions border>
                  <Button colored>View Project</Button>
                  <Button colored>View Source Code</Button>
              </CardActions>
            </Card>
          </div>
          <div className="card">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
              <CardTitle expand style={{color: 'white', background: 'url(https://picsum.photos/400/300/?random) no-repeat white'}}></CardTitle>
              <CardText>
                  React Project 3
              </CardText>
              <CardActions border>
                  <Button colored>View Project</Button>
                  <Button colored>View Source Code</Button>
              </CardActions>
            </Card>
          </div>
          <div className='card'>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
              <CardTitle expand style={{color: 'white', background: 'url(https://picsum.photos/400/300/?random) no-repeat white'}}></CardTitle>
              <CardText>
                  React Project 4
              </CardText>
              <CardActions border>
                  <Button colored>View Project</Button>
                  <Button colored>View Source Code</Button>
              </CardActions>
            </Card>
          </div>
      </div>)
      } else if (this.state.activeTab === 1) {
        return(
        <div>
          <div className="card">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
              <CardTitle expand style={{color: 'white', background: 'url(https://picsum.photos/400/300/?random) no-repeat white'}}></CardTitle>
              <CardText>
                  Jquery Project
              </CardText>
              <CardActions border>
                  <Button colored>View Project</Button>
                  <Button colored>View Source Code</Button>
              </CardActions>
            </Card>
          </div>
          <div className='card'>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
              <CardTitle expand style={{color: 'white', background: 'url(https://picsum.photos/400/300/?random) no-repeat white'}}></CardTitle>
              <CardText>
                  Jquery Project 2
              </CardText>
              <CardActions border>
                  <Button colored>View Project</Button>
                  <Button colored>View Source Code</Button>
              </CardActions>
            </Card>
          </div>
          <div className="card">
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
              <CardTitle expand style={{color: 'white', background: 'url(https://picsum.photos/400/300/?random) no-repeat white'}}></CardTitle>
              <CardText>
                  Jquery Project 3
              </CardText>
              <CardActions border>
                  <Button colored>View Project</Button>
                  <Button colored>View Source Code</Button>
              </CardActions>
            </Card>
          </div>
          <div className='card'>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
              <CardTitle expand style={{color: 'white', background: 'url(https://picsum.photos/400/300/?random) no-repeat white'}}></CardTitle>
              <CardText>
                  Jquery Project 4
              </CardText>
              <CardActions border>
                  <Button colored>View Project</Button>
                  <Button colored>View Source Code</Button>
              </CardActions>
            </Card>
          </div>
      </div>)
      }
    }

  render() {
    return (
      <div className="tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Jquery</Tab>
                </Tabs>
                <section>
                {this.toggleCategories()}
                </section>
      </div>
    )
  }
}

export default Projects;

import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/ProjectsStyle.css'
import architecture from '../bg3.jpg'

const imageStyle = {
    width: '100%',
    height: '250px'
};

const Projects = () => {
    return (
      <CSSTransitionGroup
        transitionName="projectsTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="cards">
        <div className="card">
        <img src={architecture} alt="Avatar" style={imageStyle}/>
          <div className="container">
            <h4><b>Movie Application</b></h4>
            <p></p>
          </div>
        </div>
        <div className="card">
        <img src={architecture} alt="Avatar" style={imageStyle}/>
          <div className="container">
            <h4><b>Coffee Project</b></h4>
          </div>
        </div>
        <div className="card">
        <img src={architecture} alt="Avatar" style={imageStyle}/>
          <div className="container">
            <h4><b>Weather Application</b></h4>
          </div>
        </div>
        <div className="card">
        <img src={architecture} alt="Avatar" style={imageStyle}/>
          <div className="container">
            <h4><b>AdLister</b></h4>
          </div>
        </div>
        </div>
      </CSSTransitionGroup>
    )
};

export default Projects;

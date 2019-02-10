import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/ProjectsStyle.css'
import architecture from '../architecture.jpg'

const imageStyle = {
    width: '100%',
    height: '300px'
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
          <div class="container">
            <h4><b>Movie Application</b></h4>
            <p>HTML5, CSS3, Javascript, Jquery, Ajax</p>
          </div>
        </div>
        <div className="card">
        <img src={architecture} alt="Avatar" style={imageStyle}/>
          <div class="container">
            <h4><b>Coffee Project</b></h4>
            <p>HTML5, CSS3, Javascript, Jquery</p>
          </div>
        </div>
        <div className="card">
        <img src={architecture} alt="Avatar" style={imageStyle}/>
          <div class="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card">
        <img src={architecture} alt="Avatar" style={imageStyle}/>
          <div class="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        </div>
      </CSSTransitionGroup>
    )
};

export default Projects;

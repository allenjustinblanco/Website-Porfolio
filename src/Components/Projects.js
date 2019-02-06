import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/ProjectsStyle.css'

const imageStyle = {
    width: '100%'
};

const Projects = () => {
    return (
      <CSSTransitionGroup
        transitionName="projectsTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="card">
        <img src={"../architecture.png"} alt="Avatar" style={imageStyle}/>
          <div class="container">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </CSSTransitionGroup>
    )
};

export default Projects;

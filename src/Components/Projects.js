import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/ProjectsStyle.css'

const Projects = () => {
    return (
      <CSSTransitionGroup
        transitionName="projectsTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
          <div>
            <h1>Projects Page</h1>
          </div>
      </CSSTransitionGroup>
    )
};

export default Projects;

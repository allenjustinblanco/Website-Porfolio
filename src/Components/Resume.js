import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/ResumeStyle.css'

const Resume = () =>{
    return (
      <CSSTransitionGroup
      transitionName="resumeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>
      <div>
        <h1>Resume Page</h1>
      </div>
      </CSSTransitionGroup>
    )
};

export default Resume;

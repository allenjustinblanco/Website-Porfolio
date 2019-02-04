import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/AboutMeStyle.css'

const AboutMe = () => {
    return (
      <CSSTransitionGroup
        transitionName="aboutMeTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
          <div>
            <h1>AboutMe Page</h1>
          </div>
      </CSSTransitionGroup>
    )
};

export default AboutMe;

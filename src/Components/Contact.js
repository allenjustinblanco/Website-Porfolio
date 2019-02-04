import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/ContactStyle.css'

const Contact = () => {
    return (
      <CSSTransitionGroup
        transitionName="contactTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
          <div>
            <h1>Contacts Page</h1>
          </div>
      </CSSTransitionGroup>
    )
}

export default Contact;

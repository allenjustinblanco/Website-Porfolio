import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import '../styles/homeStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const homeDivStyle = {
//   h1Home: {
//     color: 'black',
//     fontFamily: 'Montserrat Subrayada', 'serif',
//     textAlign: 'center'
//   }
// }

const HomePage = () => {
    return (
      <CSSTransitionGroup
        transitionName="homePageTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className='homeDiv'>
          <h1 className='home'>
            <span>A</span>
            <span>l</span>
            <span>l</span>
            <span>e</span>
            <span>n</span>
            <span>j</span>
            <span>u</span>
            <span>s</span>
            <span>t</span>
            <span>i</span>
            <span>n</span>
            <span> </span>
            <span>b</span>
            <span>l</span>
            <span>a</span>
            <span>n</span>
            <span>c</span>
            <span>o</span>
          </h1>
          <h3 className='home'>
            web developer, creative, entrepreneur
          </h3>
          <div className="iconLink">
          <a href="https://github.com/allenjustinblanco" className="icon" target="_blank"><FontAwesomeIcon icon="igloo"/></a>
          <a href="https://github.com/allenjustinblanco" className="icon" target="_blank"><FontAwesomeIcon icon="igloo"/></a>
          </div>
          </div>
      </CSSTransitionGroup>
    )
};

export default HomePage;

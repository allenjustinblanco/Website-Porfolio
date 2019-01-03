import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'


class Landingpage extends Component {
  render() {
    return (
      <Jumbotron>
        <h3 className='Quicksand'>Full Stack Developer</h3>
        <p className='cursive'>“There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for." - Milton Glaser</p>
        <div className='social-links'>
          <a href='https://www.linkedin.com/in/allen-justin-blanco-393a28176/' target='_blank' rel='noopener noreferrer'>
            <i class="fab fa-linkedin"></i>
          </a>
          <a href='https://github.com/allenjustinblanco' target='_blank' rel='noopener noreferrer'>
            <i class="fab fa-github"></i>
          </a>
        </div>
        </Jumbotron>
    )
  }
}

export default Landingpage;

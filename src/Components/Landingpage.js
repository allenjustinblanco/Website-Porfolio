import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Landingpage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="Landing-grid">
          <Cell col={12}>
            <div>
              <h2>Hello, I'm Allen Justin Blanco,</h2>
              <h2>I'm a Full Stack Web Developer</h2>
              <p>| HTML | CSS | Bootstrap | JavaScript | Jquery | React |</p>
              <div className='social-links'>
                <a href='https://www.linkedin.com/in/allen-justin-blanco-393a28176/' target='_blank' rel='noopener noreferrer'>
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href='https://github.com/allenjustinblanco' target='_blank' rel='noopener noreferrer'>
                  <i class="fab fa-github"></i>
                </a>
                <a href='https://www.instagram.com/allenjustin_/?hl=en' target='_blank' rel='noopener noreferrer'>
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landingpage;

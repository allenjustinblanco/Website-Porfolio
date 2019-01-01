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
              </div>
            </div>
          </Cell>
          <div style={{width: '80%', margin: 'auto'}}>
            <Grid>
                <Cell col={4}></Cell>
                <Cell col={4}>4</Cell>
                <Cell col={4}></Cell>
            </Grid>
            </div>
        </Grid>
      </div>
    )
  }
}

export default Landingpage;

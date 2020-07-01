import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={
                "https://avatars1.githubusercontent.com/u/53534626?s=460&v=4"
              }
              alt="Leighton Fritze"
              className="avatar-img"
            />
           
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr />
              <p>HTML/CSS | JavaScript | React | SQL | NodeJS | Python | Agile | CMS</p>
              <div className="social-links" style={{display: "flex", justifyContent: "space-evenly"}}>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/leightonfritze/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/Lfritze"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                {/* <a
                  href="https://www.freecodecamp.org/lfritze"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a> */}
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;

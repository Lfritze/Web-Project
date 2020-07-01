import React, { Component } from "react";


class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        
        <div className="about-paragraph">
         
          <h1>About Me</h1>
          {/* <p>
            I have worn many hats over the years looking for a career that fits
            my intellectual curiosity. I thrive in an environment that
            requires continuous learning, creativity, and change. This is precisely why I chose a career in software development. 
          </p> */}
          <p>
            I am experienced in web accessibility, React
            CRUD Applications, RESTful APIs with Node.js, and Python. Common libraries
            used include: Axios, Redux, React-Router, Redux-Thunk, Express, and
            Knex. Common styling libraries include: Styled-Components,
            Semantic-UI, Material-UI, and React-mdl. 
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;

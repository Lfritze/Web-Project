import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-me">
        <div className="about-paragraph">
          <h1>About Me</h1>
          <p>
            I have worn many hats over the years looking for a career that fits
            my intellectual curiosity. I've discovered my dream career in
            software engineering because I thrive in an environment that
            requires continuous learning, creativity, and change. I demonstrate
            strong interpersonal competence in harmony with technical
            proficiency.{" "}
          </p>
          <p>
            I am experienced via formal education, and hobby in building React
            CRUD Applications and RESTful APIs with Node.js. Common libraries
            used include: Axios, Redux, React-Router, Redux-Thunk, Express, and
            Knex. Common styling libraries include: Styled-Components,
            Semantic-UI, Material-UI, and React-mdl. I am also experienced via
            employment with a school district in web accessibility.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;

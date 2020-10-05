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
            My name is Leighton. I spend most of my free time with my wife and our two young boys. I entered the tech industry in 2016 when I started my Master's in IT at Valparaiso University. I graduated in 2017 and worked as a web accessibility coordinator and a network tech for a school district. Then I decided to dive into the software development world head first by enrolling in Lambda School's Full Stack program. I recently graduated Lambda School and now I am on the hunt for a job.
          </p>
          <p>
            I am experienced in web accessibility, React
            Applications, Node, Express, RESTful APIs, and MongoDB. I am a self-starter and willing to learn new languages, frameworks, and stacks on the job.   
          </p>
          
          <p>
            <h2>Hobbies</h2>
            <ul>
              <li>
                Chess
              </li>
              <li>
                Baseball Cards
              </li>
              <li>
                Watching Movies
              </li>
              <li>
                Guitar / Music
              </li>
              <li>
                Traveling
              </li>
              <li>
                Camping
              </li>
              <li>
                Gardening
              </li>
              <li>
                Not Gardening
              </li>
              <li>
                Exercising
              </li>
              <li>
                Not Exercising
              </li>
              <li>
                Reading
              </li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;

import React, { Component } from "react";
import githubPic  from "../assets/github-project.JPG";
import basbeballPic from "../assets/baseball.jpg"
import didactPic from "../assets/didact.JPG";
import africaPic from "../assets/africa.JPG";
import valpoPic from "../assets/valpo.jpg";
import beamPic from "../assets/beam.JPG";
import portagePic from "../assets/portage.png";
import gamePic from "../assets/game.PNG";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "2%" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "276px",
                width: "100%",
                
                
                background: `url(${basbeballPic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: "-10%"
                
                  
              }}
            >
            </CardTitle>
            <CardText>
              <h4>Fritze Cards</h4>
              <p>MERN stack - ecommcerce application using MongoDB / Express /  React / Node. <br />2 types of users: <br /> (Admin User) for editing content, sales, and users <br />(General Users) for purchasing cards.</p>  
              <p>Other tech used: PayPal, Axios, Mongoose, Nodemon, & Babel</p>
            </CardText>
            <CardActions border>
              <Button colored 
                href="https://github.com/Lfritze/jayrow"
                target="_blank">GitHub</Button>
                <Button colored href="https://fritze-cards.herokuapp.com/"
                target="_blank">Live Demo</Button>
            </CardActions>
            
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "2%" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: `url(${didactPic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: "-10%"
                
                  
              }}
            >
            </CardTitle>
            <CardText>
              <h4>Didact</h4>
              <p>Fullstack application using React / Node. This is a content management system app with hierarchical user roles (Owner, Admin, Moderator, User).</p>  
              <p>Frontend - Redux, Axios, MixPanel, Cypress, Material UI, and Styled Components. 
              Backend - PostgreSQL, Express, Helmet, Cors, Cloudinary, Multer, Nodemon, Bycrypt, Jest, Supertest. </p>
            </CardText>
            <CardActions border>
              <Button colored 
                href="https://github.com/Lfritze/didact-fe"
                target="_blank">GitHub FE</Button>
              <Button colored href="https://github.com/Lfritze/didact-be"
                target="_blank">Github BE</Button>
              <Button colored href="https://didactlmsfe.netlify.com/"
                target="_blank">Live Demo</Button>
            </CardActions>
            
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "2%" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "276px",
                background: `url(${gamePic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: "-10%"
                
                  
              }}
            >
            </CardTitle>
            <CardText>
              <h4>Conway's Game of Life</h4>
              <p>React JavaScript Application - cellular automaton with specific rules for cell evolution on a 2 dimensional grid. The "Game of Life" is a zero player game where cells reproduce or die to simulate a Turing machine. </p>
            </CardText>
            <CardActions border>
              
              <Button colored href="https://cellular-automata-game-of-life.netlify.app/"
                target="_blank">Live Demo</Button>
                <Button colored 
                href="https://github.com/Lfritze/Game/tree/master/client"
                target="_blank">GitHub</Button>
            </CardActions>
            
          </Card>



          <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "2%" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: `url(${githubPic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginLeft: "20%",
                marginBottom: "-10%"
              }}
            >
             
            </CardTitle>
            <CardText>
              <h4>React Github User Card</h4>
              React application that returns Github profile summary chart, and followers with search functionality. Libraries include axios, react-dom, and
              styled-components.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/Lfritze/React-Github-User-Card"
                target="_blank"
              >
                GitHub
              </Button>
              <Button colored href="https://react-github-user-card-eta.now.sh/"
                target="_blank">Live Demo</Button> 
            </CardActions>
            
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "2%" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(${africaPic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: "-10%"
              }}
            >
            </CardTitle>
            <CardText>
              <h4>Lambda Buildweek Project (backend - only)</h4>
              Successfully built backend with full CRUD functionality using Node.js for a Lambda School buildweek project, African Marketplace. 2 Types of users (buyers, sellers).
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/African-Market-Place-2/back-end-">GitHub</Button>
              
            </CardActions>
            
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "2%" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: `url(${beamPic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: "-10%"
                
                  
              }}
            >
            </CardTitle>
            <CardText>
              <h4>Virtual Laboratory - Flexural Beam Testing</h4>
              Curricular support product that presents data from flexural concrete beam testing for the Valparaiso University Civil Engineering Department. Tech used: HTML, CSS, JavaScript, PHP, SQL, and MATLAB.
            </CardText>
            <CardActions border>
              <Button colored 
                href="https://scholar.valpo.edu/cus/605/"
                target="_blank">Read More</Button>
              
            </CardActions>
            
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "2%" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: `url(${valpoPic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: "-10%"
                
                  
              }}
            >
            </CardTitle>
            <CardText>
              <h4>Valparaiso University</h4>
              <h6>Web Migration</h6> 
              As an independent contractor I am currently working with the webmaster to migrate and repair site content from the old WordPress to a new WordPress platform. 
            </CardText>
            <CardActions border>
              <Button colored 
                href="https://www.valpo.edu/"
                target="_blank">Website</Button>
            </CardActions>
            
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto", marginTop: "2%" }}>
            <CardTitle
              style={{
                color: "#000",
                height: "176px",
                background: `url(${portagePic})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginBottom: "-10%"
                
                  
              }}
            >
            </CardTitle>
            <CardText>
              <h4>Portage Township Schools</h4>
              <h6>Web Accessibility</h6> 
              Completely overhauled 12 district websites to meet section 508 standards for ADA compliance. 
            </CardText>
            <CardActions border>
              <Button colored 
                href="https://www.portage.k12.in.us/"
                target="_blank">District Home Site</Button>
            </CardActions>
            
          </Card>
        </div>
      );
    // } else if (this.state.activeTab === 1) {
    //   return (
    //     <div>
    //       <h1>This is Freelance</h1>
    //     </div>
    //   );
    // } else if (this.state.activeTab === 2) {
    //   return (
    //     <div>
    //       <h1>This is VueJS</h1>
    //     </div>
    //   );
    // } else if (this.state.activeTab === 3) {
    //   return (
    //     <div>
    //       <h1>This is MongoDB</h1>
    //     </div>
    //   );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Projects</Tab>
          {/* <Tab>Freelance</Tab>
          <Tab>University</Tab>
          <Tab>MongoDB</Tab> */}
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;

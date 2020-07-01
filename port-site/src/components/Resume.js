import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import portraitMe from '../assets/portraitme.jpg';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={portraitMe}
                alt="avatar"
                style={{
                  height: "350px",
                  borderRadius: "25%"
                }}
              />
            </div>
            <h2 style={{ paddingTop: "1em" }}>Leighton Fritze</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "4px solid black", width: "50%" }} />
            <p>
              Full Stack Developer with a passion for learning and seeking new opportunities. I thrive in an environment that requires continuous learning, creativity, and change.
            </p>
            
            <hr style={{ borderTop: "4px solid black", width: "50%" }} />
            <h5>Address</h5>
            <p>Fishers, Indiana 46037</p>
            <h5>Phone</h5>
            <p>(219) 307-6988</p>
            <h5>Email</h5>
            <p>Leighton.Fritze.Tech@gmail.com</p>
            <hr style={{ borderTop: "4px solid black", width: "50%" }} />
            <p>I am experienced in Web Accessibility, React CRUD Applications, RESTful APIs with Node.js, and Python. Common libraries used include: Axios, Redux, React-Router, Redux-Thunk, Express, and Knex. Common styling libraries include: Styled-Components, Semantic-UI, Material-UI, and React-mdl.</p>
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              lambdaYear={2020}
              lambdaName="Lambda School"
              lambdaDescription="Full Stack Web Development - agile software development and Git workflow on all projects (React, Redux, Node, Express, Knex, SQL, PostgreSQL, Python, OOP,  Data Structures, Algorithms, Hash Tables, Graphs, and Computer Architecture)"
              valpoYear={2017}
              valpoName="Valparaiso University"
              valpoDescription="Master of Science - Information Technology & Computing"
              purdueYear={2013}
              purdueName="Purdue University Northwest"
              purdueDescription="Bachelor of Science - Business Management"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            
            <Skills skill="HTML" progress={90} />
            <Skills skill="CSS" progress={90} />
            <Skills skill="JavaScript" progress={75} />
            <Skills skill="React" progress={75} />
            <Skills skill="Node.js" progress={60} />
            <Skills skill="Python" progress={60} />
            <Skills skill="Project Management" progress={95} />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>

            <Experience
              startDate="Current"
              // endDate="Current"
              companyName="Contractor - Valparaiso University"
              jobName="Web Developer" 
              jobDescription="Freelance Developer for Valparaiso University. - Migrated web pages to a new Wordpress platform; converted Classic Blocks from old site to Gutenburg Blocks. Restructuring blocks and balancing UI for best responsive design (media queries)."
            />

            <Experience
              startDate="Jan 2018"
              endDate="June 2019"
              companyName="Portage Township Schools"
              jobName="Web Accessibility Coordinator"
              jobDescription="Relieved school district of a web accessibility lawsuit (section 508 of the Rehabilitation Act) - As Webmaster successfully managed 12 district websites. - Updated all websites and PDFs for web accessibility per government audit for ADA web accessibility. - Redesigned and updated theme elements in School Messenger Presence (CMS)."
            />

            <Experience
              startDate="Aug 2017"
              endDate="Jan2018"
              companyName="Vinayak Hospitality"
              jobName="Hospitality Manager / IT Tech"
              jobDescription="Facility Manager and IT Tech for hotel/restaurant in Valparaiso, Indiana. - Supported revenue and financial analytics for a hospitality group with regional hotel and restaurant locations. - Successfully made “on-call” maintenance repairs for guest rooms and to service the hotel IT system."
            />

            <Experience
              startDate="May 2016"
              endDate="August 2017"
              companyName="Valparaiso University Graduate School"
              jobName="Computer Science Research Assistant / TA"
              jobDescription="Research Assistant and Teaching Assistant for two professors. - Conducted and recorded field interviews with staff regarding software security. - Created teaching materials on Health Informatics using VMware, VirtualBox, Hadoop, and MySQL. "
            />

            <Experience
              startDate="Jan 2014"
              endDate="Aug 2017"
              companyName="Kineja"
              jobName="Property Manager"
              jobDescription="Oversaw residential property construction and electrical maintenance projects.
              - Recruited and selected tenants. Managed tenant relations and and selected contractors to make construction improvements."
            />
            <Experience
              startDate="Aug 2008"
              endDate="Jan 2014"
              companyName="Metro Recycling"
              jobName="QEH&S Coordinator"
              jobDescription="Successfully implemented (RIOS) Quality, Environment, Health & Safety Management system for recycling firm (parallel to ISO 9001, 14001, OHSAS 18001).
              - Successfully conferred with third party auditors and government agencies (SGS and Indiana Department of Environmental Management) to exceed industry standards for recycling metals, automobiles, and proper disposal of hazardous chemicals."
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

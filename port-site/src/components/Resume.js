import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://avatars1.githubusercontent.com/u/53534626?s=460&v=4"
                alt="avatar"
                style={{ height: "200px", borderRadius: "50%" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Leighton Fritze</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of{" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Fishers, Indiana 46037</p>
            <h5>Phone</h5>
            <p>(219) 307-6988</p>
            <h5>Email</h5>
            <p>Leighton.Fritze.Tech@gmail.com</p>
            <h5>Web</h5>
            <p>LeightonFritze.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              purdueYear={2013}
              purdueName="Purdue University Northwest"
              purdueDescription="Bachelor of Science - Business Management"
              valpoYear={2017}
              valpoName="Valparaiso University"
              valpoDescription="Master of Science - Information Technology & Computing"
              lambdaYear={2020}
              lambdaName="Lambda School"
              lambdaDescription="Full Stack Web Development"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="HTML" progress={90} />
            <Skills skill="CSS" progress={85} />
            <Skills skill="JavaScript" progress={75} />
            <Skills skill="React" progress={75} />
            <Skills skill="Node.js" progress={50} />
            <Skills skill="Project Management" progress={95} />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>

            <Experience
              startDate="Jan 2018"
              endDate="June 2019"
              companyName="Portage Township Schools"
              jobName="Web Accessibility Coordinator"
              jobDescription="Reformed school websites for web accessibility using section 508 standards
- Trained IT staff members on OCR compliance, HTML, CSS, and PDF accessibility requirements
- Designed and implemented IT Operations Manual
- Successfully built multilayered technical drawings to map all IT resources across school district (11
schools)
- Updated and repaired hardware on digital signs across school district to comply with city standards"
            />

            <Experience
              startDate="Aug 2017"
              endDate="Jan2018"
              companyName="Vinayak Hospitality"
              jobName="Hospitality Manager / IT Specialist"
              jobDescription="Supported revenue and financial analytics (Opera Property Management) for hospitality group with regional hotel and restaurant locations.
- Oversaw computer network and desktop troubleshooting and maintenance across regional
properties.
- Led installation and support for security camera network"
            />

            <Experience
              startDate="May 2016"
              endDate="August 2017"
              companyName="Valparaiso University Graduate School"
              jobName="Computer Science Research Assistant / TA"
              jobDescription="Conducted computer science research and field interviews on how campus staff interact with
software
- Created teaching materials and learning procedures on health informatics and data management
using VMware, VirtualBox, Hadoop, and MySQL"
            />

            <Experience
              startDate="Jan 2014"
              endDate="Aug 2017"
              companyName="Kineja"
              JobName="Property Manager"
              jobDescription="Oversaw residential property construction and electrical maintenance projects
- Recruited and selected tenants"
              startDate="Aug 2008"
              endDate="Jan 2014"
              companyName="Metro Recycling"
              jobName="QEH&S Coordinator"
              jobDescription="Spearheaded and Implemented complete Quality, Environment, Health & Safety Management system for recycling (RIOS certification parallel to ISO 9001, 14001, OHSAS 18001)
- Successfully conferred with third party auditors (SGS and IDEM) to exceed industry standards"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

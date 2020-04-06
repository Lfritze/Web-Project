import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Leighton Fritze</h2>
            <img
              src="https://avatars1.githubusercontent.com/u/53534626?s=460&v=4"
              alt="avatar"
              style={{ height: "250px", borderRadius: "15%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Full Stack Developer with a passion for learning and seeking new opportunities.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (219) 307-6988
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    Leighton.Fritze.Tech@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    Leighton Fritze
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

// https://cdn2.iconFinder.com/data/icons/avatar-2/512/Fred_man-512.png

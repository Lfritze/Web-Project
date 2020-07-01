import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.lambdaYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.lambdaName}</h4>
          <p>{this.props.lambdaDescription}</p>
        </Cell>
        <Cell col={4}>
          <p>{this.props.valpoYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.valpoName}</h4>
          <p>{this.props.valpoDescription}</p>
        </Cell>
        <Cell col={4}>
          <p>{this.props.purdueYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.purdueName}</h4>
          <p>{this.props.purdueDescription}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;

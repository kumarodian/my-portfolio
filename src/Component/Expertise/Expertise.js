import React, { Component } from "react";
import "./Expertise.css";
import ExpertCourse from "./ExpertCourse";

class Expertise extends Component {
  render() {
    return (
      <div className="center container">
        <p className="color">Why Choose Me</p>
        <h2 className="secondaryColor bold-800">My Expertise Area</h2>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <ExpertCourse name="React" value="70" />
            <ExpertCourse name="HTML" value="80" />
            <ExpertCourse name="CSS" value="90" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <ExpertCourse name="JavaScript" value="80" />
            <ExpertCourse name="Drupal" value="70" />
            <ExpertCourse name="PHP" value="60" />
          </div>
        </div>
      </div>
    );
  }
}
export default Expertise;

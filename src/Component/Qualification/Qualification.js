import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import "./Qualification";
let color = ["#b2b2b2", "#ff8239"];
const Journey = ({ organisation, role, duration }) => {
  return (
    <div className="d-flex flex-row" style={{ marginTop: "15px" }}>
      <div style={{ marginRight: "10px" }}>
        <MaterialIcon icon="circle" color={color[1]} size={8} />
      </div>
      <div className="d-flex flex-column">
        <div className="bold-800">{organisation}</div>
        <div className="font-12" style={{ marginTop: "5px" }}>
          {role}
        </div>
        <div className="color font-10 d-flex" style={{ marginTop: "10px" }}>
          {duration}
        </div>
      </div>
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <div className="center" id="qualification">
        <div className="container padding-50">
          <p className="color">My Qualification</p>
          <h2 className="secondaryColor bold-800">Awesome Journey</h2>
          <div className="row left">
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
              style={{ marginTop: "35px" }}
            >
              <div className="d-flex">
                <MaterialIcon icon="school" color={color[0]} />
                <span style={{ marginLeft: "10px" }}>Education</span>
              </div>
              <Journey
                organisation="Jain University, Bengaluru, Karnataka"
                role="B. Tech, Computer Science"
                duration="Aug 2014 - Jul 2018"
              />
              <Journey
                organisation=" Kendriya Vidyalaya Hebbal, Bengaluru, Karnataka"
                role="Higher Secondary"
                duration="2014"
              />
              <Journey
                organisation="Army Public School, Jhansi, Uttar Pradesh"
                role="Senior Secondary"
                duration="2012"
              />
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12"
              style={{ marginTop: "35px" }}
            >
              <div className="d-flex">
                <MaterialIcon icon="work" color={color[0]} />
                <span style={{ marginLeft: "10px" }}>Experience</span>
              </div>
              <Journey
                organisation="Zebra Technologies Pvt Ltd"
                role="Enterprise System Analyst"
                duration="Nov 2020 - PRESENT"
              />
              <Journey
                organisation="Lumos Learning India Pvt Ltd"
                role="Project Lead"
                duration="Jul 2018 - Oct 2020"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

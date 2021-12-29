import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import "./RecentWork.css";
import LumosImage from "../../images/Lumos-step-up.png";
import ZebraImage from "../../images/zebra-logo.png";

const Project = ({ src, title, shortDesc }) => {
  return (
    <div
      style={{
        borderRadius: "15px",
        backgroundColor: "#ffffff",
        margin: "0 10px",
      }}
    >
      <img src={src} alt={title} style={{ width: "200px", height: "auto" }} />
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="center" id="recentWork">
        <div className="container padding-50">
          <p className="color">My Portfolio</p>
          <h2 className="secondaryColor bold-800">Recent Works</h2>
          <div className="d-flex justify-content-center flex-row">
            <Project
              src={ZebraImage}
              title="Lumos Leaning"
              shortDesc="Cordova App"
            />
            <Project
              src={LumosImage}
              title="Developer Portal"
              shortDesc="A drupal project"
            />
          </div>
          <div className="padding-50">
            <button className="btn button button-fill">
              <a href="https://github.com/kumarodian">View on Github</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

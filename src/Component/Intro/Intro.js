import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import Image from "../../images/image.png";
import "./Intro.css";

class App extends Component {
  render() {
    let color = "#ff8239";
    return (
      <div className="row container" id="index">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="profilePic">
            <img src={Image} alt="Sachin Kumar Side"></img>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <p className=" color">My Intro</p>
          <h2 className="secondaryColor bold-800">About Me</h2>
          <p className="aboutMe">
            Notice that NOT all links of a document should be inside a element.
            The element is intended only for major block of navigation links.
          </p>
          <div className="d-flex">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <p className="d-flex">
                <MaterialIcon icon="person_outline" color={color} />
                Name
              </p>
              <p className="d-flex">
                <MaterialIcon icon="phone" color={color} />
                Telephone
              </p>
              <p className="d-flex">
                <MaterialIcon icon="email" color={color} />
                Email
              </p>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1">
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12">
              <p>Sachin Kumar</p>
              <p>+91 8861719014</p>
              <p>sachinyadav607@gmail.com</p>
            </div>
          </div>
          <h4>My Interests</h4>
          <div className="d-flex flex-row">
            <p className="d-flex">
              <MaterialIcon icon="music_note" color={color} />
              Music
            </p>
            <p className="d-flex">
              <MaterialIcon icon="games" color={color} />
              Video Game
            </p>
            <p className="d-flex">
              <MaterialIcon icon="movie" color={color} />
              Movie
            </p>
            <p className="d-flex">
              <MaterialIcon icon="dashboard" color={color} />
              Photo
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import Image from "../../images/image.png";
import "./Intro.css";

class App extends Component {
  render() {
    let color = "#ff8239";
    return (
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div className="profilePic">
            <img src={Image} alt="Sachin Kumar Side"></img>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <p className="title">My Intro</p>
          <p className="aboutMeTag">About Me</p>
          <p className="aboutMe">
            Notice that NOT all links of a document should be inside a element.
            The element is intended only for major block of navigation links.
          </p>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
              <p className="">
                <MaterialIcon icon="person_outline" color={color} />
                Name
              </p>
              <p className="">
                <MaterialIcon icon="phone" color={color} />
                Telephone
              </p>
              <p className="">
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

          <span>
            <MaterialIcon icon="music_note" color={color} />
            Music
          </span>
          <span>
            <MaterialIcon icon="games" color={color} />
            Video Game
          </span>
          <span>
            <MaterialIcon icon="movie" color={color} />
            Movie
          </span>
          <span>
            <MaterialIcon icon="dashboard" color={color} />
            Photo
          </span>
        </div>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import Image from "../../images/image.png";
import "./Intro.css";
let color = "#ff8239";
const Item = ({ icon, name }) => {
  return (
    <p className="d-flex">
      <MaterialIcon icon={icon} color={color} />
      <span style={{ marginLeft: "5px" }}>{name}</span>
    </p>
  );
};
class App extends Component {
  render() {
    return (
      <div id="intro">
        <div className="container padding-50">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-self-center flex-column">
              <div className="profilePic">
                <img src={Image} alt="Sachin Kumar Side"></img>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-self-center flex-column">
              <p className=" color">My Intro</p>
              <h2 className="secondaryColor bold-800">About Me</h2>
              <p className="aboutMe">
                Notice that NOT all links of a document should be inside a
                element. The element is intended only for major block of
                navigation links.
              </p>
              <div className="d-flex">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12">
                  <Item icon="person_outline" name="Name" />
                  <Item icon="phone" name="Telephone" />
                  <Item icon="email" name="Email" />
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
              <div className="d-flex flex-row justify-content-between marginTop">
                <Item icon="music_note" name="Music" />
                <Item icon="games" name=" Video Game" />
                <Item icon="movie" name="Movie" />
                <Item icon="dashboard" name="Photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

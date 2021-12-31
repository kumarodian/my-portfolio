import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import Image1 from "../../images/image_1.jpg";
import Image2 from "../../images/image_2.jpg";
import Image3 from "../../images/image_3.jpg";
import "./Intro.css";
let color = "#ff8239";
const image = [Image1, Image2, Image3];
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
            <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 d-flex align-self-center flex-column">
              <div className="profilePic">
                <img
                  src={image[Math.floor(Math.random() * image.length)]}
                  alt="Sachin Kumar Side"
                  style={{
                    maxWidth: "350px",
                    borderRadius: "15% 0",
                    boxShadow: "7px 7px 7px 0px #00000026",
                  }}
                ></img>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12 d-flex align-self-center flex-column">
              <p className=" color">My Intro</p>
              <h2 className="secondaryColor bold-800">About Me</h2>
              <p className="aboutMe">
                I love coding !!
                <br /> Currently building projects and games with React.
                Sometimes I can be found clicking photos, and evening playing
                simulator games. Big fan of Marvel Movies and a part-time
                gardener.
              </p>
              <div className="d-flex">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <Item icon="person_outline" name="Name" />
                  <Item icon="phone" name="Telephone" />
                  <Item icon="email" name="Email" />
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1">
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-6">
                  <p>Sachin Kumar</p>
                  <p>
                    <a
                      href="tel:+91 8861719014"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      +91 8861719014
                    </a>
                  </p>
                  <p>sachinyadav607@gmail.com</p>
                </div>
              </div>
              <h4>My Interests</h4>
              <div className="d-flex flex-row justify-content-between marginTop">
                <Item icon="music_note" name="Music" />
                <Item icon="games" name="Video Game" />
                <Item icon="movie" name="Movie" />
                <Item icon="fitness_center" name="Fitness" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

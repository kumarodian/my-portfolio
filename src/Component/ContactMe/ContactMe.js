import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import "./ContactMe.css";
let color = "#ff8239";
const ContactItem = ({ icon, data, color = "#ffffff" }) => {
  return (
    <div className="ContactMe">
      <MaterialIcon icon={icon} color={color} size={15} />
      {data["text"]}
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <div className="center container">
        <p className="color">Contact Me</p>
        <h2 className="secondaryColor bold-800">Get in Touch</h2>
        <div className="d-flex flex-column">
          <ContactItem
            icon="call"
            data={{ text: "Call Me", value: "+91 8861719014" }}
          />
          <ContactItem
            icon="mail"
            data={{ text: "E- mail", value: "sachinyadav607@gmail.com" }}
          />
          <ContactItem
            icon="push_pin"
            data={{ text: "Location", value: "Bangalore" }}
          />
        </div>
      </div>
    );
  }
}
export default App;

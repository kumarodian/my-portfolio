import React, { Component } from "react";
import MaterialIcon from "material-icons-react";
import { v4 as uuidv4 } from "uuid";
import "./RecentWork.css";
import LumosImage from "../../images/Lumos-step-up.png";
import ZebraImage from "../../images/zebra-logo.png";

const project = [
  {
    key: uuidv4(),
    icon: "web",
    title: "Developer Portal",
    desc: "Some random text asjasyas ahas ashasa ash",
    tech: "Drupal, PHP",
    url: "https://developer.zebra.com",
    button_text: "Visit Site",
  },
  {
    key: uuidv4(),
    icon: "web",
    title: "Lumos Learning",
    desc: "Some random text asjasyas ahas ashasa ash",
    tech: "Twig, PHP, HTML, CSS, JavaScript, Jquery",
    url: "https://www.lumoslearning.com/llwp/",
    button_text: "Explore",
  },
  {
    key: uuidv4(),
    icon: "phone_android",
    title: "Stepup App",
    desc: "Some random text asjasyas ahas ashasa ash",
    tech: "HTML, CSS, JavaScript, Jquery, Cordova",
    url: "https://www.lumoslearning.com/llwp/resources/apps/lumos-stepup.html",
    button_text: "Get Link",
  },
  {
    key: uuidv4(),
    icon: "sports_esports",
    title: "Chain Reaction Word Game",
    desc: "Some random text asjasyas ahas ashasa ash",
    tech: "React, HTML, CSS, JavaScript",
    url: "https://gdu3v.csb.app/ChainReaction.html",
    button_text: "Play Game",
  },
  {
    key: uuidv4(),
    icon: "sports_esports",
    title: "Tongue Twister Game",
    desc: "Some random text asjasyas ahas ashasa ash",
    tech: "HTML, CSS, JQuery",
    url: "https://mxrgq.csb.app/TongueTwister.html",
    button_text: "Play Game",
  },
];

const ProjectItem = () => {
  return project.map(
    ({
      key = uuidv4(),
      icon = "",
      title = "",
      desc = "",
      tech = "React",
      url = "",
      button_text = "Visit",
    }) => {
      if (title)
        return (
          <div key={key} className="project">
            <MaterialIcon icon={icon} size={30} />
            <p className="projectTitle">{title}</p>
            <p className="projectDesc">{desc}</p>
            <p className="projectTech">Tech : {tech}</p>
            <p className="projectUrl">
              <a href={url} target="_blank" rel="noreferrer">
                <button className="btn button">{button_text}</button>
              </a>
            </p>
          </div>
        );
      return null;
    }
  );
};

class App extends Component {
  render() {
    return (
      <div className="center" id="recentWork">
        <div className="container padding-50">
          <p className="color">My Portfolio</p>
          <h2 className="secondaryColor bold-800">Recent Works</h2>
          <div
            className="d-flex justify-content-center flex-row flex-wrap"
            style={{ marginTop: "50px" }}
          >
            <ProjectItem />
          </div>
          <div className="padding-50">
            <a href="https://github.com/kumarodian">
              <button className="btn button button-fill">View my Github</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

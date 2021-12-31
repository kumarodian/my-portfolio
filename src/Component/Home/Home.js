import "./Home.css";
import mainPic from "../../images/mainPic.png";
import Resume from "../../Resume/sachin_kumar_web_developer_resume.pdf";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-self-center flex-column">
            <p className="iam title">Hi, I am</p>
            <p className="name secondaryColor">Sachin Kumar</p>
            <p className="role">Web Developer</p>
            <p className="quickIntro">
              Computer Engineer with more than 3 years of experience
            </p>
            <div className="action">
              <a href={Resume} download>
                <button className="btn button button-fill">Download CV</button>
              </a>
              {/* <button className="btn button">
            <a href="#index">Contact Me</a>
          </button> */}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-self-center flex-column">
            <div>
              <img
                className="img-responsive"
                src={mainPic}
                alt="Sachin Kumar"
                style={{ maxWidth: "100%", height: "auto" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

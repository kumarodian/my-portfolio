import './Home.css';

const Home = () => {
    return (
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <p className="iam title">Hi, I am</p>
                <p className="name secondaryColor">Sachin Kumar</p>
                <p className="role">Web Developer</p>
                <p className="quickIntro">Computer Engineer with more than 5 years of experience</p>
                <div className="action">
                    <button className="btn button button-fill">Download CV</button>
                    <button className="btn button">Contact Me</button>
                </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="profilePic">
                    <img src="images/mainPic.png" alt="Sachin Kumar"></img>
                </div>
            </div>
        </div>
    );
}
export default Home;
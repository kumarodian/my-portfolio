import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Intro from "./Component/Intro/Intro";
import Expertise from "./Component/Expertise/Expertise";
import Qualification from "./Component/Qualification/Qualification";
import RecentWork from "./Component/RecentWork/RecentWork";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
        <Intro />
        <Expertise />
        <Qualification />
        <RecentWork></RecentWork>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

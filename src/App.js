import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Intro from "./Component/Intro/Intro";
import Expertise from "./Component/Expertise/Expertise";
/*import Qualification from './Component/Qualtification';
import RecentWork from './Component/RecentWork';
import ContactMe from './Component/ContactMe';
import Footer from './Component/Footer'; */

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />
        <Intro />
        <Expertise />
        {/* <Qualification></Qualification>
      <RecentWork></RecentWork>
      <ContactMe></ContactMe>
      <Footer></Footer> */}
      </div>
    </div>
  );
}

export default App;

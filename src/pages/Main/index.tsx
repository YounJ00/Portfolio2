import "./style.css";
import "../../js/jquery.js";

import Header from "../../components/Header";
import Home from "./Home";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Footer from "../../components/Footer";
import Activity from "./Activity";

const Main = () => {
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <Home />
        <About />
        <Skill />
        <Project />
        <Activity />
        <Footer />
      </body>
    </div>
  );
};

export default Main;

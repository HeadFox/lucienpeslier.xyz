import React from "react";
import ReactDOM from "react-dom";

// import Main from "../layout/Main";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./App.scss";

const App = () => (
  <div className="home">
    <Header />
    <div>
      <h1 className="home__title">Lucien PESLIER</h1>
      <h2 className="home__subtitle">Développeur Fullstack</h2>
      <a style={{ color: "white" }} href="mailto:contact@lucienpeslier.xyz">contact@lucienpeslier.xyz</a>
    </div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

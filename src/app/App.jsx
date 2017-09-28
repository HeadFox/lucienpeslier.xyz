import React from "react";
import ReactDOM from "react-dom";

import Footer from "../layout/Footer";
import "./App.scss";

const App = () => (
  <div className="home">
    <h1 className="home__title">Lucien PESLIER</h1>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

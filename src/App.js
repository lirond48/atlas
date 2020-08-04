import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./comps/main";

function App() {
  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  );
}

export default App;

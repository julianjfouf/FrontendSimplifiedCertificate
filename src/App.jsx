import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import certificate from "./assets/Cert.pdf";

function App() {
  return (
    <div className="App">
      <a href={certificate}>Certificate</a>
    </div>
  );
}

export default App;

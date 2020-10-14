import React, { useState } from "react";
import "./App.css";

function App() {
  const [clickStatus, setClickStatus] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand-title">Brand Name</div>
      <span
        onClick={() => setClickStatus(!clickStatus)}
        className="toggle-button"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
      <div
        className={
          !clickStatus ? "navbar-links" : "navbar-links navbar-linksActive"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;

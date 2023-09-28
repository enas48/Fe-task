import "./header.css";
import React from "react";

function App() {
  return (
    <ul className="nav flex  header">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Program Details
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Application Form
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Workflow
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Preview
        </a>
      </li>
    </ul>
  );
}

export default App;

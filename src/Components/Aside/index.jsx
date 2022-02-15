import React from "react";
import "./index.css";

function Aside() {
  return (
    <aside>
      <div className="title">
        <span>dev</span>challenges.oi
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a href="#">Typography</a>
          </li>
          <li className="nav-item">
            <a href="#">Grid</a>
          </li>
          <li className="nav-item">
            <a href="#">Buttons</a>
          </li>
          <li className="nav-item">
            <a href="#">Inputs</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;

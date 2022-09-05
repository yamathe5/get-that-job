import React from "react";

import "./sidebarnav.scss";

export default function SidebarNav() {
  return (
    <div className="sidebarNav">
      <div className="sidebarNav__navigation">
        <h2>Logo</h2>

        <ul>
          <li>
            <button>Find that job</button>
          </li>
          <li>Your applications</li>
          <li>Following</li>
          <li>Profile</li>
          <li>Log out</li>
        </ul>
      </div>

      <div className="sidebarNav__credits">
        <p>© 202X - Get That Job</p>
        <p>Codeable - Cohort X Final Project</p>

        <p>Build with ❤ by:</p>
        <ul>
          <li>Ruby Ramirez</li>
          <li>Javier Escribano</li>
          <li>Raul Rubina</li>
          <li>Francisca Reategui</li>
        </ul>
        <p>Source code:</p>
        <ul>
          <li>Ruby on Rails REST API</li>
          <li>React Responsive SPA</li>
        </ul>
      </div>
    </div>
  );
}

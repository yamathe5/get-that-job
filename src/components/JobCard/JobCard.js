import React from "react";

import "./job-card.scss";

export default function JobCard() {
  return (
    <div className="job-card">
      <div className="job-card__img"></div>

      <div className="job-card__info">
        <span className="caption">Manufactoring</span>
        <h2 className="headline-6">The job title</h2>
        <h3 className="subtitle-1-bold">The Company Name</h3>
        <p className="caption">Full time 2.0k - 2.5k</p>
      </div>

      <div className="job-card__buttons">
        <button className="button-transparent">follow</button>
        <button className="button-transparent">see more</button>
      </div>
    </div>
  );
}

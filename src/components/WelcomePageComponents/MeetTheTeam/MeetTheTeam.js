import React from "react";

import TeamMember from "../../../images/Team-member.png";

import "./meet-the-team.scss";

export default function MeetTheTeam() {
  return (
    <div className="meet-the-team">
      <h2 className="meet-the-team__header headline-3 font-pink">
        Meet the team
      </h2>
      <div className="meet-the-team__team">
        <div className="meet-the-team__team__user-card">
          <div className="meet-the-team__team__user-card__img">
            <img src={TeamMember} alt="Team member" />
          </div>
          <h3 className="meet-the-team__team__user-card__name headline-5">
            Ruby ramirez
          </h3>
          <div className="meet-the-team__team__user-card__socials">
            <p>Github</p>
            <p>Linkedin</p>
          </div>
        </div>
        <div className="meet-the-team__team__user-card">
          <div className="meet-the-team__team__user-card__img">
            <img src={TeamMember} alt="Team member" />
          </div>
          <h3 className="meet-the-team__team__user-card__name headline-5">
            Ruby ramirez
          </h3>
          <div className="meet-the-team__team__user-card__socials">
            <p>Github</p>
            <p>Linkedin</p>
          </div>
        </div>
        <div className="meet-the-team__team__user-card">
          <div className="meet-the-team__team__user-card__img">
            <img src={TeamMember} alt="Team member" />
          </div>
          <h3 className="meet-the-team__team__user-card__name headline-5">
            Ruby ramirez
          </h3>
          <div className="meet-the-team__team__user-card__socials">
            <p>Github</p>
            <p>Linkedin</p>
          </div>
        </div>

        <div className="meet-the-team__team__user-card">
          <div className="meet-the-team__team__user-card__img">
            <img src={TeamMember} alt="Team member" />
          </div>
          <h3 className="meet-the-team__team__user-card__name headline-5">
            Ruby ramirez
          </h3>
          <div className="meet-the-team__team__user-card__socials">
            <p>Github</p>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

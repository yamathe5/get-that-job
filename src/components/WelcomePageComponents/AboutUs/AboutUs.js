import React from "react";
import Lupa from "../../../images/Lupa.png";

import "./about-us.scss";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__description">
        <h3 className="about-us__description__title headline-3">
          Find your next job
        </h3>
        <p className="about-us__description__paragraph headline-5">
          Our Machine learning algorithm is so good that it’s even illegal in
          some countries. Join us to use our barelly legal algorithm that is
          actually a group of interns that work on our basement.
        </p>
        <br />
        <p className="about-us__description__paragraph headline-5">
          We have a job for you, no matter your background or previous
          experience. Is sending random memes through chat your only skill?
          That’s ok, we got you, our Rock Star Meme Curator role is here for
          you.
        </p>
      </div>
      <div className="about-us__img">
        <img alt={"asd"} src={Lupa} />
      </div>
    </div>
  );
}

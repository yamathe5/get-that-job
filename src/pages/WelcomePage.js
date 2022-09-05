import React from "react";
import AboutUs from "../components/WelcomePageComponents/AboutUs";
import Header from "../components/CommonComponents/Header/Header";
import MeetTheTeam from "../components/WelcomePageComponents/MeetTheTeam";
import Footer from "../components/CommonComponents/Footer/Footer";

import Workers from "../images/Workers.png";

import "./welcome-page.scss";

export default function WelcomePage() {
  return (
    <>
      <Header></Header>
      <div className="welcome">
        <h1 className="headline-2 text-center">
          The place where you get <span className="font-pink">that</span> job
        </h1>
        <p className="headline-5 text-center">
          With our Machine Learning algorithm you will get that job in no time.
          We promise you! Just give us the money and we will take care of it.
        </p>
        <button className="welcome__button button" href="google.com">
          CREATE AN ACCOUNT NOW
        </button>
        <div>
          <img src={Workers} alt={"wokers"} />
        </div>
      </div>
      <AboutUs></AboutUs>
      <MeetTheTeam></MeetTheTeam>
      <Footer></Footer>
    </>
  );
}

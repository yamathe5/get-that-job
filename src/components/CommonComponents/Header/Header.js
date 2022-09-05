import React from "react";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__container__logo">Get That Job</h1>
        <div className="header__buttons">
          <button className="button-transparent">SIGN UP</button>
          <button className="button">LOG IN</button>
        </div>
      </div>
    </header>
  );
}

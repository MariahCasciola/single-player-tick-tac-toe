import React from "react";

function Header() {
  return (
    <header>
      <h1 id="title" className="center">
        Tic-Tac-Toe
      </h1>
      <div className="o center"> Pick your difficulty</div>
      <button className="restart-button">easy</button>
      <button className="restart-button">medium</button>
      <button className="restart-button">super</button>
    </header>
  );
}

export default Header;

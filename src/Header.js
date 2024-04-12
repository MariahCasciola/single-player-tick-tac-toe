import React from "react";
import { Link } from "react-router-dom";
import { useHref } from "react-router-dom";

function Header() {
  const path = useHref();

  return (
    <header>
      <h1 id="title" className="center">
        Tic-Tac-Toe
      </h1>
      <div className="o center"> Pick your difficulty</div>
      <Link to="/medium">
        <button className="restart-button">medium</button>
      </Link>
      <Link to="/super">
        <button className="restart-button">super</button>
      </Link>
    </header>
  );
}

export default Header;
